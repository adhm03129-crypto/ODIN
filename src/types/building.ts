export interface BuildingLevel {
  level: number;
  furnaceLevelRequired: number;
  meatCost: string;
  woodCost: string;
  coalCost: string;
  ironCost: string;
  buildTimeHours: number;
  powerGained: number;
  perkDescription: string;
}

export interface Building {
  id: string;
  name: string;
  category: "Core" | "Military" | "Economy" | "Defense";
  icon: string;
  description: string;
  maxLevel: number;
  levels: BuildingLevel[];
}
