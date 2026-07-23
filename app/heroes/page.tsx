"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Users,
  Grid,
  List,
  ArrowUpDown,
  Pin,
  Check,
  BarChart2,
} from "lucide-react";
import { useHeroStore } from "@/stores/useHeroStore";
import { useGameStore } from "@/stores/useGameStore";
import { HEROES_DATABASE } from "@/data/heroes";

function HeroesContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const {
    searchQuery,
    setSearchQuery,
    selectedGeneration,
    setSelectedGeneration,
    selectedClass,
    setSelectedClass,
    selectedRarity,
    setSelectedRarity,
    sortBy,
    setSortBy,
    sortOrder,
    toggleSortOrder,
    viewMode,
    setViewMode,
    compareHeroIds,
    toggleCompareHero,
    clearComparison,
    resetFilters,
  } = useHeroStore();

  const { pinnedHeroIds, togglePinHero } = useGameStore();

  React.useEffect(() => {
    if (initialSearch) {
      setSearchQuery(initialSearch);
    }
  }, [initialSearch, setSearchQuery]);

  const filteredHeroes = HEROES_DATABASE.filter((hero) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        hero.name.toLowerCase().includes(q) ||
        hero.class.toLowerCase().includes(q) ||
        hero.role.toLowerCase().includes(q) ||
        hero.title.toLowerCase().includes(q);
      if (!match) return false;
    }

    if (selectedGeneration !== "all" && hero.generation !== selectedGeneration) {
      return false;
    }

    if (selectedClass !== "all" && hero.class !== selectedClass) {
      return false;
    }

    if (selectedRarity !== "all" && hero.rarity !== selectedRarity) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    let comp = 0;
    if (sortBy === "generation") comp = a.generation - b.generation;
    if (sortBy === "name") comp = a.name.localeCompare(b.name);
    if (sortBy === "power") comp = b.stats.maxLevel100.power - a.stats.maxLevel100.power;

    return sortOrder === "asc" ? comp : -comp;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Header Title Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-odin-text-main flex items-center gap-2">
            <Users className="w-7 h-7 text-odin-primary" /> Whiteout Survival Heroes Intelligence
          </h1>
          <p className="text-xs text-odin-text-muted mt-1">
            Complete database for Generation 1 to Gen 6+ Legendary & Epic Heroes, Skill Scaling, Gear & Lineup Synergies.
          </p>
        </div>

        {/* View Mode & Reset Controls */}
        <div className="flex items-center gap-3">
          {compareHeroIds.length > 0 && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-xs text-blue-400 font-mono">
              <span>{compareHeroIds.length} Selected for Compare</span>
              <button onClick={clearComparison} className="underline text-blue-300 ml-1">
                Clear
              </button>
            </div>
          )}

          <div className="flex items-center p-1 rounded-xl bg-odin-card border border-odin-border">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                viewMode === "grid" ? "bg-odin-primary text-white" : "text-odin-text-muted hover:text-odin-text-main"
              }`}
              title="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                viewMode === "list" ? "bg-odin-primary text-white" : "text-odin-text-muted hover:text-odin-text-main"
              }`}
              title="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="p-4 rounded-2xl bg-odin-card border border-odin-border/60 space-y-4 shadow-odin">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-odin-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by hero name, class (Lancer, Infantry), or role..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-odin-bg border border-odin-border text-xs text-odin-text-main placeholder-odin-text-muted outline-none focus:border-odin-primary transition-colors"
            />
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSortOrder}
              className="p-2 rounded-xl bg-odin-bg border border-odin-border text-odin-text-muted hover:text-odin-text-main text-xs transition-colors flex items-center gap-1"
            >
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span className="uppercase font-mono text-[10px]">{sortOrder}</span>
            </button>
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-xl bg-odin-bg border border-odin-border text-xs text-odin-text-main outline-none focus:border-odin-primary"
            >
              <option value="generation">Sort by Generation</option>
              <option value="name">Sort by Name</option>
              <option value="power">Sort by Max Power</option>
            </select>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-4 flex-wrap text-xs pt-1 border-t border-odin-border/40">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-mono text-odin-text-muted">Generation:</span>
            {["all", 1, 2, 3, 4, 5, 6].map((gen) => (
              <button
                key={String(gen)}
                onClick={() => setSelectedGeneration(gen as any)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                  selectedGeneration === gen
                    ? "bg-blue-600 text-white font-bold"
                    : "bg-odin-bg border border-odin-border text-odin-text-muted hover:text-odin-text-main"
                }`}
              >
                {gen === "all" ? "All" : `G${gen}`}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-mono text-odin-text-muted">Class:</span>
            {["all", "Lancer", "Infantry", "Marksman"].map((cls) => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls as any)}
                className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${
                  selectedClass === cls
                    ? "bg-cyan-600 text-white font-bold"
                    : "bg-odin-bg border border-odin-border text-odin-text-muted hover:text-odin-text-main"
                }`}
              >
                {cls}
              </button>
            ))}
          </div>

          <button
            onClick={resetFilters}
            className="text-[11px] text-odin-text-muted hover:text-red-400 underline ml-auto"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Hero Grid / List Display */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredHeroes.map((hero) => {
            const isPinned = pinnedHeroIds.includes(hero.id);
            const isComparing = compareHeroIds.includes(hero.id);

            return (
              <div
                key={hero.id}
                className="group relative rounded-2xl bg-odin-card border border-odin-border/60 hover:border-odin-primary/60 shadow-odin transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono text-[10px] font-bold">
                        G{hero.generation}
                      </span>
                      <span className="text-[10px] text-odin-text-muted">{hero.rarity}</span>
                    </div>

                    <button
                      onClick={() => togglePinHero(hero.id)}
                      className={`p-1 rounded-lg transition-colors ${
                        isPinned ? "text-blue-400" : "text-odin-text-muted hover:text-odin-text-main"
                      }`}
                    >
                      <Pin className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <Link href={`/heroes/${hero.id}`} className="block group-hover:text-odin-primary transition-colors">
                    <h3 className="text-base font-bold text-odin-text-main">{hero.name}</h3>
                    <p className="text-xs text-odin-text-muted truncate">{hero.title}</p>
                  </Link>

                  <div className="flex items-center gap-2 text-[11px] pt-1">
                    <span className="px-2 py-0.5 rounded bg-odin-sidebar border border-odin-border text-odin-text-main font-medium">
                      {hero.class}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-odin-sidebar border border-odin-border text-odin-text-muted">
                      {hero.role}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-odin-border/40 font-mono text-[11px]">
                    <div>
                      <span className="text-odin-text-muted block text-[10px]">ATK (Lv 100)</span>
                      <span className="text-blue-400 font-bold">{hero.stats.maxLevel100.attack.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-odin-text-muted block text-[10px]">DEF (Lv 100)</span>
                      <span className="text-emerald-400 font-bold">{hero.stats.maxLevel100.defense.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-2.5 bg-odin-sidebar/80 border-t border-odin-border/40 flex items-center justify-between text-xs">
                  <button
                    onClick={() => toggleCompareHero(hero.id)}
                    className={`text-[11px] font-semibold flex items-center gap-1 transition-colors ${
                      isComparing ? "text-cyan-400" : "text-odin-text-muted hover:text-odin-text-main"
                    }`}
                  >
                    {isComparing ? <Check className="w-3 h-3" /> : <BarChart2 className="w-3 h-3" />}
                    {isComparing ? "Comparing" : "Compare"}
                  </button>

                  <Link href={`/heroes/${hero.id}`} className="text-xs font-semibold text-odin-primary hover:underline">
                    Details →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="rounded-2xl bg-odin-card border border-odin-border/60 overflow-hidden shadow-odin">
          <table className="w-full text-left text-xs">
            <thead className="bg-odin-sidebar border-b border-odin-border/60 text-odin-text-muted font-mono uppercase text-[10px]">
              <tr>
                <th className="p-3">Hero</th>
                <th className="p-3">Gen</th>
                <th className="p-3">Rarity</th>
                <th className="p-3">Class</th>
                <th className="p-3">Role</th>
                <th className="p-3 text-right">Max Power</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-odin-border/40 text-odin-text-main">
              {filteredHeroes.map((hero) => (
                <tr key={hero.id} className="hover:bg-odin-sidebar/50 transition-colors">
                  <td className="p-3 font-bold">
                    <Link href={`/heroes/${hero.id}`} className="hover:text-odin-primary">
                      {hero.name} <span className="text-odin-text-muted font-normal">({hero.title})</span>
                    </Link>
                  </td>
                  <td className="p-3 font-mono font-bold text-blue-400">G{hero.generation}</td>
                  <td className="p-3 text-odin-text-muted">{hero.rarity}</td>
                  <td className="p-3">{hero.class}</td>
                  <td className="p-3 text-odin-text-muted">{hero.role}</td>
                  <td className="p-3 text-right font-mono font-bold text-emerald-400">
                    {hero.stats.maxLevel100.power.toLocaleString()}
                  </td>
                  <td className="p-3 text-right">
                    <Link href={`/heroes/${hero.id}`} className="text-xs text-odin-primary hover:underline font-semibold">
                      View →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default function HeroesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-xs font-mono text-odin-text-muted">Loading Heroes Intelligence...</div>}>
      <HeroesContent />
    </Suspense>
  );
}
