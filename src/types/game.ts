export interface Game {
  id: string;
  name: string;
  shortName: string;
  publisher: string;
  genre: string;
  icon: string;
  banner: string;
  isActive: boolean;
  stateAgeDays: number;
  activeServer: string;
  supportedGenerations: number;
  totalEntitiesCount: {
    heroes: number;
    buildings: number;
    research: number;
    events: number;
  };
}

export interface WorkspaceState {
  activeGameId: string;
  activeStateId: string;
  activeLanguage: string;
  pinnedHeroes: string[];
  favoriteTools: string[];
  recentSearches: string[];
  theme: "dark" | "light" | "system";
}
