"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Bot,
  Users,
  Building2,
  BookOpen,
  Swords,
  Calendar,
  Sparkles,
  Pin,
  Clock,
  ArrowRight,
  TrendingUp,
  ShieldAlert,
  ChevronRight,
  Zap,
} from "lucide-react";
import { useGameStore } from "@/stores/useGameStore";
import { HEROES_DATABASE } from "@/data/heroes";
import { EVENTS_DATABASE } from "@/data/events";
import { KNOWLEDGE_DATABASE } from "@/data/knowledgeBase";

export default function HomePage() {
  const router = useRouter();
  const { pinnedHeroIds, favoriteTools, recentSearches, activeStateServer, stateAgeDays, addRecentSearch } = useGameStore();

  const [searchInput, setSearchInput] = useState("");

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    addRecentSearch(searchInput);
    router.push(`/heroes?search=${encodeURIComponent(searchInput)}`);
  };

  const pinnedHeroes = HEROES_DATABASE.filter((h) => pinnedHeroIds.includes(h.id));
  const liveEvent = EVENTS_DATABASE.find((e) => e.status === "Live Now") || EVENTS_DATABASE[0];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* 1. Hero Search Header Banner */}
      <section className="relative overflow-hidden p-8 rounded-3xl bg-gradient-to-r from-odin-sidebar via-odin-card to-odin-sidebar border border-odin-border/70 shadow-odin">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ODIN Intelligence Platform • Whiteout Survival</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-odin-text-main tracking-tight leading-tight">
            Search Game Intelligence & Strategy
          </h1>

          <p className="text-sm text-odin-text-muted">
            Instant insights across Generation 1-6 Heroes, Building Roadmap Calculators, Tech Trees, and SvS Tactics.
          </p>

          {/* Search Box */}
          <form onSubmit={handleHeroSearchSubmit} className="flex items-center gap-2 pt-2">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-odin-text-muted" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search heroes (Molly, Jeronimo, Alonso), guides, or buildings..."
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-odin-bg border border-odin-border focus:border-odin-primary text-sm text-odin-text-main placeholder-odin-text-muted outline-none transition-all shadow-inner"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-odin-primary hover:bg-odin-primary-hover text-white text-sm font-semibold transition-all shadow-odin-glow flex items-center gap-2"
            >
              Search
            </button>
          </form>

          {/* Recent Searches Tags */}
          {recentSearches.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap text-xs text-odin-text-muted pt-1">
              <span className="font-mono text-[11px] text-odin-text-subtle">Recent:</span>
              {recentSearches.slice(0, 4).map((q) => (
                <button
                  key={q}
                  onClick={() => router.push(`/heroes?search=${encodeURIComponent(q)}`)}
                  className="px-2.5 py-1 rounded-lg bg-odin-card/60 hover:bg-odin-card border border-odin-border/40 text-odin-text-muted hover:text-odin-text-main transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 2. Game Server Status & AI Suggestions Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Game Server Status */}
        <div className="p-4 rounded-2xl bg-odin-card border border-odin-border/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
              ⚡
            </div>
            <div>
              <div className="text-xs font-semibold text-odin-text-main">{activeStateServer}</div>
              <div className="text-[11px] text-odin-text-muted font-mono">Server Age: {stateAgeDays} Days</div>
            </div>
          </div>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold font-mono">
            Gen 6 Meta
          </span>
        </div>

        {/* Live Event Timer */}
        <div className="p-4 rounded-2xl bg-odin-card border border-odin-border/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-odin-text-main">{liveEvent.name}</div>
              <div className="text-[11px] text-orange-400 font-semibold">{liveEvent.status}</div>
            </div>
          </div>
          <Link href="/events" className="text-xs text-blue-400 hover:underline flex items-center gap-1">
            View <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {/* AI Quick Assistant Suggestion */}
        <Link
          href="/assistant"
          className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/30 hover:border-cyan-400 flex items-center justify-between transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-odin-text-main group-hover:text-cyan-400">Ask AI Strategist</div>
              <div className="text-[11px] text-odin-text-muted">Bear Hunt 500M+ score setup</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 3. Quick Navigation Hub */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-odin-text-main">Workspace Tools</h2>
          <span className="text-xs text-odin-text-muted font-mono">14 Modules Active</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {[
            { name: "Heroes", href: "/heroes", icon: Users, color: "text-blue-400 bg-blue-500/10 border-blue-500/30", count: "28" },
            { name: "Buildings", href: "/buildings", icon: Building2, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30", count: "14" },
            { name: "Research", href: "/research", icon: BookOpen, color: "text-purple-400 bg-purple-500/10 border-purple-500/30", count: "32" },
            { name: "Troops", href: "/troops", icon: Swords, color: "text-orange-400 bg-orange-500/10 border-orange-500/30", count: "T1-T11" },
            { name: "AI Assistant", href: "/assistant", icon: Bot, color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30", count: "AI" },
            { name: "Knowledge", href: "/knowledge", icon: TrendingUp, color: "text-rose-400 bg-rose-500/10 border-rose-500/30", count: "Guides" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="p-4 rounded-2xl bg-odin-card border border-odin-border/60 hover:border-odin-primary/50 hover:shadow-odin transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl border ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-odin-text-muted">{item.count}</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-odin-text-main group-hover:text-odin-primary transition-colors">
                    {item.name}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 4. Pinned Heroes & Continue Learning */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Pinned Heroes (2 Cols) */}
        <div className="lg:col-span-2 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-odin-text-main flex items-center gap-2">
              <Pin className="w-4 h-4 text-blue-400" /> Pinned Heroes
            </h2>
            <Link href="/heroes" className="text-xs text-blue-400 hover:underline">
              View All Heroes →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {pinnedHeroes.map((hero) => (
              <Link
                key={hero.id}
                href={`/heroes/${hero.id}`}
                className="p-3.5 rounded-2xl bg-odin-card border border-odin-border/60 hover:border-odin-primary/50 hover:shadow-odin transition-all flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center font-black text-sm text-blue-400">
                  G{hero.generation}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-odin-text-main group-hover:text-odin-primary truncate">
                    {hero.name}
                  </div>
                  <div className="text-[10px] text-odin-text-muted truncate">
                    {hero.rarity} • {hero.class}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column: Knowledge Base / Strategy Updates */}
        <div className="space-y-3">
          <h2 className="text-base font-bold text-odin-text-main flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-purple-400" /> Recent Strategy Guides
          </h2>

          <div className="space-y-2">
            {KNOWLEDGE_DATABASE.map((kb) => (
              <Link
                key={kb.id}
                href={`/knowledge/${kb.slug}`}
                className="p-3 rounded-2xl bg-odin-card border border-odin-border/60 hover:border-purple-500/40 block transition-all group"
              >
                <div className="text-xs font-bold text-odin-text-main group-hover:text-purple-400 line-clamp-1">
                  {kb.title}
                </div>
                <div className="text-[10px] text-odin-text-muted mt-1 flex items-center justify-between">
                  <span>{kb.category}</span>
                  <span className="font-mono">{kb.readTimeMinutes} min read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
