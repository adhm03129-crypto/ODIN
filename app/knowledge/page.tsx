"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FileText, Search, Clock, Tag, ArrowRight, BookOpen } from "lucide-react";
import { KNOWLEDGE_DATABASE } from "@/data/knowledgeBase";
import { GuideCategory } from "@/types/knowledge";

export default function KnowledgePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<GuideCategory | "All">("All");

  const filteredArticles = KNOWLEDGE_DATABASE.filter((kb) => {
    if (search.trim()) {
      const q = search.toLowerCase();
      if (!kb.title.toLowerCase().includes(q) && !kb.summary.toLowerCase().includes(q)) return false;
    }
    if (selectedCategory !== "All" && kb.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-odin-text-main flex items-center gap-2">
          <FileText className="w-7 h-7 text-rose-400" /> Platform Knowledge Base & Strategy Guides
        </h1>
        <p className="text-xs text-odin-text-muted mt-1">
          Peer-reviewed Whiteout Survival guides, Bear Hunt mechanics, SvS preparation, and Furnace roadmap documentation.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 rounded-2xl bg-odin-card border border-odin-border/60 space-y-3 shadow-odin">
        <div className="relative">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-odin-text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search strategy guides (Bear Hunt, SvS, Furnace 30)..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-odin-bg border border-odin-border text-xs text-odin-text-main outline-none focus:border-rose-500"
          />
        </div>

        <div className="flex items-center gap-2 border-t border-odin-border/40 pt-2 overflow-x-auto">
          {(["All", "Bear Hunt", "Economy & Furnace", "SvS Mastery", "Hero Meta"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as any)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-rose-600 text-white"
                  : "bg-odin-bg border border-odin-border text-odin-text-muted hover:text-odin-text-main"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredArticles.map((article) => (
          <Link
            key={article.id}
            href={`/knowledge/${article.slug}`}
            className="p-6 rounded-2xl bg-odin-card border border-odin-border/60 hover:border-rose-500/50 shadow-odin transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-400 font-mono text-[10px] uppercase font-bold">
                  {article.category}
                </span>
                <span className="text-[10px] text-odin-text-muted font-mono">{article.readTimeMinutes} min read</span>
              </div>

              <h3 className="text-lg font-bold text-odin-text-main group-hover:text-rose-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-xs text-odin-text-muted leading-relaxed line-clamp-3">{article.summary}</p>
            </div>

            <div className="pt-3 border-t border-odin-border/40 flex items-center justify-between text-xs">
              <div className="text-[10px] text-odin-text-muted font-mono">
                {article.author} • {article.version}
              </div>
              <span className="text-rose-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
