"use client";
import { ArrowUpRight, Bookmark, BookOpen } from "lucide-react";
import { books } from "@/lib/catalog";
import type { Idea } from "@/lib/types";
import { categoryClass } from "@/lib/presentation";
interface Props {
  idea: Idea;
  featured?: boolean;
  saved: boolean;
  onSave: (id: string) => void;
  onRead: (idea: Idea) => void;
}
export default function IdeaCard({
  idea,
  featured = false,
  saved,
  onSave,
  onRead,
}: Props) {
  const book = books.find((b) => b.id === idea.bookId)!;
  return (
    <article
      className={`idea-card ${featured ? "featured" : ""} ${categoryClass(idea.category)}`}
    >
      <div className="card-top">
        <span className="category-label">{idea.category}</span>
        <button
          className={`icon-button save-button ${saved ? "saved" : ""}`}
          aria-label={`${saved ? "Retirer" : "Sauvegarder"} : ${idea.title}`}
          onClick={() => onSave(idea.id)}
        >
          <Bookmark size={19} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>
      <button className="card-read" onClick={() => onRead(idea)}>
        <h3>{idea.title}</h3>
        <p>{idea.hook}</p>
      </button>
      <div className="card-bottom">
        <span className="source">
          <span className="source-icon">
            <BookOpen size={14} />
          </span>
          <span>
            {book.author}
            <small>
              {book.sourceType === "recherche"
                ? "Recherche"
                : book.sourceType === "article"
                  ? "Article"
                  : book.title}
            </small>
          </span>
        </span>
        <span className="reading-time">
          {idea.readingTime} min <ArrowUpRight size={17} />
        </span>
      </div>
    </article>
  );
}
