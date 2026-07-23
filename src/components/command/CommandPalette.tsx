"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchStore } from "@/stores/useSearchStore";
import { Search, X, Users, Building2, BookOpen, Calendar, FileText, Bot, ArrowRight } from "lucide-react";
import { HEROES_DATABASE } from "@/data/heroes";
import { BUILDINGS_DATABASE } from "@/data/buildings";
import { EVENTS_DATABASE } from "@/data/events";
import { KNOWLEDGE_DATABASE } from "@/data/knowledgeBase";
import { RESEARCH_DATABASE } from "@/data/research";

export function CommandPalette() {
  const router = useRouter();
  const { isOpen, query, closePalette, setQuery, togglePalette } = useSearchStore();

  // Handle Ctrl+K shortcut globally
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        togglePalette();
      }
      if (e.key === "Escape" && isOpen) {
        closePalette();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, togglePalette, closePalette]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  // Search Results Filtering
  const matchingHeroes = HEROES_DATABASE.filter(
    (h) => h.name.toLowerCase().includes(q) || h.class.toLowerCase().includes(q) || h.role.toLowerCase().includes(q)
  );

  const matchingBuildings = BUILDINGS_DATABASE.filter(
    (b) => b.name.toLowerCase().includes(q) || b.category.toLowerCase().includes(q)
  );

  const matchingEvents = EVENTS_DATABASE.filter(
    (e) => e.name.toLowerCase().includes(q) || e.category.toLowerCase().includes(q)
  );

  const matchingKnowledge = KNOWLEDGE_DATABASE.filter(
    (k) => k.title.toLowerCase().includes(q) || k.summary.toLowerCase().includes(q)
  );

  const matchingResearch = RESEARCH_DATABASE.filter(
    (r) => r.name.toLowerCase().includes(q) || r.category.toLowerCase().includes(q)
  );

  const handleSelectRoute = (path: string) => {
    router.push(path);
    closePalette();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4 animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-odin-card border border-odin-border rounded-2xl shadow-odin overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-odin-border/60 bg-odin-sidebar">
          <Search className="w-5 h-5 text-odin-primary mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search heroes, buildings, events..."
            autoFocus
            className="flex-1 bg-transparent text-odin-text-main placeholder-odin-text-muted text-sm outline-none"
          />
          <button onClick={closePalette} className="p-1 rounded-lg hover:bg-odin-card text-odin-text-muted">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4 text-xs scrollbar-thin scrollbar-thumb-odin-border">
          {/* Quick Actions */}
          {!q && (
            <div>
              <div className="text-[10px] font-semibold text-odin-text-muted uppercase tracking-wider mb-2 px-2">
                Quick Shortcuts
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleSelectRoute("/assistant")}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-odin-sidebar/60 border border-odin-border/40 hover:border-cyan-500/50 hover:bg-odin-sidebar text-left transition-all group"
                >
                  <Bot className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="font-semibold text-odin-text-main group-hover:text-cyan-400">Launch AI Assistant</div>
                    <div className="text-[10px] text-odin-text-muted">Ask WSIP AI strategy questions</div>
                  </div>
                </button>
                <button
                  onClick={() => handleSelectRoute("/heroes")}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-odin-sidebar/60 border border-odin-border/40 hover:border-blue-500/50 hover:bg-odin-sidebar text-left transition-all group"
                >
                  <Users className="w-4 h-4 text-blue-400" />
                  <div>
                    <div className="font-semibold text-odin-text-main group-hover:text-blue-400">Heroes Database</div>
                    <div className="text-[10px] text-odin-text-muted">Explore Gen 1 to Gen 6 hero stats</div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Heroes Results */}
          {matchingHeroes.length > 0 && (
            <div>
              <div className="text-[10px] font-semibold text-odin-text-muted uppercase tracking-wider mb-1.5 px-2 flex items-center gap-1">
                <Users className="w-3 h-3 text-blue-400" /> Heroes ({matchingHeroes.length})
              </div>
              <div className="space-y-1">
                {matchingHeroes.slice(0, 4).map((hero) => (
                  <button
                    key={hero.id}
                    onClick={() => handleSelectRoute(`/heroes/${hero.id}`)}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-odin-sidebar text-left transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center font-bold text-blue-400 text-xs">
                        G{hero.generation}
                      </div>
                      <div>
                        <div className="font-semibold text-odin-text-main group-hover:text-blue-400">{hero.name}</div>
                        <div className="text-[10px] text-odin-text-muted">
                          {hero.rarity} • {hero.class} • {hero.role}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-odin-text-muted group-hover:text-odin-text-main transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Buildings Results */}
          {matchingBuildings.length > 0 && (
            <div>
              <div className="text-[10px] font-semibold text-odin-text-muted uppercase tracking-wider mb-1.5 px-2 flex items-center gap-1">
                <Building2 className="w-3 h-3 text-emerald-400" /> Buildings ({matchingBuildings.length})
              </div>
              <div className="space-y-1">
                {matchingBuildings.slice(0, 3).map((bldg) => (
                  <button
                    key={bldg.id}
                    onClick={() => handleSelectRoute("/buildings")}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-odin-sidebar text-left transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-odin-text-main group-hover:text-emerald-400">{bldg.name}</div>
                      <div className="text-[10px] text-odin-text-muted">{bldg.category} • Max Level {bldg.maxLevel}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-odin-text-muted" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Knowledge Base Results */}
          {matchingKnowledge.length > 0 && (
            <div>
              <div className="text-[10px] font-semibold text-odin-text-muted uppercase tracking-wider mb-1.5 px-2 flex items-center gap-1">
                <FileText className="w-3 h-3 text-purple-400" /> Knowledge Base ({matchingKnowledge.length})
              </div>
              <div className="space-y-1">
                {matchingKnowledge.slice(0, 3).map((kb) => (
                  <button
                    key={kb.id}
                    onClick={() => handleSelectRoute(`/knowledge/${kb.slug}`)}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-odin-sidebar text-left transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-odin-text-main group-hover:text-purple-400">{kb.title}</div>
                      <div className="text-[10px] text-odin-text-muted">{kb.category} • {kb.readTimeMinutes} min read</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-odin-text-muted" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Palette Footer */}
        <div className="px-4 py-2 bg-odin-sidebar border-t border-odin-border/60 flex items-center justify-between text-[11px] text-odin-text-muted">
          <span>Search ODIN WSIP Platform</span>
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-odin-card border border-odin-border">↑</kbd>{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-odin-card border border-odin-border">↓</kbd> Navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-odin-card border border-odin-border">Esc</kbd> Close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
