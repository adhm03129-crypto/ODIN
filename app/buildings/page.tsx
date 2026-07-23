"use client";

import React, { useState } from "react";
import { Building2, Flame, Shield, HeartPulse, Hammer, ChevronRight, Calculator } from "lucide-react";
import { BUILDINGS_DATABASE } from "@/data/buildings";
import { Building } from "@/types/building";

export default function BuildingsPage() {
  const [selectedBuilding, setSelectedBuilding] = useState<Building>(BUILDINGS_DATABASE[0]);
  const [targetLevel, setTargetLevel] = useState<number>(30);

  const activeLevelData = selectedBuilding.levels.find((l) => l.level === targetLevel) || selectedBuilding.levels[selectedBuilding.levels.length - 1];

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-odin-text-main flex items-center gap-2">
          <Building2 className="w-7 h-7 text-emerald-400" /> Building Architecture & Upgrade Roadmap
        </h1>
        <p className="text-xs text-odin-text-muted mt-1">
          Resource blueprints, furnace prerequisites, build time calculators, and power gains for all city structures.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Building Selector Cards */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono font-bold text-odin-text-muted uppercase tracking-wider">
            City Structures ({BUILDINGS_DATABASE.length})
          </h2>

          <div className="space-y-2">
            {BUILDINGS_DATABASE.map((bldg) => {
              const isSelected = selectedBuilding.id === bldg.id;
              return (
                <button
                  key={bldg.id}
                  onClick={() => setSelectedBuilding(bldg)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between group ${
                    isSelected
                      ? "bg-emerald-500/15 border-emerald-500/50 shadow-sm"
                      : "bg-odin-card border-odin-border/60 hover:border-odin-primary/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center font-bold text-emerald-400">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-odin-text-main group-hover:text-emerald-400">
                        {bldg.name}
                      </div>
                      <div className="text-[10px] text-odin-text-muted">
                        {bldg.category} • Max Lv {bldg.maxLevel}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-odin-text-muted group-hover:translate-x-1 transition-transform" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Building Details & Calculator (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-6 shadow-odin">
            <div className="flex items-center justify-between border-b border-odin-border/40 pb-4">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] uppercase font-bold">
                  {selectedBuilding.category}
                </span>
                <h2 className="text-xl font-bold text-odin-text-main mt-1">{selectedBuilding.name}</h2>
              </div>
              <span className="text-xs font-mono text-odin-text-muted">Max Level {selectedBuilding.maxLevel}</span>
            </div>

            <p className="text-xs text-odin-text-muted leading-relaxed">{selectedBuilding.description}</p>

            {/* Interactive Level Slider Calculator */}
            <div className="p-4 rounded-xl bg-odin-sidebar/60 border border-odin-border/40 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-odin-text-main flex items-center gap-1.5">
                  <Calculator className="w-4 h-4 text-emerald-400" /> Target Upgrade Level
                </span>
                <span className="font-mono font-bold text-emerald-400 text-sm">Level {targetLevel}</span>
              </div>

              <input
                type="range"
                min="1"
                max={selectedBuilding.maxLevel}
                value={targetLevel}
                onChange={(e) => setTargetLevel(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-odin-bg rounded-lg h-2"
              />

              {/* Cost & Requirements Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 rounded-lg bg-odin-card/60 border border-odin-border/30">
                  <span className="text-[10px] text-odin-text-muted block">Meat Cost</span>
                  <span className="font-bold text-odin-text-main">{activeLevelData?.meatCost || "N/A"}</span>
                </div>
                <div className="p-3 rounded-lg bg-odin-card/60 border border-odin-border/30">
                  <span className="text-[10px] text-odin-text-muted block">Wood Cost</span>
                  <span className="font-bold text-odin-text-main">{activeLevelData?.woodCost || "N/A"}</span>
                </div>
                <div className="p-3 rounded-lg bg-odin-card/60 border border-odin-border/30">
                  <span className="text-[10px] text-odin-text-muted block">Coal Cost</span>
                  <span className="font-bold text-odin-text-main">{activeLevelData?.coalCost || "N/A"}</span>
                </div>
                <div className="p-3 rounded-lg bg-odin-card/60 border border-odin-border/30">
                  <span className="text-[10px] text-odin-text-muted block">Iron Cost</span>
                  <span className="font-bold text-odin-text-main">{activeLevelData?.ironCost || "N/A"}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1 font-mono text-xs">
                <div className="p-3 rounded-lg bg-odin-card/60 border border-odin-border/30">
                  <span className="text-[10px] text-odin-text-muted block">Build Time</span>
                  <span className="font-bold text-cyan-400">{activeLevelData?.buildTimeHours} Hours</span>
                </div>
                <div className="p-3 rounded-lg bg-odin-card/60 border border-odin-border/30">
                  <span className="text-[10px] text-odin-text-muted block">Power Gained</span>
                  <span className="font-bold text-emerald-400">+{activeLevelData?.powerGained.toLocaleString()}</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 font-medium">
                <strong>Unlocked Perk:</strong> {activeLevelData?.perkDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
