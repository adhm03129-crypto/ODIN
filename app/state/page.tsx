"use client";

import React from "react";
import { Landmark, Trophy, Shield, Crown, Globe } from "lucide-react";

export default function StatePage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-odin-text-main flex items-center gap-2">
          <Landmark className="w-7 h-7 text-amber-400" /> State History & Presidency Archive
        </h1>
        <p className="text-xs text-odin-text-muted mt-1">
          State #420 presidency history, Non-Aggression Pact (NAP) rules, and cross-server SvS war logs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Presidency Status */}
        <div className="p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-4 shadow-odin">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <Crown className="w-5 h-5" /> Current Supreme President
          </div>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono space-y-2">
            <div className="text-base font-bold text-amber-300 font-sans">King_Arthur_S420</div>
            <div className="text-odin-text-muted">Alliance: [VKY] Valkyrie Vanguard</div>
            <div className="text-[10px] text-emerald-400">Term: Day 440 to Day 454</div>
          </div>
        </div>

        {/* State NAP Rules */}
        <div className="md:col-span-2 p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-4 shadow-odin">
          <h2 className="text-sm font-bold text-odin-text-main uppercase font-mono tracking-wider">
            State #420 Rules & NAP Governance
          </h2>
          <div className="space-y-2 text-xs text-odin-text-muted">
            <div className="p-3 rounded-xl bg-odin-sidebar/60 border border-odin-border/40 font-mono">
              <strong className="text-odin-text-main">NAP 10 Agreement:</strong> No city tile hits between Top 10 alliances except during Kill Event (KE).
            </div>
            <div className="p-3 rounded-xl bg-odin-sidebar/60 border border-odin-border/40 font-mono">
              <strong className="text-odin-text-main">Bear Trap Rotation:</strong> Alliances must coordinate trap openings to avoid server lag during prime hours.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
