"use client";

import React from "react";
import { Package, Sparkles, ShieldCheck } from "lucide-react";

const ITEMS_DATA = [
  { name: "Exclusive Gear Widget", category: "Hero Enhancement", rarity: "Legendary", dropRate: "Bear Hunt / Hall of Heroes", desc: "Used to upgrade Exclusive Gear from Lv 1 to Lv 10." },
  { name: "Mythic Skill Manual", category: "Skill Upgrade", rarity: "Legendary", dropRate: "SvS Prep / VIP Store", desc: "Unlocks SSR Legendary hero skill levels 4 and 5." },
  { name: "Fire Crystal", category: "City Building", rarity: "Mythic", dropRate: "Intel / Chief Orders", desc: "Required to upgrade Furnace 30 to Fire Crystal 1-5." },
  { name: "24-Hour Attack Boost (+20%)", category: "Combat Buff", rarity: "Epic", dropRate: "Alliance Store", desc: "Increases overall squad attack during Sunfire Castle battles." },
];

export default function ItemsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-odin-text-main flex items-center gap-2">
          <Package className="w-7 h-7 text-indigo-400" /> Items & Chest Drop Rate Database
        </h1>
        <p className="text-xs text-odin-text-muted mt-1">
          Complete items inventory, drop rate percentages, and acquisition sources.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ITEMS_DATA.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-odin-card border border-odin-border/60 hover:border-indigo-500/50 shadow-odin transition-all space-y-2 text-xs"
          >
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 font-mono text-[10px] uppercase font-bold">
                {item.rarity}
              </span>
              <span className="text-[10px] text-odin-text-muted font-mono">{item.category}</span>
            </div>
            <h3 className="text-base font-bold text-odin-text-main">{item.name}</h3>
            <p className="text-odin-text-muted">{item.desc}</p>
            <div className="p-2 rounded-lg bg-odin-sidebar/60 border border-odin-border/30 font-mono text-[11px] text-indigo-300">
              Source: {item.dropRate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
