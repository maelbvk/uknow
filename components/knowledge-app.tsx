"use client";
import { useEffect, useRef, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Bookmark,
  BookOpen,
  Compass,
  FolderOpen,
  Search,
  Shuffle,
  Sun,
  Moon,
  X,
  Plus,
  Check,
  Download,
  Upload,
  Settings,
  WifiOff,
  ChevronRight,
  Leaf,
  Sparkles,
  Clock,
  Trash2,
  Pencil,
} from "lucide-react";
import {
  db,
  initialize,
  toggleFavorite,
  exportBackup,
  importBackup,
  validateBackup,
} from "@/lib/db";
import { books } from "@/lib/catalog";
import IdeaCard from "./idea-card";
import { useReadingProgress } from "@/lib/use-reading-progress";
import { categoryClass } from "@/lib/presentation";
import type { Idea, Category, Backup } from "@/lib/types";
const categories: Category[] = [
  "Business et stratégie",
  "Psychologie",
  "Philosophie",
];

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
type View = "discover" | "library" | "collections" | "settings";
export default function KnowledgeApp() {
  const [ready, setReady] = useState(false),
    [error, setError] = useState(""),
    [notice, setNotice] = useState("");
  const [view, setView] = useState<View>("discover"),
    [activeId, setActiveId] = useState<string | null>(null),
    [category, setCategory] = useState("Toutes les idées"),
    [query, setQuery] = useState(""),
    [tab, setTab] = useState("favorites");
  const [collectionId, setCollectionId] = useState<string | null>(null),
    [editor, setEditor] = useState<{
      id?: string;
      name: string;
      description: string;
    } | null>(null),
    [picker, setPicker] = useState<string | null>(null),
    [deleting, setDeleting] = useState<string | null>(null);
  const [pendingImport, setPendingImport] = useState<Backup | null>(null),
    [online, setOnline] = useState(true),
    [offlineReady, setOfflineReady] = useState(false),
    [swMessage, setSwMessage] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const catalog = useLiveQuery(() => db.ideas.toArray(), [], []),
    favorites = useLiveQuery(() => db.favorites.toArray(), [], []),
    history = useLiveQuery(
      () => db.history.orderBy("visitedAt").reverse().toArray(),
      [],
      [],
    ),
    collections = useLiveQuery(
      () => db.collections.orderBy("createdAt").toArray(),
      [],
      [],
    ),
    prefs = useLiveQuery(() => db.preferences.get("main"));
  const active = catalog.find((i) => i.id === activeId),
    favoriteIds = new Set(favorites.map((f) => f.ideaId));
  const progress = useReadingProgress(ready ? active?.id : undefined, setError);
  const run = async (fn: () => Promise<unknown>) => {
    try {
      await fn();
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Une erreur est survenue. Réessayez.",
      );
    }
  };
  useEffect(() => {
    initialize()
      .then(() => setReady(true))
      .catch(() =>
        setError(
          "Le stockage local est indisponible. Autorisez le stockage du site puis rechargez la page.",
        ),
      );
    const update = () => setOnline(navigator.onLine);
    update();
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    const onMessage = (e: MessageEvent) => {
      if (e.data?.type === "OFFLINE_READY") {
        setOfflineReady(true);
        setSwMessage("");
      }
      if (e.data?.type === "OFFLINE_ERROR")
        setSwMessage(
          "La préparation hors ligne a échoué. Reconnectez-vous et rechargez.",
        );
    };
    navigator.serviceWorker.addEventListener("message", onMessage);
    navigator.serviceWorker
      .register("/sw.js")
      .then(() => navigator.serviceWorker.ready)
      .then(async (registration) => {
        const check = () =>
          registration.active?.postMessage({ type: "CHECK_OFFLINE" });
        check();
        navigator.serviceWorker.addEventListener("controllerchange", check, {
          once: true,
        });
      })
      .catch(() =>
        setSwMessage("Le mode hors ligne nécessite HTTPS ou localhost."),
      );
    return () =>
      navigator.serviceWorker.removeEventListener("message", onMessage);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = prefs?.theme || "light";
  }, [prefs?.theme]);
  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(""), 4000);
    return () => clearTimeout(t);
  }, [notice]);
  useEffect(() => {
    const sync = () => {
      const p = new URLSearchParams(location.hash.slice(1));
      const v = p.get("view");
      setView(
        v === "library" || v === "collections" || v === "settings"
          ? v
          : "discover",
      );
      setActiveId(p.get("idea"));
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  const navigate = (v: View) => {
    location.hash = `view=${v}`;
    setQuery("");
    setCollectionId(null);
    window.scrollTo(0, 0);
  };
  const open = (idea: Idea) => {
    location.hash = `view=${view}&idea=${idea.id}`;
  };
  const random = () => {
    const candidates = catalog.filter(
      (i) =>
        i.id !== activeId &&
        (category === "Toutes les idées" || i.category === category),
    );
    if (candidates.length)
      open(candidates[Math.floor(Math.random() * candidates.length)]);
  };
  const close = () => {
    location.hash = `view=${view}`;
  };
  const matches = (i: Idea) => {
    const b = books.find((b) => b.id === i.bookId);
    return (
      (category === "Toutes les idées" || i.category === category) &&
      normalize(
        [i.title, i.hook, i.category, b?.title, b?.author].join(" "),
      ).includes(normalize(query))
    );
  };
  const filtered = catalog.filter(matches),
    selectedCollection = collections.find((c) => c.id === collectionId);
  const dayNumber = Math.floor(Date.now() / 86400000),
    daily = catalog.length ? catalog[dayNumber % catalog.length] : undefined;
  const resume = history.find(
    (h) => h.progress < 100 && catalog.some((i) => i.id === h.ideaId),
  );
  const save = (id: string) =>
    run(async () => {
      await toggleFavorite(id);
      setNotice(
        favoriteIds.has(id)
          ? "Idée retirée des favoris"
          : "Idée sauvegardée dans votre bibliothèque",
      );
    });

  const empty = (title: string, description: string) => (
    <div className="empty">
      <BookOpen size={32} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="text-button" onClick={() => navigate("discover")}>
        Explorer les idées <ArrowRight size={16} />
      </button>
    </div>
  );
  const modalOpen = !!(editor || picker || deleting || pendingImport);
  useEffect(() => {
    if (!modalOpen) return;
    const previous = document.activeElement as HTMLElement;
    const dialog = document.querySelector<HTMLElement>('[role="dialog"]');
    const focusable = () =>
      Array.from(
        dialog?.querySelectorAll<HTMLElement>("button,input,textarea,[href]") ||
          [],
      );
    focusable()[0]?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setEditor(null);
        setPicker(null);
        setDeleting(null);
        setPendingImport(null);
      }
      if (e.key === "Tab") {
        const items = focusable();
        if (!items.length) return;
        const first = items[0],
          last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", key);
      document.body.style.overflow = old;
      previous?.focus();
    };
  }, [modalOpen]);
  return (
    <>
      <a className="skip" href="#main">
        Aller au contenu
      </a>
      <div className="app-shell" inert={modalOpen}>
        <aside className="sidebar">
          <button className="brand" onClick={() => navigate("discover")}>
            <span className="wordmark">underlined</span>
          </button>
          <p className="brand-caption">Un peu plus loin, chaque jour.</p>
          <nav aria-label="Navigation principale">
            {(
              [
                { id: "discover", label: "Découvrir", icon: Compass },
                { id: "library", label: "Bibliothèque", icon: BookOpen },
                { id: "collections", label: "Collections", icon: FolderOpen },
              ] as const
            ).map((n) => (
              <button
                key={n.id}
                className={`nav-item ${view === n.id ? "active" : ""}`}
                onClick={() => navigate(n.id)}
                aria-current={view === n.id ? "page" : undefined}
              >
                <n.icon size={20} />
                {n.label}
                {n.id === "library" && favorites.length > 0 && (
                  <span className="count">{favorites.length}</span>
                )}
              </button>
            ))}
          </nav>
          <div className="sidebar-note">
            <Leaf size={24} />
            <p>
              La curiosité se cultive.
              <br />
              <strong>Une idée à la fois.</strong>
            </p>
            <span>Votre espace, à votre rythme.</span>
          </div>
          <button
            className={`nav-item settings-nav ${view === "settings" ? "active" : ""}`}
            onClick={() => navigate("settings")}
          >
            <Settings size={19} />
            Préférences
          </button>
          <div className="local-status">
            <span
              className={offlineReady ? "status-dot" : "status-dot pending"}
            />
            {offlineReady ? "Prêt pour le hors-ligne" : "Bibliothèque locale"}
          </div>
        </aside>
        <div className="workspace">
          <header className="topbar">
            <span className="breadcrumb">
              Votre espace personnel <span>/</span>{" "}
              <strong>
                {
                  {
                    discover: "Découvrir",
                    library: "Bibliothèque",
                    collections: "Collections",
                    settings: "Préférences",
                  }[view]
                }
              </strong>
            </span>
            <span className="mobile-brand wordmark">underlined</span>
            <div className="header-actions">
              <span className="offline-indicator">
                {!online ? (
                  <>
                    <WifiOff size={14} />
                    Hors ligne
                  </>
                ) : (
                  <>
                    <span className="status-dot" />
                    Stocké sur cet appareil
                  </>
                )}
              </span>
              <button
                className="icon-button"
                aria-label={
                  prefs?.theme === "dark"
                    ? "Activer le mode clair"
                    : "Activer le mode sombre"
                }
                onClick={() =>
                  run(() =>
                    db.preferences.update("main", {
                      theme: prefs?.theme === "dark" ? "light" : "dark",
                    }),
                  )
                }
              >
                {prefs?.theme === "dark" ? (
                  <Sun size={19} />
                ) : (
                  <Moon size={19} />
                )}
              </button>
              <span className="avatar" aria-label="Espace personnel">
                M
              </span>
            </div>
          </header>
          <main id="main" className={active ? "reader-main" : ""}>
            {error && (
              <div className="error" role="alert">
                {error}
                <button
                  onClick={() => setError("")}
                  aria-label="Fermer l’erreur"
                >
                  <X size={17} />
                </button>
              </div>
            )}
            {!ready ? (
              <div className="loading" role="status">
                <span className="spinner" />
                Préparation de votre bibliothèque…
              </div>
            ) : active ? (
              <>
                <div
                  className="reader-progress"
                  role="progressbar"
                  aria-label="Progression de lecture"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span style={{ width: `${progress}%` }} />
                </div>
                <div className="reader-toolbar">
                  <button className="text-button" onClick={close}>
                    <ArrowLeft size={18} />
                    Retour
                  </button>
                  <div>
                    <button
                      className="icon-button"
                      aria-label="Changer la taille du texte"
                      onClick={() =>
                        run(() =>
                          db.preferences.update("main", {
                            fontSize:
                              prefs?.fontSize === "large" ? "normal" : "large",
                          }),
                        )
                      }
                    >
                      Aa
                    </button>
                    <button
                      className="icon-button"
                      aria-label="Ajouter à une collection"
                      onClick={() => setPicker(active.id)}
                    >
                      <FolderOpen size={20} />
                    </button>
                    <button
                      className={`icon-button ${favoriteIds.has(active.id) ? "saved" : ""}`}
                      aria-label={
                        favoriteIds.has(active.id)
                          ? "Retirer des favoris"
                          : "Sauvegarder cette idée"
                      }
                      onClick={() => save(active.id)}
                    >
                      <Bookmark
                        size={20}
                        fill={
                          favoriteIds.has(active.id) ? "currentColor" : "none"
                        }
                      />
                    </button>
                  </div>
                </div>
                <article
                  className={`reader ${prefs?.fontSize === "large" ? "large-text" : ""}`}
                >
                  <span
                    className={`category-label ${categoryClass(active.category)}`}
                  >
                    {active.category}
                  </span>
                  <h1>{active.title}</h1>
                  <div className="reader-meta">
                    <span>
                      {books.find((b) => b.id === active.bookId)?.author}
                    </span>
                    <span>
                      <Clock size={14} />
                      {active.readingTime} min de lecture
                    </span>
                  </div>
                  <p className="reader-hook">{active.hook}</p>
                  {active.content.map((p, n) => (
                    <p key={n}>{p}</p>
                  ))}
                  <section className="example">
                    <span>EN PRATIQUE</span>
                    <p>{active.example}</p>
                  </section>
                  <section className="takeaway">
                    <Sparkles size={23} />
                    <h2>À retenir</h2>
                    <p>{active.takeaway}</p>
                  </section>
                  <section className="reference">
                    <h2>À la source de cette idée</h2>
                    <strong>
                      {books.find((b) => b.id === active.bookId)?.title}
                    </strong>
                    <p>
                      {books.find((b) => b.id === active.bookId)?.author} ·{" "}
                      {active.sourceReference}
                    </p>
                    <p>
                      Synthèse originale et interprétations signalées. Cette
                      fiche n’est ni une citation ni une analyse intégrale de
                      l’ouvrage. Référence bibliographique identifiée ; accès
                      intégral non garanti.
                    </p>
                    <a
                      href={
                        books.find((b) => b.id === active.bookId)?.sourceUrl
                      }
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => {
                        if (!online) {
                          e.preventDefault();
                          setError(
                            "La source externe nécessite une connexion. La fiche reste disponible hors ligne.",
                          );
                        }
                      }}
                    >
                      Consulter la référence <ArrowUpRight size={15} />
                    </a>
                  </section>
                  <div className="reader-end">
                    <button
                      className="primary-button"
                      onClick={() => save(active.id)}
                    >
                      <Bookmark size={17} />
                      {favoriteIds.has(active.id)
                        ? "Retirer des favoris"
                        : "Garder cette idée"}
                    </button>
                    <button className="text-button" onClick={random}>
                      Une autre idée <Shuffle size={17} />
                    </button>
                  </div>
                </article>
              </>
            ) : activeId ? (
              <>
                {empty(
                  "Cette idée est introuvable",
                  "Retrouvez les fiches disponibles dans Découvrir.",
                )}
                <button className="text-button" onClick={close}>
                  Revenir
                </button>
              </>
            ) : (
              <>
                {view === "discover" && (
                  <>
                    <div className="page-heading">
                      <div>
                        <p className="eyebrow">
                          <span /> LE RENDEZ-VOUS DES ESPRITS CURIEUX
                        </p>
                        <h1>
                          Un nouveau regard
                          <br />
                          commence par une idée<span>.</span>
                        </h1>
                        <p className="subtitle">
                          Quelques minutes pour comprendre. Des idées pour
                          longtemps.
                        </p>
                      </div>
                      <div className="heading-illustration" aria-hidden="true">
                        <span>u</span>
                        <i />
                        <small>RESTEZ CURIEUX</small>
                      </div>
                    </div>
                    <div className="section-title">
                      <h2>
                        <Sparkles size={19} /> La sélection du jour
                      </h2>
                      <span>Une pause. Un déclic.</span>
                    </div>
                    <div className="daily-layout">
                      {daily && (
                        <IdeaCard
                          idea={daily}
                          featured
                          saved={favoriteIds.has(daily.id)}
                          onSave={save}
                          onRead={open}
                        />
                      )}
                      <aside className="discovery-aside">
                        <div className="serendipity">
                          <span className="mini-label">
                            LAISSEZ FAIRE LE HASARD
                          </span>
                          <Shuffle size={37} strokeWidth={1.3} />
                          <h3>
                            Votre prochaine
                            <br />
                            bonne idée vous attend.
                          </h3>
                          <p>
                            Sortez de vos habitudes.
                            <br />
                            Suivez votre curiosité.
                          </p>
                          <button onClick={random}>
                            Surprenez-moi <ArrowUpRight size={17} />
                          </button>
                        </div>
                        <div className="reading-note">
                          {resume ? (
                            <>
                              <BookOpen size={22} />
                              <div>
                                <span>REPRENDRE MA LECTURE</span>
                                <button
                                  onClick={() =>
                                    open(
                                      catalog.find(
                                        (i) => i.id === resume.ideaId,
                                      )!,
                                    )
                                  }
                                >
                                  {
                                    catalog.find((i) => i.id === resume.ideaId)
                                      ?.title
                                  }
                                  <ChevronRight size={17} />
                                </button>
                                <small>{resume.progress}% parcouru</small>
                              </div>
                            </>
                          ) : (
                            <>
                              <BookOpen size={23} />
                              <div>
                                <strong>
                                  Votre prochaine habitude préférée
                                </strong>
                                <p>
                                  Deux minutes de lecture, un peu chaque jour.
                                </p>
                              </div>
                            </>
                          )}
                        </div>
                      </aside>
                    </div>
                    <div className="section-title explore-title">
                      <h2>À explorer, à votre rythme</h2>
                      <span>{catalog.length} idées à découvrir</span>
                    </div>
                  </>
                )}
                {view === "library" && (
                  <>
                    <div className="page-heading compact">
                      <div>
                        <p className="eyebrow">VOS IDÉES PRENNENT RACINE</p>
                        <h1>
                          Votre bibliothèque<span>.</span>
                        </h1>
                        <p className="subtitle">
                          Ce qui vous inspire, toujours à portée de main.
                        </p>
                      </div>
                      <BookOpen size={60} strokeWidth={1} />
                    </div>
                    <div
                      className="tabs"
                      role="group"
                      aria-label="Contenu de la bibliothèque"
                    >
                      {[
                        ["favorites", "Sauvegardées"],
                        ["books", "Livres & sources"],
                        ["history", "Récemment lues"],
                      ].map(([key, label]) => (
                        <button
                          key={key}
                          className={tab === key ? "selected" : ""}
                          onClick={() => setTab(key)}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
                {view === "collections" && (
                  <>
                    <div className="page-heading compact">
                      <div>
                        <p className="eyebrow">FAITES DES LIENS</p>
                        <h1>
                          {selectedCollection
                            ? selectedCollection.name
                            : "Vos collections"}
                          <span>.</span>
                        </h1>
                        <p className="subtitle">
                          {selectedCollection?.description ||
                            "Des idées qui se rencontrent. Des perspectives qui grandissent."}
                        </p>
                      </div>
                      <button
                        className="primary-button"
                        onClick={() => setEditor({ name: "", description: "" })}
                      >
                        <Plus size={17} />
                        Nouvelle collection
                      </button>
                    </div>
                    {selectedCollection && (
                      <div className="collection-toolbar">
                        <button
                          className="text-button"
                          onClick={() => setCollectionId(null)}
                        >
                          <ArrowLeft size={17} />
                          Toutes les collections
                        </button>
                        <button
                          className="text-button"
                          onClick={() =>
                            setEditor({
                              id: selectedCollection.id,
                              name: selectedCollection.name,
                              description: selectedCollection.description,
                            })
                          }
                        >
                          <Pencil size={15} />
                          Modifier
                        </button>
                        <button
                          className="text-button danger"
                          onClick={() => setDeleting(selectedCollection.id)}
                        >
                          <Trash2 size={15} />
                          Supprimer
                        </button>
                      </div>
                    )}
                  </>
                )}
                {(view === "discover" ||
                  view === "library" ||
                  (view === "collections" && selectedCollection)) && (
                  <div className="filter-bar">
                    <div
                      className="filters"
                      role="group"
                      aria-label="Catégories"
                    >
                      {["Toutes les idées", ...categories].map((c) => (
                        <button
                          className={category === c ? "selected" : ""}
                          key={c}
                          onClick={() => setCategory(c)}
                        >
                          {c === "Toutes les idées"
                            ? c
                            : c === "Business et stratégie"
                              ? "Business & stratégie"
                              : c}
                        </button>
                      ))}
                    </div>
                    <label className="search">
                      <Search size={17} />
                      <input
                        aria-label="Rechercher des idées"
                        placeholder="Rechercher une idée…"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                      {query && (
                        <button
                          aria-label="Effacer la recherche"
                          onClick={() => setQuery("")}
                        >
                          <X size={15} />
                        </button>
                      )}
                    </label>
                  </div>
                )}
                {view === "discover" &&
                  (filtered.length ? (
                    <div className="idea-grid">
                      {filtered.map((i) => (
                        <IdeaCard
                          key={i.id}
                          idea={i}
                          saved={favoriteIds.has(i.id)}
                          onSave={save}
                          onRead={open}
                        />
                      ))}
                    </div>
                  ) : (
                    empty(
                      "Aucune idée trouvée",
                      "Essayez un autre mot, une catégorie ou un auteur.",
                    )
                  ))}
                {view === "library" &&
                  tab !== "books" &&
                  (() => {
                    const list =
                      tab === "favorites"
                        ? filtered.filter((i) => favoriteIds.has(i.id))
                        : history
                            .map((h) => filtered.find((i) => i.id === h.ideaId))
                            .filter((i): i is Idea => !!i);
                    return list.length ? (
                      <div className="idea-grid">
                        {list.map((i) => (
                          <IdeaCard
                            key={i.id}
                            idea={i}
                            saved={favoriteIds.has(i.id)}
                            onSave={save}
                            onRead={open}
                          />
                        ))}
                      </div>
                    ) : (
                      empty(
                        tab === "favorites"
                          ? "Gardez ce qui vous fait réfléchir"
                          : "La première page vous attend",
                        query
                          ? "Aucun résultat pour cette recherche."
                          : "Vos idées sauvegardées et vos lectures apparaîtront ici.",
                      )
                    );
                  })()}
                {view === "library" && tab === "books" && (
                  <div className="book-grid">
                    {books
                      .filter(
                        (b) =>
                          (category === "Toutes les idées" ||
                            b.category === category) &&
                          normalize(
                            b.title + " " + b.author + " " + b.category,
                          ).includes(normalize(query)),
                      )
                      .map((b, n) => (
                        <article className="book-item" key={b.id}>
                          <div
                            className={`book-cover ${categoryClass(b.category)}`}
                            aria-hidden="true"
                          >
                            <span>UNDERLINED / SOURCES</span>
                            <strong>{b.title}</strong>
                            <small>{b.author}</small>
                            <i>{String(n + 1).padStart(2, "0")}</i>
                          </div>
                          <span className="category-label">
                            {b.sourceType} · {b.language.toUpperCase()}
                          </span>
                          <h3>{b.title}</h3>
                          <p>{b.description}</p>
                          <button
                            className="text-button"
                            onClick={() => {
                              setCategory(b.category);
                              location.hash = "view=discover";
                              setQuery(b.title);
                            }}
                          >
                            Explorer les fiches <ArrowRight size={16} />
                          </button>
                        </article>
                      ))}
                    {!books.some(
                      (b) =>
                        (category === "Toutes les idées" ||
                          b.category === category) &&
                        normalize(
                          b.title + " " + b.author + " " + b.category,
                        ).includes(normalize(query)),
                    ) &&
                      empty(
                        "Aucune source trouvée",
                        "Essayez un autre titre ou auteur.",
                      )}
                  </div>
                )}
                {view === "collections" && !selectedCollection && (
                  <div className="collections-grid">
                    {collections.map((c, n) => (
                      <article className="collection-card" key={c.id}>
                        <button
                          className="collection-open"
                          onClick={() => {
                            setCollectionId(c.id);
                            setQuery("");
                            setCategory("Toutes les idées");
                          }}
                        >
                          <div className={`collection-art art-${n % 3}`}>
                            <FolderOpen size={46} strokeWidth={1} />
                            <span>{String(n + 1).padStart(2, "0")}</span>
                          </div>
                          <h3>{c.name}</h3>
                          <p>
                            {c.description ||
                              "Un espace pour relier vos idées."}
                          </p>
                          <small>
                            {c.ideaIds.length} idée
                            {c.ideaIds.length !== 1 ? "s" : ""}
                            <ArrowUpRight size={16} />
                          </small>
                        </button>
                      </article>
                    ))}
                    {!collections.length &&
                      empty(
                        "Un espace pour vos découvertes",
                        "Créez une collection, puis ajoutez des idées depuis leur écran de lecture.",
                      )}
                  </div>
                )}
                {view === "collections" &&
                  selectedCollection &&
                  (filtered.filter((i) =>
                    selectedCollection.ideaIds.includes(i.id),
                  ).length ? (
                    <div className="idea-grid">
                      {filtered
                        .filter((i) =>
                          selectedCollection.ideaIds.includes(i.id),
                        )
                        .map((i) => (
                          <div key={i.id}>
                            <IdeaCard
                              idea={i}
                              saved={favoriteIds.has(i.id)}
                              onSave={save}
                              onRead={open}
                            />
                            <button
                              className="remove-button"
                              onClick={() =>
                                run(() =>
                                  db.collections.update(selectedCollection.id, {
                                    ideaIds: selectedCollection.ideaIds.filter(
                                      (id) => id !== i.id,
                                    ),
                                  }),
                                )
                              }
                            >
                              Retirer de la collection
                            </button>
                          </div>
                        ))}
                    </div>
                  ) : (
                    empty(
                      "Cette collection attend ses idées",
                      "Ouvrez une fiche et utilisez l’icône collection pour l’ajouter.",
                    )
                  ))}
                {view === "settings" && (
                  <>
                    <div className="page-heading compact">
                      <div>
                        <p className="eyebrow">UN ESPACE À VOTRE IMAGE</p>
                        <h1>
                          Les petits réglages<span>.</span>
                        </h1>
                        <p className="subtitle">
                          Votre lecture, vos données, vos choix.
                        </p>
                      </div>
                    </div>
                    <div className="settings-grid">
                      <section className="settings-card">
                        <h2>Confort de lecture</h2>
                        <div className="setting-row">
                          <span>Apparence</span>
                          <button
                            className="secondary-button"
                            onClick={() =>
                              run(() =>
                                db.preferences.update("main", {
                                  theme:
                                    prefs?.theme === "dark" ? "light" : "dark",
                                }),
                              )
                            }
                          >
                            {prefs?.theme === "dark" ? (
                              <Moon size={17} />
                            ) : (
                              <Sun size={17} />
                            )}
                            Mode {prefs?.theme === "dark" ? "sombre" : "clair"}
                          </button>
                        </div>
                        <div className="setting-row">
                          <span>Taille du texte</span>
                          <button
                            className="secondary-button"
                            onClick={() =>
                              run(() =>
                                db.preferences.update("main", {
                                  fontSize:
                                    prefs?.fontSize === "large"
                                      ? "normal"
                                      : "large",
                                }),
                              )
                            }
                          >
                            {prefs?.fontSize === "large"
                              ? "Grande"
                              : "Confortable"}
                          </button>
                        </div>
                      </section>
                      <section className="settings-card">
                        <h2>Vos données vous appartiennent</h2>
                        <p>
                          Favoris, historique, collections et préférences sont
                          conservés sur cet appareil, sans compte et sans
                          synchronisation.
                        </p>
                        <div className="button-row">
                          <button
                            className="secondary-button"
                            onClick={() =>
                              run(async () => {
                                const blob = new Blob(
                                  [
                                    JSON.stringify(
                                      await exportBackup(),
                                      null,
                                      2,
                                    ),
                                  ],
                                  { type: "application/json" },
                                );
                                const url = URL.createObjectURL(blob);
                                const a = document.createElement("a");
                                a.href = url;
                                a.download = `underlined-${new Date().toISOString().slice(0, 10)}.json`;
                                a.click();
                                setTimeout(
                                  () => URL.revokeObjectURL(url),
                                  1000,
                                );
                                setNotice("Sauvegarde exportée");
                              })
                            }
                          >
                            <Download size={17} />
                            Exporter JSON
                          </button>
                          <button
                            className="secondary-button"
                            onClick={() => input.current?.click()}
                          >
                            <Upload size={17} />
                            Importer JSON
                          </button>
                          <input
                            hidden
                            ref={input}
                            type="file"
                            accept="application/json,.json"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file)
                                void run(async () => {
                                  if (file.size > 5_000_000)
                                    throw new Error(
                                      "Fichier trop volumineux (maximum 5 Mo).",
                                    );
                                  setPendingImport(
                                    validateBackup(
                                      JSON.parse(await file.text()),
                                    ),
                                  );
                                });
                              e.target.value = "";
                            }}
                          />
                        </div>
                      </section>
                      <section className="settings-card">
                        <h2>Votre bibliothèque hors ligne</h2>
                        <p>
                          {offlineReady
                            ? "Les ressources de l’application sont prêtes pour une lecture sans connexion."
                            : "Préparation des ressources hors ligne…"}{" "}
                          {swMessage}
                        </p>
                        <p>
                          {catalog.length} fiches disponibles dans le stockage
                          local. Les liens vers les sources externes nécessitent
                          Internet.
                        </p>
                        <button
                          className="text-button"
                          onClick={() =>
                            run(async () => {
                              const granted =
                                await navigator.storage?.persist?.();
                              setNotice(
                                granted
                                  ? "Stockage persistant accordé"
                                  : "Le navigateur gère la conservation. Exportez régulièrement vos données.",
                              );
                            })
                          }
                        >
                          Demander la conservation du stockage{" "}
                          <ArrowUpRight size={16} />
                        </button>
                        <small>
                          iOS peut supprimer les données d’un site. Gardez une
                          copie JSON en lieu sûr, notamment avant d’effacer les
                          données Safari.
                        </small>
                      </section>
                      <section className="settings-card">
                        <h2>Installer sur iPhone</h2>
                        <p>
                          Ouvrez l’application en HTTPS dans Safari. Touchez
                          Partager, puis « Sur l’écran d’accueil » et « Ajouter
                          ».
                        </p>
                        <p>
                          Ouvrez-la une première fois avec Internet et attendez
                          le statut « Prêt pour le hors-ligne ». Vous pourrez
                          ensuite lire en mode avion.
                        </p>
                        <small>
                          20 textes originaux, fondés sur des références
                          identifiables. Aucune API d’IA n’est utilisée dans
                          cette version.
                        </small>
                      </section>
                    </div>
                  </>
                )}
                <footer className="page-footer">
                  <span>
                    <span className="wordmark">underlined</span>
                  </span>
                  <p>Moins de bruit. Plus de perspectives.</p>
                  <small>Une bibliothèque qui vous appartient.</small>
                </footer>
              </>
            )}
          </main>
        </div>
        <nav className="bottom-nav" aria-label="Navigation mobile">
          {(
            [
              { id: "discover", label: "Découvrir", icon: Compass },
              { id: "library", label: "Bibliothèque", icon: BookOpen },
              { id: "collections", label: "Collections", icon: FolderOpen },
              { id: "settings", label: "Réglages", icon: Settings },
            ] as const
          ).map((n) => (
            <button
              key={n.id}
              onClick={() => navigate(n.id)}
              className={view === n.id ? "active" : ""}
              aria-current={view === n.id ? "page" : undefined}
            >
              <n.icon size={21} />
              <span>{n.label}</span>
            </button>
          ))}
        </nav>
      </div>
      {notice && (
        <div className="toast" role="status">
          <Check size={17} />
          {notice}
        </div>
      )}
      {modalOpen && (
        <div className="modal-backdrop">
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
          >
            <button
              className="modal-close icon-button"
              aria-label="Fermer la fenêtre"
              onClick={() => {
                setEditor(null);
                setPicker(null);
                setDeleting(null);
                setPendingImport(null);
              }}
            >
              <X size={21} />
            </button>
            {editor && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  void run(async () => {
                    const name = editor.name.trim();
                    if (!name)
                      throw new Error("Donnez un nom à votre collection.");
                    if (editor.id)
                      await db.collections.update(editor.id, {
                        name,
                        description: editor.description.trim(),
                      });
                    else
                      await db.collections.add({
                        id: crypto.randomUUID(),
                        name,
                        description: editor.description.trim(),
                        createdAt: new Date().toISOString(),
                        ideaIds: [],
                      });
                    setEditor(null);
                    setNotice("Collection enregistrée");
                  });
                }}
              >
                <p className="eyebrow">RELIEZ VOS IDÉES</p>
                <h2 id="dialog-title">
                  {editor.id
                    ? "Modifier la collection"
                    : "Une nouvelle collection"}
                </h2>
                <label>
                  Nom
                  <input
                    required
                    maxLength={80}
                    value={editor.name}
                    placeholder="Ex. Mieux décider"
                    onChange={(e) =>
                      setEditor({ ...editor, name: e.target.value })
                    }
                  />
                </label>
                <label>
                  Description <span>(facultative)</span>
                  <textarea
                    maxLength={1000}
                    value={editor.description}
                    onChange={(e) =>
                      setEditor({ ...editor, description: e.target.value })
                    }
                  />
                </label>
                <button className="primary-button" type="submit">
                  Enregistrer <Check size={17} />
                </button>
              </form>
            )}
            {picker && (
              <>
                <h2 id="dialog-title">Ajouter à une collection</h2>
                <p>Choisissez les liens que vous voulez créer.</p>
                <div className="picker-list">
                  {collections.map((c) => (
                    <button
                      key={c.id}
                      className="picker-row"
                      aria-pressed={c.ideaIds.includes(picker)}
                      onClick={() =>
                        run(() =>
                          db.transaction("rw", db.collections, async () => {
                            const current = await db.collections.get(c.id);
                            if (current)
                              await db.collections.update(c.id, {
                                ideaIds: current.ideaIds.includes(picker)
                                  ? current.ideaIds.filter((i) => i !== picker)
                                  : [...current.ideaIds, picker],
                              });
                          }),
                        )
                      }
                    >
                      <FolderOpen size={19} />
                      {c.name}
                      <span>
                        {c.ideaIds.includes(picker) ? (
                          <Check size={20} />
                        ) : (
                          <Plus size={20} />
                        )}
                      </span>
                    </button>
                  ))}
                </div>
                {!collections.length && (
                  <p>
                    Créez votre première collection pour y ranger cette idée.
                  </p>
                )}
                <button
                  className="text-button"
                  onClick={() => {
                    setPicker(null);
                    setEditor({ name: "", description: "" });
                  }}
                >
                  <Plus size={17} />
                  Créer une collection
                </button>
              </>
            )}
            {deleting && (
              <>
                <h2 id="dialog-title">Supprimer cette collection ?</h2>
                <p>
                  Les idées et vos favoris seront conservés. Seule cette
                  collection sera supprimée.
                </p>
                <button
                  className="primary-button destructive"
                  onClick={() =>
                    run(async () => {
                      await db.collections.delete(deleting);
                      setDeleting(null);
                      setCollectionId(null);
                      setNotice("Collection supprimée");
                    })
                  }
                >
                  Supprimer la collection
                </button>
              </>
            )}
            {pendingImport && (
              <>
                <h2 id="dialog-title">Restaurer cette sauvegarde ?</h2>
                <p>
                  Elle contient {pendingImport.favorites.length} favoris et{" "}
                  {pendingImport.collections.length} collections. Vos favoris,
                  historique, collections et préférences actuels seront
                  remplacés. Exportez-les d’abord si nécessaire.
                </p>
                <button
                  className="primary-button"
                  onClick={() =>
                    run(async () => {
                      await importBackup(pendingImport);
                      setPendingImport(null);
                      setNotice("Sauvegarde restaurée");
                    })
                  }
                >
                  Remplacer et restaurer
                </button>
              </>
            )}
          </section>
        </div>
      )}
    </>
  );
}
