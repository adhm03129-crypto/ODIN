"use client";

import React, { useState } from "react";
import { Shield, Users, Swords, Award, Plus, Check } from "lucide-react";
import { toast } from "sonner";

export default function AlliancePage() {
  const [allianceName, setAllianceName] = useState("Valkyrie Vanguard [VKY]");
  const [techPriority, setTechPriority] = useState("Territory Expansion II");

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-odin-text-main flex items-center gap-2">
            <Shield className="w-7 h-7 text-blue-400" /> Alliance Operation & Rally Planner
          </h1>
          <p className="text-xs text-odin-text-muted mt-1">
            Alliance tech prioritization, Bear Hunt rally scheduling, mob coordination, and resource allocation.
          </p>
        </div>

        <button
          onClick={() => toast.success("Alliance Plan Saved")}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-odin-glow transition-all"
        >
          Save Alliance Plan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Alliance Overview */}
        <div className="p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-4 shadow-odin">
          <h2 className="text-sm font-bold text-odin-text-main uppercase font-mono tracking-wider">
            Alliance Profile
          </h2>
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-odin-text-muted block text-[10px] font-mono">Alliance Name & Tag:</label>
              <input
                type="text"
                value={allianceName}
                onChange={(e) => setAllianceName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-odin-bg border border-odin-border text-xs text-odin-text-main font-bold outline-none"
              />
            </div>
            <div>
              <label className="text-odin-text-muted block text-[10px] font-mono">Current Tech Focus:</label>
              <input
                type="text"
                value={techPriority}
                onChange={(e) => setTechPriority(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-odin-bg border border-odin-border text-xs text-odin-text-main font-mono outline-none"
              />
            </div>
            <div className="p-3 rounded-xl bg-odin-sidebar/60 border border-odin-border/40 font-mono text-[11px] space-y-1">
              <div className="flex justify-between">
                <span className="text-odin-text-muted">Total Active Members:</span>
                <span className="text-emerald-400 font-bold">98 / 100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-odin-text-muted">Alliance Total Power:</span>
                <span className="text-blue-400 font-bold">4.82 Billion</span>
              </div>
            </div>
          </div>
        </div>

        {/* Designated Rally Leads */}
        <div className="md:col-span-2 p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-4 shadow-odin">
          <h2 className="text-sm font-bold text-odin-text-main uppercase font-mono tracking-wider">
            Designated SvS & Bear Hunt Rally Leads
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-4 rounded-xl bg-odin-sidebar/60 border border-blue-500/30 space-y-1">
              <div className="text-blue-400 font-bold">Primary Rally Lead #1</div>
              <div className="text-odin-text-main font-sans font-bold">Chief_Valkyrie (VIP 12)</div>
              <div className="text-odin-text-muted text-[10px]">Lead Hero: Jeronimo (Lv 100 ★5)</div>
            </div>
            <div className="p-4 rounded-xl bg-odin-sidebar/60 border border-cyan-500/30 space-y-1">
              <div className="text-cyan-400 font-bold">Primary Rally Lead #2</div>
              <div className="text-odin-text-main font-sans font-bold">Frost_Titan (VIP 11)</div>
              <div className="text-odin-text-muted text-[10px]">Lead Hero: Alonso (Lv 100 ★5)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
