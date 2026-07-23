export type TroopClass = "Infantry" | "Lancer" | "Marksman";
export type TroopTier = "T1" | "T2" | "T3" | "T4" | "T5" | "T6" | "T7" | "T8" | "T9" | "T10" | "T11";

export interface Troop {
  id: string;
  name: string;
  tier: TroopTier;
  class: TroopClass;
  attack: number;
  defense: number;
  health: number;
  lethality: number;
  loadCapacity: number;
  upkeepFoodPerHour: number;
  powerPerUnit: number;
  buildingRequired: string;
  unlockedAtFurnaceLevel: number;
  description: string;
}
