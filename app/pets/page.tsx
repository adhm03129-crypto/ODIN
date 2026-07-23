"use client";

import React from "react";
import { Cat, Sparkles, Zap, Shield, Heart } from "lucide-react";

const PETS_DATA = [
  { id: "pet-snow-leopard", name: "Snow Leopard", tier: "Legendary", skill: "Subzero Pounce", buff: "+15% Lancer Lethality & +10% March Speed", unlockReq: "Furnace Lv 18 + Beast Enclosure Lv 5" },
  { id: "pet-arctic-bear", name: "Arctic Bear", tier: "Legendary", skill: "Iron Claws", buff: "+20% Infantry HP & +12% Squad Defense", unlockReq: "Furnace Lv 22 + Beast Enclosure Lv 10" },
  { id: "pet-frost-falcon", name: "Frost Falcon", tier: "Epic", skill: "Gale Strike", buff: "+12% Marksman ATK", unlockReq: "Furnace Lv 15" },
  { id: "pet-tundra-wolf", name: "Tundra Wolf", tier: "Epic", skill: "Pack Howl", buff: "+8% Squad March Size", unlockReq: "Furnace Lv 12" },
];

export default function PetsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-odin-text-main flex items-center gap-2">
          <Cat className="w-7 h-7 text-cyan-400" /> Beast & Pet Skills Matrix
        </h1>
        <p className="text-xs text-odin-text-muted mt-1">
          Beast enclosure level requirements, active pet skills, and squad combat passive buffs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PETS_DATA.map((pet) => (
          <div
            key={pet.id}
            className="p-5 rounded-2xl bg-odin-card border border-odin-border/60 hover:border-cyan-500/50 shadow-odin transition-all space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-mono text-[10px] uppercase font-bold">
                {pet.tier}
              </span>
              <span className="text-[10px] text-odin-text-muted">{pet.unlockReq}</span>
            </div>
            <h3 className="text-lg font-bold text-odin-text-main">{pet.name}</h3>
            <div className="p-3 rounded-xl bg-odin-sidebar/60 border border-odin-border/40 space-y-1 text-xs">
              <div className="font-bold text-cyan-400">Active Skill: {pet.skill}</div>
              <div className="text-odin-text-muted font-mono">{pet.buff}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
