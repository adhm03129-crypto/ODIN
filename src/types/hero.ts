export type HeroRarity = "SSR Legendary" | "SR Epic" | "Rare";
export type HeroClass = "Lancer" | "Infantry" | "Marksman";
export type HeroRole = "Rally Leader" | "Garrison Defender" | "Exploration" | "Beast Hunter" | "Support / Control";

export interface SkillLevel {
  level: number;
  effect: string;
  cost?: string;
}

export interface HeroSkill {
  id: string;
  name: string;
  type: "exploration" | "expedition" | "passive";
  description: string;
  icon: string;
  maxLevel: number;
  levels: SkillLevel[];
}

export interface HeroStats {
  base: {
    attack: number;
    defense: number;
    health: number;
    lethality: number;
    damageReduction: number;
    speed: number;
  };
  maxLevel100: {
    attack: number;
    defense: number;
    health: number;
    lethality: number;
    damageReduction: number;
    power: number;
  };
}

export interface ExclusiveGear {
  available: boolean;
  name: string;
  description: string;
  icon?: string;
  maxLevel: number;
  statsPerLevel: {
    level: number;
    attackBonus: string;
    defenseBonus: string;
    specialEffect: string;
  }[];
}

export interface TeamSynergy {
  teamName: string;
  purpose: "Rally Attack" | "Garrison Defense" | "Bear Hunt" | "Foundry / SvS";
  teammates: string[]; // Hero IDs
  description: string;
  rating: number; // 1-5
}

export interface HeroCounter {
  countersAgainst: string[]; // Hero IDs
  counteredBy: string[]; // Hero IDs
  strengths: string[];
  weaknesses: string[];
}

export interface HeroUpgradeRequirements {
  totalShardsToMax: number;
  shardsPerStar: Record<number, number>; // 1 star to 5 star (including 0.1 increments or substars)
  widgetsRequired: number;
}

export interface Hero {
  id: string;
  name: string;
  title: string;
  generation: number;
  rarity: HeroRarity;
  class: HeroClass;
  role: HeroRole;
  avatar: string;
  banner: string;
  story: string;
  stateAgeAvailableDays: number;
  skills: HeroSkill[];
  stats: HeroStats;
  exclusiveGear: ExclusiveGear;
  upgrade: HeroUpgradeRequirements;
  teamSynergies: TeamSynergy[];
  counters: HeroCounter;
  eventsAvailable: string[];
  versionHistory: {
    version: string;
    date: string;
    changes: string;
  }[];
  references: string[];
  aiAnalysisSummary: string;
}
