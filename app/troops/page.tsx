"use client";

import React, { useState } from "react";
import { Swords, Shield, Crosshair, Zap, Calculator, Users } from "lucide-react";
import { TROOPS_DATABASE } from "@/data/troops";

export default function TroopsPage() {
  const [marchCapacity, setMarchCapacity] = useState<number>(120000);
  const [preset, setPreset] = useState<"bear" | "svs" | "garrison">("bear");

  const getRatio = () => {
    if (preset === "bear") return { inf: 5, lan: 10, mar: 85 };
    if (preset === "svs") return { inf: 50, lan: 20, mar: 30 };
    return { inf: 40, lan: 40, mar: 20 };
  };

  const ratio = getRatio();
  const infCount = Math.round((marchCapacity * ratio.inf) / 100);
  const lanCount = Math.round((marchCapacity * ratio.lan) / 100);
  const marCount = Math.round((marchCapacity * ratio.mar) / 100);

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-odin-text-main flex items-center gap-2">
          <Swords className="w-7 h-7 text-orange-400" /> Troop Tier Matrix & Rally Calculator
        </h1>
        <p className="text-xs text-odin-text-muted mt-1">
          Detailed unit stats for T1 to T11 Infantry, Lancers, and Marksmen. Includes march ratio calculators.
        </p>
      </div>

      {/* Interactive Rally Ratio Calculator */}
      <section className="p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-4 shadow-odin">
        <h2 className="text-base font-bold text-odin-text-main flex items-center gap-2">
          <Calculator className="w-4 h-4 text-orange-400" /> Rally Troop Ratio Calculator
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-mono text-odin-text-muted">Rally March Capacity:</label>
            <input
              type="number"
              value={marchCapacity}
              onChange={(e) => setMarchCapacity(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl bg-odin-bg border border-odin-border text-sm text-odin-text-main font-mono outline-none focus:border-orange-500"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-xs font-mono text-odin-text-muted">Preset Composition Strategy:</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPreset("bear")}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold font-mono transition-all ${
                  preset === "bear"
                    ? "bg-orange-600 text-white"
                    : "bg-odin-bg border border-odin-border text-odin-text-muted"
                }`}
              >
                Bear Hunt (5/10/85)
              </button>
              <button
                onClick={() => setPreset("svs")}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold font-mono transition-all ${
                  preset === "svs"
                    ? "bg-orange-600 text-white"
                    : "bg-odin-bg border border-odin-border text-odin-text-muted"
                }`}
              >
                SvS Rally (50/20/30)
              </button>
              <button
                onClick={() => setPreset("garrison")}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold font-mono transition-all ${
                  preset === "garrison"
                    ? "bg-orange-600 text-white"
                    : "bg-odin-bg border border-odin-border text-odin-text-muted"
                }`}
              >
                Garrison Def (40/40/20)
              </button>
            </div>
          </div>
        </div>

        {/* Calculated Output */}
        <div className="grid grid-cols-3 gap-3 pt-2 font-mono text-xs">
          <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
            <div className="text-[10px] text-blue-400 font-bold">Infantry ({ratio.inf}%)</div>
            <div className="text-lg font-bold text-odin-text-main">{infCount.toLocaleString()} Units</div>
          </div>
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
            <div className="text-[10px] text-cyan-400 font-bold">Lancers ({ratio.lan}%)</div>
            <div className="text-lg font-bold text-odin-text-main">{lanCount.toLocaleString()} Units</div>
          </div>
          <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
            <div className="text-[10px] text-orange-400 font-bold">Marksmen ({ratio.mar}%)</div>
            <div className="text-lg font-bold text-odin-text-main">{marCount.toLocaleString()} Units</div>
          </div>
        </div>
      </section>

      {/* Troop Database Table */}
      <div className="rounded-2xl bg-odin-card border border-odin-border/60 overflow-hidden shadow-odin">
        <table className="w-full text-left text-xs">
          <thead className="bg-odin-sidebar border-b border-odin-border/60 text-odin-text-muted font-mono uppercase text-[10px]">
            <tr>
              <th className="p-3">Troop Name</th>
              <th className="p-3">Tier</th>
              <th className="p-3">Class</th>
              <th className="p-3 text-right">ATK</th>
              <th className="p-3 text-right">DEF</th>
              <th className="p-3 text-right">HP</th>
              <th className="p-3 text-right">Lethality</th>
              <th className="p-3 text-right">Power / Unit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-odin-border/40 text-odin-text-main">
            {TROOPS_DATABASE.map((tr) => (
              <tr key={tr.id} className="hover:bg-odin-sidebar/50 transition-colors font-mono">
                <td className="p-3 font-sans font-bold text-odin-text-main">{tr.name}</td>
                <td className="p-3 text-orange-400 font-bold">{tr.tier}</td>
                <td className="p-3 text-odin-text-muted">{tr.class}</td>
                <td className="p-3 text-right text-blue-400">{tr.attack}</td>
                <td className="p-3 text-right text-emerald-400">{tr.defense}</td>
                <td className="p-3 text-right text-cyan-400">{tr.health}</td>
                <td className="p-3 text-right text-rose-400">{tr.lethality}</td>
                <td className="p-3 text-right font-bold text-emerald-400">+{tr.powerPerUnit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
