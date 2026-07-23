"use client";

import React, { useState } from "react";
import { Coins, Calculator, Beef, Trees, Flame, Pickaxe } from "lucide-react";

export default function ResourcesPage() {
  const [meatChest, setMeatChest] = useState<number>(500);
  const [woodChest, setWoodChest] = useState<number>(500);

  const meatTotal = meatChest * 100000;
  const woodTotal = woodChest * 100000;

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-odin-text-main flex items-center gap-2">
          <Coins className="w-7 h-7 text-yellow-400" /> Resource Chest Inventory & Conversion
        </h1>
        <p className="text-xs text-odin-text-muted mt-1">
          Meat, Wood, Coal, Iron chest conversion and speedup inventory totals.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-4 shadow-odin">
        <h2 className="text-base font-bold text-odin-text-main flex items-center gap-2">
          <Calculator className="w-4 h-4 text-yellow-400" /> Resource Chest Calculator
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-odin-sidebar/60 border border-odin-border/40 space-y-2">
            <label className="text-odin-text-muted">100K Meat Chests Count:</label>
            <input
              type="number"
              value={meatChest}
              onChange={(e) => setMeatChest(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl bg-odin-bg border border-odin-border text-sm text-odin-text-main font-bold outline-none"
            />
            <div className="text-emerald-400 font-bold pt-1">Total: {(meatTotal / 1000000).toFixed(1)}M Meat</div>
          </div>

          <div className="p-4 rounded-xl bg-odin-sidebar/60 border border-odin-border/40 space-y-2">
            <label className="text-odin-text-muted">100K Wood Chests Count:</label>
            <input
              type="number"
              value={woodChest}
              onChange={(e) => setWoodChest(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl bg-odin-bg border border-odin-border text-sm text-odin-text-main font-bold outline-none"
            />
            <div className="text-emerald-400 font-bold pt-1">Total: {(woodTotal / 1000000).toFixed(1)}M Wood</div>
          </div>
        </div>
      </div>
    </div>
  );
}
