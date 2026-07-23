import { create } from "zustand";
import { HeroClass, HeroRarity, HeroRole } from "@/types/hero";

interface HeroStoreState {
  searchQuery: string;
  selectedGeneration: number | "all";
  selectedClass: HeroClass | "all";
  selectedRarity: HeroRarity | "all";
  selectedRole: HeroRole | "all";
  sortBy: "generation" | "name" | "power" | "rarity";
  sortOrder: "asc" | "desc";
  viewMode: "grid" | "list";
  compareHeroIds: string[];

  // Actions
  setSearchQuery: (query: string) => void;
  setSelectedGeneration: (gen: number | "all") => void;
  setSelectedClass: (cls: HeroClass | "all") => void;
  setSelectedRarity: (rarity: HeroRarity | "all") => void;
  setSelectedRole: (role: HeroRole | "all") => void;
  setSortBy: (sort: "generation" | "name" | "power" | "rarity") => void;
  toggleSortOrder: () => void;
  setViewMode: (mode: "grid" | "list") => void;
  toggleCompareHero: (heroId: string) => void;
  clearComparison: () => void;
  resetFilters: () => void;
}

export const useHeroStore = create<HeroStoreState>()((set) => ({
  searchQuery: "",
  selectedGeneration: "all",
  selectedClass: "all",
  selectedRarity: "all",
  selectedRole: "all",
  sortBy: "generation",
  sortOrder: "asc",
  viewMode: "grid",
  compareHeroIds: ["hero-g01-molly", "hero-g01-jeronimo"],

  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedGeneration: (gen) => set({ selectedGeneration: gen }),
  setSelectedClass: (cls) => set({ selectedClass: cls }),
  setSelectedRarity: (rarity) => set({ selectedRarity: rarity }),
  setSelectedRole: (role) => set({ selectedRole: role }),
  setSortBy: (sort) => set({ sortBy: sort }),
  toggleSortOrder: () => set((s) => ({ sortOrder: s.sortOrder === "asc" ? "desc" : "asc" })),
  setViewMode: (mode) => set({ viewMode: mode }),
  
  toggleCompareHero: (heroId) =>
    set((state) => {
      if (state.compareHeroIds.includes(heroId)) {
        return { compareHeroIds: state.compareHeroIds.filter((id) => id !== heroId) };
      }
      if (state.compareHeroIds.length >= 3) {
        return { compareHeroIds: [...state.compareHeroIds.slice(1), heroId] };
      }
      return { compareHeroIds: [...state.compareHeroIds, heroId] };
    }),

  clearComparison: () => set({ compareHeroIds: [] }),

  resetFilters: () =>
    set({
      searchQuery: "",
      selectedGeneration: "all",
      selectedClass: "all",
      selectedRarity: "all",
      selectedRole: "all",
      sortBy: "generation",
      sortOrder: "asc",
    }),
}));
