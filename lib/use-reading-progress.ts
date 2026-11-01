"use client";
import { useEffect, useState } from "react";
import { db } from "./db";
/** Each effect owns its progress, so a late IndexedDB read cannot overwrite another idea. */
export function useReadingProgress(
  ideaId: string | undefined,
  onError: (message: string) => void,
) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!ideaId) return;
    const id = ideaId;
    let disposed = false,
      loaded = false,
      furthest = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    setProgress(0);
    const write = () =>
      db.history
        .put({
          ideaId: id,
          progress: furthest,
          visitedAt: new Date().toISOString(),
        })
        .catch(() => onError("Impossible d’enregistrer la progression."));
    const scroll = () => {
      if (!loaded || disposed) return;
      const max = document.documentElement.scrollHeight - innerHeight;
      const current =
        max > 0 ? Math.min(100, Math.round((scrollY / max) * 100)) : 100;
      setProgress(current);
      furthest = Math.max(furthest, current);
      clearTimeout(timer);
      timer = setTimeout(write, 200);
    };
    window.scrollTo(0, 0);
    db.history
      .get(id)
      .then((h) => {
        if (disposed) return;
        furthest = h?.progress || 0;
        loaded = true;
        if (furthest > 0 && furthest < 100) {
          setProgress(furthest);
          window.scrollTo(
            0,
            ((document.documentElement.scrollHeight - innerHeight) * furthest) /
              100,
          );
        }
        void write();
      })
      .catch(() => onError("Impossible de lire l’historique."));
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      disposed = true;
      clearTimeout(timer);
      if (loaded) void write();
      window.removeEventListener("scroll", scroll);
    };
  }, [ideaId, onError]);
  return progress;
}
