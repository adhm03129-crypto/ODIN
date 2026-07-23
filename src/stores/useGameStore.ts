import { create } from "zustand";
import { persist } from "zustand/middleware";
import { GAMES_DATABASE } from "@/data/games";

interface GameState {
  activeGameId: string;
  activeStateServer: string;
  stateAgeDays: number;
  pinnedHeroIds: string[];
  favoriteTools: string[];
  recentSearches: string[];
  
  // Actions
  setActiveGameId: (gameId: string) => void;
  setActiveStateServer: (server: string) => void;
  togglePinHero: (heroId: string) => void;
  toggleFavoriteTool: (toolId: string) => void;
  addRecentSearch: (query: string) => void;
  clearRecentSearches: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      activeGameId: "whiteout-survival",
      activeStateServer: "State #420 (S-420)",
      stateAgeDays: 450,
      pinnedHeroIds: ["hero-g01-molly", "hero-g01-jeronimo", "hero-g02-alonso"],
      favoriteTools: ["bear-hunt-calculator", "shard-upgrade-calculator", "building-time-estimator"],
      recentSearches: ["Molly Exclusive Gear", "Furnace 30 cost", "SvS Prep Phase"],

      setActiveGameId: (gameId) => set({ activeGameId: gameId }),
      setActiveStateServer: (server) => set({ activeStateServer: server }),
      
      togglePinHero: (heroId) =>
        set((state) => ({
          pinnedHeroIds: state.pinnedHeroIds.includes(heroId)
            ? state.pinnedHeroIds.filter((id) => id !== heroId)
            : [...state.pinnedHeroIds, heroId],
        })),

      toggleFavoriteTool: (toolId) =>
        set((state) => ({
          favoriteTools: state.favoriteTools.includes(toolId)
            ? state.favoriteTools.filter((id) => id !== toolId)
            : [...state.favoriteTools, toolId],
        })),

      addRecentSearch: (query) =>
        set((state) => {
          if (!query.trim()) return state;
          const filtered = state.recentSearches.filter((q) => q.toLowerCase() !== query.toLowerCase());
          return { recentSearches: [query, ...filtered].slice(0, 8) };
        }),

      clearRecentSearches: () => set({ recentSearches: [] }),
    }),
    {
      name: "odin-game-workspace",
    }
  )
);
