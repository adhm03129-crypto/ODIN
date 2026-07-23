"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Zap,
  Shield,
  Crosshair,
  Sparkles,
  Bot,
  Pin,
  Check,
  Calculator,
  Swords,
  Calendar,
  History,
  BookOpen,
  Award,
} from "lucide-react";
import { HEROES_DATABASE } from "@/data/heroes";
import { useGameStore } from "@/stores/useGameStore";
import { toast } from "sonner";

export default function HeroDetailPage() {
  const params = useParams();
  const router = useRouter();
  const heroId = params.id as string;

  const { pinnedHeroIds, togglePinHero } = useGameStore();
  const hero = HEROES_DATABASE.find((h) => h.id === heroId) || HEROES_DATABASE[0];

  const isPinned = pinnedHeroIds.includes(hero.id);

  // Interactive Skill Level Selector State
  const [selectedSkillLevels, setSelectedSkillLevels] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    hero.skills.forEach((s) => {
      initial[s.id] = 5; // Default max level
    });
    return initial;
  });

  // Upgrade Calculator State
  const [targetStar, setTargetStar] = useState<number>(5);

  const calculateShardsNeeded = (star: number) => {
    let total = 0;
    for (let i = 1; i <= star; i++) {
      total += hero.upgrade.shardsPerStar[i] || 100;
    }
    return total;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Back Navigation Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-xs font-semibold text-odin-text-muted hover:text-odin-text-main transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Heroes Catalog
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              togglePinHero(hero.id);
              toast.success(isPinned ? `Unpinned ${hero.name}` : `Pinned ${hero.name} to Dashboard`);
            }}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              isPinned
                ? "bg-blue-500/20 border-blue-500/40 text-blue-400"
                : "bg-odin-card border-odin-border text-odin-text-muted hover:text-odin-text-main"
            }`}
          >
            <Pin className="w-3.5 h-3.5" />
            {isPinned ? "Pinned" : "Pin Hero"}
          </button>

          <Link
            href={`/assistant?prompt=${encodeURIComponent(`Analyze ${hero.name} best team synergy and counters`)}`}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-odin-accent"
          >
            <Bot className="w-3.5 h-3.5" /> AI Analysis
          </Link>
        </div>
      </div>

      {/* Hero Hero Header Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-odin-sidebar via-odin-card to-odin-sidebar border border-odin-border/70 shadow-odin flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-xs font-mono font-bold">
              Generation {hero.generation}
            </span>
            <span className="px-3 py-1 rounded-full bg-odin-sidebar border border-odin-border text-odin-text-muted text-xs font-semibold">
              {hero.rarity}
            </span>
            <span className="px-3 py-1 rounded-full bg-odin-sidebar border border-odin-border text-odin-text-main text-xs font-semibold">
              {hero.class}
            </span>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-odin-text-main tracking-tight">
              {hero.name}
            </h1>
            <p className="text-sm text-odin-text-muted italic">{hero.title}</p>
          </div>

          <p className="text-xs text-odin-text-muted leading-relaxed">{hero.story}</p>
        </div>

        {/* Quick Stat Summary Badge */}
        <div className="p-4 rounded-2xl bg-odin-bg/80 border border-odin-border/60 min-w-[220px] space-y-2 font-mono text-xs">
          <div className="flex justify-between">
            <span className="text-odin-text-muted">Max Power (Lv 100):</span>
            <span className="text-emerald-400 font-bold">{hero.stats.maxLevel100.power.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-odin-text-muted">Base Attack:</span>
            <span className="text-blue-400 font-bold">{hero.stats.maxLevel100.attack.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-odin-text-muted">Base Defense:</span>
            <span className="text-cyan-400 font-bold">{hero.stats.maxLevel100.defense.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-odin-text-muted">Available Server Age:</span>
            <span className="text-orange-400 font-bold">Day {hero.stateAgeAvailableDays}+</span>
          </div>
        </div>
      </div>

      {/* Hero Tabs Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Skills & Stats Matrix (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Skills Breakdown */}
          <section className="p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-4 shadow-odin">
            <h2 className="text-base font-bold text-odin-text-main flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400" /> Hero Skills & Level Scaling
            </h2>

            <div className="space-y-4">
              {hero.skills.map((skill) => {
                const currentLv = selectedSkillLevels[skill.id] || 5;

                return (
                  <div
                    key={skill.id}
                    className="p-4 rounded-xl bg-odin-sidebar/60 border border-odin-border/40 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono text-[10px] uppercase font-bold">
                          {skill.type}
                        </span>
                        <h3 className="text-sm font-bold text-odin-text-main">{skill.name}</h3>
                      </div>

                      {/* Level Controls */}
                      <div className="flex items-center gap-1 font-mono text-xs">
                        <span className="text-odin-text-muted text-[10px] mr-1">Level:</span>
                        {[1, 2, 3, 4, 5].map((lvl) => (
                          <button
                            key={lvl}
                            onClick={() =>
                              setSelectedSkillLevels((prev) => ({ ...prev, [skill.id]: lvl }))
                            }
                            className={`w-6 h-6 rounded-md text-xs transition-colors ${
                              currentLv === lvl
                                ? "bg-blue-600 text-white font-bold"
                                : "bg-odin-card border border-odin-border/40 text-odin-text-muted hover:text-odin-text-main"
                            }`}
                          >
                            {lvl}
                          </button>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-odin-text-muted">{skill.description}</p>

                    {/* Level Effect Preview */}
                    <div className="p-2 rounded-lg bg-odin-card/60 text-xs font-mono text-emerald-400">
                      Level {currentLv} Effect:{" "}
                      {skill.levels.find((l) => l.level === currentLv)?.effect || skill.levels[0]?.effect}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Upgrade & Shard Calculator */}
          <section className="p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-4 shadow-odin">
            <h2 className="text-base font-bold text-odin-text-main flex items-center gap-2">
              <Calculator className="w-4 h-4 text-emerald-400" /> Star Upgrade & Shard Calculator
            </h2>

            <div className="p-4 rounded-xl bg-odin-sidebar/60 border border-odin-border/40 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-odin-text-muted">Target Star Rank:</span>
                <div className="flex items-center gap-2 font-mono">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setTargetStar(star)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                        targetStar === star
                          ? "bg-emerald-600 text-white"
                          : "bg-odin-card border border-odin-border text-odin-text-muted"
                      }`}
                    >
                      ★ {star}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-odin-border/40 text-xs font-mono">
                <div>
                  <span className="text-odin-text-muted block text-[10px]">Total Shards Needed</span>
                  <span className="text-emerald-400 text-lg font-bold">
                    {calculateShardsNeeded(targetStar)} Hero Shards
                  </span>
                </div>
                <div>
                  <span className="text-odin-text-muted block text-[10px]">Exclusive Widgets Required</span>
                  <span className="text-cyan-400 text-lg font-bold">
                    {hero.upgrade.widgetsRequired} Widgets
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Best Team Synergies */}
          <section className="p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-4 shadow-odin">
            <h2 className="text-base font-bold text-odin-text-main flex items-center gap-2">
              <Swords className="w-4 h-4 text-orange-400" /> Recommended Team Synergies
            </h2>

            <div className="space-y-3">
              {hero.teamSynergies.map((team, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-odin-sidebar/60 border border-odin-border/40 space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-odin-text-main text-sm">{team.teamName}</h3>
                    <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 font-mono text-[10px] font-bold">
                      {team.purpose}
                    </span>
                  </div>
                  <p className="text-odin-text-muted">{team.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Exclusive Gear & Counter Matrix (1 Col) */}
        <div className="space-y-6">
          {/* Exclusive Gear */}
          <section className="p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-4 shadow-odin">
            <h2 className="text-base font-bold text-odin-text-main flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" /> Exclusive Gear
            </h2>

            {hero.exclusiveGear.available ? (
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-odin-sidebar/60 border border-cyan-500/30">
                  <div className="font-bold text-cyan-400 text-sm">{hero.exclusiveGear.name}</div>
                  <div className="text-odin-text-muted mt-1">{hero.exclusiveGear.description}</div>
                </div>

                <div className="space-y-2">
                  {hero.exclusiveGear.statsPerLevel.map((lvl) => (
                    <div
                      key={lvl.level}
                      className="p-2.5 rounded-lg bg-odin-sidebar/40 border border-odin-border/30 font-mono text-[11px]"
                    >
                      <div className="font-bold text-odin-text-main">Level {lvl.level} Boost:</div>
                      <div className="text-odin-text-muted">
                        ATK: <span className="text-blue-400">{lvl.attackBonus}</span> | DEF:{" "}
                        <span className="text-emerald-400">{lvl.defenseBonus}</span>
                      </div>
                      <div className="text-cyan-400 font-sans text-[10px] mt-0.5">{lvl.specialEffect}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-xs text-odin-text-muted p-4 rounded-xl bg-odin-sidebar/40">
                No exclusive gear released for this hero.
              </div>
            )}
          </section>

          {/* Hero Strengths & Weaknesses */}
          <section className="p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-4 shadow-odin">
            <h2 className="text-base font-bold text-odin-text-main flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-400" /> Strengths & Weaknesses
            </h2>

            <div className="space-y-3 text-xs">
              <div>
                <span className="font-bold text-emerald-400 text-xs block mb-1.5">Strengths:</span>
                <ul className="list-disc list-inside space-y-1 text-odin-text-muted">
                  {hero.counters.strengths.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-odin-border/40">
                <span className="font-bold text-red-400 text-xs block mb-1.5">Weaknesses:</span>
                <ul className="list-disc list-inside space-y-1 text-odin-text-muted">
                  {hero.counters.weaknesses.map((w, i) => (
                    <li key={i}>{w}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* AI Analysis Card */}
          <section className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 to-cyan-950/40 border border-cyan-500/30 space-y-3">
            <div className="flex items-center gap-2 font-bold text-cyan-400 text-sm">
              <Bot className="w-4 h-4" /> WSIP AI Summary
            </div>
            <p className="text-xs text-odin-text-muted leading-relaxed">{hero.aiAnalysisSummary}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
