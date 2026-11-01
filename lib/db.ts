import Dexie, { type EntityTable } from "dexie";
import { ideas, books } from "./catalog";
import type {
  Idea,
  Book,
  Collection,
  History,
  Preferences,
  Backup,
} from "./types";
export const db = new Dexie("uknow") as Dexie & {
  ideas: EntityTable<Idea, "id">;
  books: EntityTable<Book, "id">;
  favorites: EntityTable<{ ideaId: string }, "ideaId">;
  history: EntityTable<History, "ideaId">;
  collections: EntityTable<Collection, "id">;
  preferences: EntityTable<Preferences, "id">;
};
db.version(1).stores({
  ideas: "id,category,bookId,title",
  books: "id,category,title,author",
  favorites: "ideaId",
  history: "ideaId,visitedAt",
  collections: "id,createdAt",
  preferences: "id",
});
export async function initialize() {
  await db.transaction("rw", [db.ideas, db.books, db.preferences], async () => {
    await db.ideas.bulkPut(ideas);
    await db.books.bulkPut(books);
    if (!(await db.preferences.get("main")))
      await db.preferences.put({
        id: "main",
        theme: matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
        fontSize: "normal",
      });
  });
}
export async function toggleFavorite(ideaId: string) {
  await db.transaction("rw", db.favorites, async () => {
    if (await db.favorites.get(ideaId)) await db.favorites.delete(ideaId);
    else await db.favorites.add({ ideaId });
  });
}
export async function exportBackup(): Promise<Backup> {
  return db.transaction(
    "r",
    [db.favorites, db.history, db.collections, db.preferences],
    async () => ({
      version: 1,
      exportedAt: new Date().toISOString(),
      favorites: (await db.favorites.toArray()).map((f) => f.ideaId),
      readingHistory: await db.history.toArray(),
      collections: await db.collections.toArray(),
      preferences: (await db.preferences.get("main"))!,
    }),
  );
}
const isRecord = (v: unknown): v is Record<string, unknown> =>
  !!v && typeof v === "object" && !Array.isArray(v);
const date = (v: unknown): v is string =>
  typeof v === "string" && Number.isFinite(Date.parse(v));
const idSet = new Set(ideas.map((i) => i.id));
const knownId = (v: unknown): v is string =>
  typeof v === "string" && idSet.has(v);
export function validateBackup(v: unknown): Backup {
  const fail = () => {
    throw new Error(
      "Sauvegarde invalide ou incompatible. Aucune donnée n’a été modifiée.",
    );
  };
  if (
    !isRecord(v) ||
    v.version !== 1 ||
    !date(v.exportedAt) ||
    !Array.isArray(v.favorites) ||
    !Array.isArray(v.readingHistory) ||
    !Array.isArray(v.collections) ||
    !isRecord(v.preferences)
  )
    return fail();
  if (
    v.favorites.length > ideas.length ||
    !v.favorites.every(knownId) ||
    new Set(v.favorites).size !== v.favorites.length
  )
    return fail();
  if (
    v.readingHistory.length > ideas.length ||
    !v.readingHistory.every(
      (h) =>
        isRecord(h) &&
        knownId(h.ideaId) &&
        typeof h.progress === "number" &&
        Number.isFinite(h.progress) &&
        h.progress >= 0 &&
        h.progress <= 100 &&
        date(h.visitedAt),
    )
  )
    return fail();
  if (
    new Set(v.readingHistory.map((h) => h.ideaId)).size !==
    v.readingHistory.length
  )
    return fail();
  if (
    v.collections.length > 1000 ||
    !v.collections.every(
      (c) =>
        isRecord(c) &&
        typeof c.id === "string" &&
        c.id.length > 0 &&
        c.id.length < 100 &&
        typeof c.name === "string" &&
        c.name.trim().length > 0 &&
        c.name.length <= 80 &&
        typeof c.description === "string" &&
        c.description.length <= 1000 &&
        date(c.createdAt) &&
        Array.isArray(c.ideaIds) &&
        c.ideaIds.length <= ideas.length &&
        c.ideaIds.every(knownId) &&
        new Set(c.ideaIds).size === c.ideaIds.length,
    )
  )
    return fail();
  if (new Set(v.collections.map((c) => c.id)).size !== v.collections.length)
    return fail();
  if (
    v.preferences.id !== "main" ||
    !["light", "dark"].includes(v.preferences.theme as string) ||
    !["normal", "large"].includes(v.preferences.fontSize as string)
  )
    return fail();
  return v as unknown as Backup;
}
export async function importBackup(value: unknown) {
  const b = validateBackup(value);
  await db.transaction(
    "rw",
    [db.favorites, db.history, db.collections, db.preferences],
    async () => {
      await db.favorites.clear();
      await db.history.clear();
      await db.collections.clear();
      await db.favorites.bulkPut(b.favorites.map((ideaId) => ({ ideaId })));
      await db.history.bulkPut(b.readingHistory);
      await db.collections.bulkPut(b.collections);
      await db.preferences.put(b.preferences);
    },
  );
}
