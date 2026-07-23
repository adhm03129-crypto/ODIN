import { Building } from "@/types/building";

export const BUILDINGS_DATABASE: Building[] = [
  {
    id: "bldg-furnace",
    name: "Furnace",
    category: "Core",
    icon: "Flame",
    description: "The heart of your city. Upgrading the Furnace unlocks higher building level caps, troop tiers, and new research trees.",
    maxLevel: 30,
    levels: [
      { level: 1, furnaceLevelRequired: 1, meatCost: "1.2K", woodCost: "1.2K", coalCost: "0", ironCost: "0", buildTimeHours: 0.1, powerGained: 500, perkDescription: "City Heat +10C, Troop Tier T1" },
      { level: 10, furnaceLevelRequired: 10, meatCost: "450K", woodCost: "450K", coalCost: "120K", ironCost: "0", buildTimeHours: 8, powerGained: 15000, perkDescription: "Unlocks Troop Tier T4" },
      { level: 20, furnaceLevelRequired: 20, meatCost: "12.5M", woodCost: "12.5M", coalCost: "3.2M", ironCost: "800K", buildTimeHours: 72, powerGained: 120000, perkDescription: "Unlocks Troop Tier T7" },
      { level: 25, furnaceLevelRequired: 25, meatCost: "85M", woodCost: "85M", coalCost: "22M", ironCost: "5.5M", buildTimeHours: 240, powerGained: 450000, perkDescription: "Unlocks Troop Tier T9" },
      { level: 30, furnaceLevelRequired: 30, meatCost: "320M", woodCost: "320M", coalCost: "80M", ironCost: "20M", buildTimeHours: 720, powerGained: 1500000, perkDescription: "Unlocks Troop Tier T10 & Fire Crystal Upgrades" },
    ],
  },
  {
    id: "bldg-barracks",
    name: "Infantry Barracks",
    category: "Military",
    icon: "Shield",
    description: "Trains Infantry units (frontline defenders with high defense and health).",
    maxLevel: 30,
    levels: [
      { level: 1, furnaceLevelRequired: 1, meatCost: "800", woodCost: "800", coalCost: "0", ironCost: "0", buildTimeHours: 0.05, powerGained: 200, perkDescription: "Trains T1 Infantry" },
      { level: 30, furnaceLevelRequired: 30, meatCost: "180M", woodCost: "180M", coalCost: "45M", ironCost: "11M", buildTimeHours: 480, powerGained: 800000, perkDescription: "Trains T10 Heavy Shield Vanguard" },
    ],
  },
  {
    id: "bldg-marksman",
    name: "Marksman Range",
    category: "Military",
    icon: "Crosshair",
    description: "Trains Marksman units (backline damage dealers with high attack and lethality).",
    maxLevel: 30,
    levels: [
      { level: 1, furnaceLevelRequired: 1, meatCost: "800", woodCost: "800", coalCost: "0", ironCost: "0", buildTimeHours: 0.05, powerGained: 200, perkDescription: "Trains T1 Marksman" },
      { level: 30, furnaceLevelRequired: 30, meatCost: "180M", woodCost: "180M", coalCost: "45M", ironCost: "11M", buildTimeHours: 480, powerGained: 800000, perkDescription: "Trains T10 Sniper Unit" },
    ],
  },
  {
    id: "bldg-lancer",
    name: "Lancer Camp",
    category: "Military",
    icon: "Zap",
    description: "Trains Lancer units (flanking damage dealers with high mobility and armor penetration).",
    maxLevel: 30,
    levels: [
      { level: 1, furnaceLevelRequired: 1, meatCost: "800", woodCost: "800", coalCost: "0", ironCost: "0", buildTimeHours: 0.05, powerGained: 200, perkDescription: "Trains T1 Lancer" },
      { level: 30, furnaceLevelRequired: 30, meatCost: "180M", woodCost: "180M", coalCost: "45M", ironCost: "11M", buildTimeHours: 480, powerGained: 800000, perkDescription: "Trains T10 Frost Lancer" },
    ],
  },
  {
    id: "bldg-infirmary",
    name: "Infirmary",
    category: "Military",
    icon: "HeartPulse",
    description: "Heals troops wounded in combat. Upgrading increases hospital capacity and healing speed.",
    maxLevel: 30,
    levels: [
      { level: 1, furnaceLevelRequired: 1, meatCost: "500", woodCost: "500", coalCost: "0", ironCost: "0", buildTimeHours: 0.02, powerGained: 150, perkDescription: "500 Hospital Beds" },
      { level: 30, furnaceLevelRequired: 30, meatCost: "120M", woodCost: "120M", coalCost: "30M", ironCost: "7.5M", buildTimeHours: 360, powerGained: 600000, perkDescription: "150,000 Hospital Beds" },
    ],
  },
  {
    id: "bldg-embassy",
    name: "Embassy",
    category: "Defense",
    icon: "Building2",
    description: "Allows alliance members to send reinforcements to defend your city and decreases construction/research help timers.",
    maxLevel: 30,
    levels: [
      { level: 30, furnaceLevelRequired: 30, meatCost: "140M", woodCost: "140M", coalCost: "35M", ironCost: "8.5M", buildTimeHours: 400, powerGained: 700000, perkDescription: "30 Alliance Helps, 1.2M Reinforcement Capacity" },
    ],
  },
];
