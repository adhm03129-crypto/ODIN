"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, BookOpen, Bot, User, CheckCircle } from "lucide-react";
import { KNOWLEDGE_DATABASE } from "@/data/knowledgeBase";
import { HEROES_DATABASE } from "@/data/heroes";

export default function ArticleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const article = KNOWLEDGE_DATABASE.find((k) => k.slug === slug) || KNOWLEDGE_DATABASE[0];
  const relatedHeroesData = HEROES_DATABASE.filter((h) => article.relatedHeroes?.includes(h.id));

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Back Link */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-xs font-semibold text-odin-text-muted hover:text-odin-text-main transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Knowledge Base
      </button>

      {/* Article Header */}
      <div className="p-8 rounded-3xl bg-odin-card border border-odin-border/70 shadow-odin space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 text-xs font-mono font-bold">
            {article.category}
          </span>
          <span className="text-xs text-odin-text-muted font-mono">{article.readTimeMinutes} min read</span>
          <span className="text-xs text-odin-text-muted font-mono">• Updated {article.updatedAt}</span>
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold text-odin-text-main leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center gap-3 pt-2 text-xs text-odin-text-muted font-mono border-t border-odin-border/40">
          <span className="flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-rose-400" /> {article.author}
          </span>
          <span>Version {article.version}</span>
        </div>
      </div>

      {/* Article Body Content */}
      <div className="p-8 rounded-3xl bg-odin-card border border-odin-border/60 shadow-odin prose prose-invert max-w-none text-sm text-odin-text-main leading-relaxed space-y-4">
        {article.content.split("\n\n").map((paragraph, idx) => {
          if (paragraph.startsWith("# ")) {
            return (
              <h1 key={idx} className="text-2xl font-bold text-odin-text-main pt-4 border-b border-odin-border/40 pb-2">
                {paragraph.replace("# ", "")}
              </h1>
            );
          }
          if (paragraph.startsWith("## ")) {
            return (
              <h2 key={idx} className="text-lg font-bold text-rose-400 pt-3">
                {paragraph.replace("## ", "")}
              </h2>
            );
          }
          return (
            <p key={idx} className="text-odin-text-muted whitespace-pre-line">
              {paragraph}
            </p>
          );
        })}
      </div>

      {/* Related Heroes Strip */}
      {relatedHeroesData.length > 0 && (
        <div className="p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-3">
          <h3 className="text-xs font-mono font-bold text-odin-text-muted uppercase tracking-wider">
            Related Hero Dossiers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {relatedHeroesData.map((hero) => (
              <Link
                key={hero.id}
                href={`/heroes/${hero.id}`}
                className="p-3 rounded-xl bg-odin-sidebar/60 border border-odin-border/40 hover:border-rose-500/40 text-xs font-bold text-odin-text-main flex items-center justify-between group"
              >
                <span>{hero.name} (G{hero.generation})</span>
                <span className="text-[10px] text-rose-400 group-hover:underline">View →</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
