import { Troop } from "@/types/troop";

export const TROOPS_DATABASE: Troop[] = [
  // Infantry
  { id: "troop-inf-t1", name: "Recruit Infantry", tier: "T1", class: "Infantry", attack: 10, defense: 15, health: 120, lethality: 5, loadCapacity: 10, upkeepFoodPerHour: 1, powerPerUnit: 2, buildingRequired: "Barracks Lv 1", unlockedAtFurnaceLevel: 1, description: "Basic frontline defender." },
  { id: "troop-inf-t7", name: "Ironhide Vanguard", tier: "T7", class: "Infantry", attack: 85, defense: 110, health: 850, lethality: 35, loadCapacity: 25, upkeepFoodPerHour: 4, powerPerUnit: 18, buildingRequired: "Barracks Lv 20", unlockedAtFurnaceLevel: 20, description: "Mid-game heavy defender with blast shields." },
  { id: "troop-inf-t10", name: "Frost Vanguard Crusader", tier: "T10", class: "Infantry", attack: 210, defense: 280, health: 2200, lethality: 95, loadCapacity: 45, upkeepFoodPerHour: 8, powerPerUnit: 52, buildingRequired: "Barracks Lv 30", unlockedAtFurnaceLevel: 30, description: "The ultimate frontline tank unit." },

  // Lancer
  { id: "troop-lan-t1", name: "Scout Lancer", tier: "T1", class: "Lancer", attack: 12, defense: 10, health: 90, lethality: 8, loadCapacity: 8, upkeepFoodPerHour: 1, powerPerUnit: 2, buildingRequired: "Lancer Camp Lv 1", unlockedAtFurnaceLevel: 1, description: "Fast maneuvering flanker." },
  { id: "troop-lan-t7", name: "Storm Lancer", tier: "T7", class: "Lancer", attack: 105, defense: 80, health: 650, lethality: 55, loadCapacity: 20, upkeepFoodPerHour: 4, powerPerUnit: 18, buildingRequired: "Lancer Camp Lv 20", unlockedAtFurnaceLevel: 20, description: "High lethality cavalry unit." },
  { id: "troop-lan-t10", name: "Glacier Dragoon", tier: "T10", class: "Lancer", attack: 260, defense: 190, health: 1650, lethality: 140, loadCapacity: 40, upkeepFoodPerHour: 8, powerPerUnit: 52, buildingRequired: "Lancer Camp Lv 30", unlockedAtFurnaceLevel: 30, description: "Devastating strike unit targeting enemy backlines." },

  // Marksman
  { id: "troop-mar-t1", name: "Hunter Archer", tier: "T1", class: "Marksman", attack: 15, defense: 8, health: 80, lethality: 10, loadCapacity: 12, upkeepFoodPerHour: 1, powerPerUnit: 2, buildingRequired: "Marksman Range Lv 1", unlockedAtFurnaceLevel: 1, description: "Basic ranged unit." },
  { id: "troop-mar-t7", name: "Heavy Crossbowman", tier: "T7", class: "Marksman", attack: 125, defense: 65, health: 580, lethality: 70, loadCapacity: 22, upkeepFoodPerHour: 4, powerPerUnit: 18, buildingRequired: "Marksman Range Lv 20", unlockedAtFurnaceLevel: 20, description: "Piercing ranged attacks." },
  { id: "troop-mar-t10", name: "Frostbite Sharpshooter", tier: "T10", class: "Marksman", attack: 310, defense: 160, health: 1450, lethality: 185, loadCapacity: 42, upkeepFoodPerHour: 8, powerPerUnit: 52, buildingRequired: "Marksman Range Lv 30", unlockedAtFurnaceLevel: 30, description: "Extreme damage output against rallies." },
];
