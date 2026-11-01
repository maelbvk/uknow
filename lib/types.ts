export type Category = "Business et stratégie" | "Psychologie" | "Philosophie";
export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  category: Category;
  language: string;
  sourceUrl: string;
  sourceType: "livre" | "article" | "recherche";
  verificationStatus: "référence identifiée";
}
export interface Idea {
  id: string;
  title: string;
  hook: string;
  content: string[];
  example: string;
  takeaway: string;
  category: Category;
  bookId: string;
  sourceReference: string;
  verificationStatus: "synthèse originale";
  readingTime: number;
  createdAt: string;
}
export interface Collection {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  ideaIds: string[];
}
export interface History {
  ideaId: string;
  progress: number;
  visitedAt: string;
}
export interface Preferences {
  id: "main";
  theme: "light" | "dark";
  fontSize: "normal" | "large";
}
export interface Backup {
  version: 1;
  exportedAt: string;
  favorites: string[];
  readingHistory: History[];
  collections: Collection[];
  preferences: Preferences;
}
// Future ingestion stays independent of the curated catalogue and user data.
export interface IngestionJob {
  id: string;
  format: "pdf" | "article";
  status: "pending" | "extracted" | "generated" | "reviewed";
  sourceUrl?: string;
  extractedText?: string;
  candidateIdeas?: Idea[];
  duplicateIds?: string[];
}
