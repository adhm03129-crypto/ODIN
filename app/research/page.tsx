"use client";

import React, { useState } from "react";
import { BookOpen, Hammer, Pickaxe, Shield, Zap, UserCheck, CheckCircle2 } from "lucide-react";
import { RESEARCH_DATABASE } from "@/data/research";
import { TechCategory } from "@/types/research";

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory | "All">("All");

  const filteredTech = RESEARCH_DATABASE.filter(
    (t) => selectedCategory === "All" || t.category === selectedCategory
  );

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-odin-text-main flex items-center gap-2">
          <BookOpen className="w-7 h-7 text-purple-400" /> Technology Research Tree
        </h1>
        <p className="text-xs text-odin-text-muted mt-1">
          Growth speedups, resource economy buffs, troop battle stats, and hero tactics tech trees.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 border-b border-odin-border/50 pb-3 overflow-x-auto">
        {(["All", "Growth", "Economy", "Battle", "Hero Tech"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? "bg-purple-600 text-white shadow-sm"
                : "bg-odin-card border border-odin-border/60 text-odin-text-muted hover:text-odin-text-main"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tech Tree Nodes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTech.map((tech) => (
          <div
            key={tech.id}
            className="p-5 rounded-2xl bg-odin-card border border-odin-border/60 hover:border-purple-500/50 shadow-odin transition-all flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 rounded bg-purple-500/20 text-purple-400 font-mono text-[10px] uppercase font-bold">
                  {tech.category}
                </span>
                <span className="text-[10px] font-mono text-odin-text-muted">Max Lv {tech.maxLevel}</span>
              </div>
              <h3 className="text-base font-bold text-odin-text-main">{tech.name}</h3>
              <p className="text-xs text-odin-text-muted mt-1 leading-relaxed">{tech.description}</p>
            </div>

            <div className="pt-3 border-t border-odin-border/40 space-y-2 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-odin-sidebar/60 text-purple-300 font-semibold">
                Buff: {tech.effectPerLevel}
              </div>
              {tech.prerequisites.length > 0 && (
                <div className="text-[10px] text-odin-text-muted flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-purple-400" /> Prerequisite: {tech.prerequisites.join(", ")}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
