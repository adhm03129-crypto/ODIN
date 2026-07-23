export type GuideCategory = "Hero Meta" | "Combat Strategy" | "Economy & Furnace" | "SvS Mastery" | "Alliance Operations" | "Bear Hunt";

export interface KnowledgeArticle {
  id: string;
  slug: string;
  title: string;
  category: GuideCategory;
  summary: string;
  content: string; // Markdown formatted
  author: string;
  updatedAt: string;
  version: string;
  readTimeMinutes: number;
  tags: string[];
  relatedHeroes?: string[];
  references: string[];
}
