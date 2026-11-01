import { test, expect } from "@playwright/test";
import { books, ideas } from "../lib/catalog";
import { validateBackup } from "../lib/db";

test("120 fiches originales, 40 par domaine, rattachées à 42 références", () => {
  expect(ideas).toHaveLength(120);
  expect(books).toHaveLength(42);
  expect(new Set(ideas.map((i) => i.id)).size).toBe(ideas.length);
  expect(new Set(ideas.map((i) => i.title.toLocaleLowerCase("fr"))).size).toBe(
    ideas.length,
  );
  expect(new Set(books.map((b) => b.id)).size).toBe(books.length);
  for (const category of [
    "Philosophie",
    "Psychologie",
    "Business et stratégie",
  ])
    expect(ideas.filter((i) => i.category === category)).toHaveLength(40);
  for (const idea of ideas) {
    const source = books.find((b) => b.id === idea.bookId);
    expect(source, idea.id).toBeDefined();
    expect(source!.category).toBe(idea.category);
    expect(idea.content.length).toBeGreaterThanOrEqual(2);
    expect(
      [idea.hook, ...idea.content, idea.example, idea.takeaway]
        .join(" ")
        .split(/\s+/).length,
      idea.title,
    ).toBeGreaterThanOrEqual(100);
    expect(idea.example.length).toBeGreaterThan(50);
    expect(idea.takeaway.length).toBeGreaterThan(30);
    expect(idea.sourceReference.length).toBeGreaterThan(20);
    expect(idea.readingTime).toBeGreaterThanOrEqual(1);
  }
  for (const book of books) {
    expect(new URL(book.sourceUrl).protocol).toBe("https:");
    expect(
      ideas.some((i) => i.bookId === book.id),
      book.id,
    ).toBeTruthy();
  }
});

test("les identifiants historiques et les sauvegardes V1 restent compatibles", () => {
  for (let n = 1; n <= 20; n++)
    expect(
      ideas.some((i) => i.id === `idea-${String(n).padStart(2, "0")}`),
    ).toBeTruthy();
  const backup = {
    version: 1,
    exportedAt: "2026-10-31T12:00:00.000Z",
    favorites: ["idea-01", "idea-20"],
    readingHistory: [
      {
        ideaId: "idea-20",
        progress: 40,
        visitedAt: "2026-10-31T12:00:00.000Z",
      },
    ],
    collections: [
      {
        id: "existing",
        name: "Ancienne collection",
        description: "",
        createdAt: "2026-10-31T12:00:00.000Z",
        ideaIds: ["idea-01"],
      },
    ],
    preferences: { id: "main", theme: "dark", fontSize: "normal" },
  };
  expect(validateBackup(backup)).toEqual(backup);
});
