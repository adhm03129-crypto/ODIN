import { create } from "zustand";

interface SearchStoreState {
  isOpen: boolean;
  query: string;
  openPalette: () => void;
  closePalette: () => void;
  togglePalette: () => void;
  setQuery: (q: string) => void;
}

export const useSearchStore = create<SearchStoreState>((set) => ({
  isOpen: false,
  query: "",
  openPalette: () => set({ isOpen: true }),
  closePalette: () => set({ isOpen: false, query: "" }),
  togglePalette: () => set((state) => ({ isOpen: !state.isOpen })),
  setQuery: (query) => set({ query }),
}));
