export type EventCategory = "PvP" | "PvE" | "Alliance" | "State vs State" | "Growth";

export interface GameEvent {
  id: string;
  name: string;
  category: EventCategory;
  frequency: "Daily" | "Weekly" | "Bi-Weekly" | "Monthly" | "Seasonal";
  status: "Live Now" | "Upcoming" | "Completed";
  nextOccurrenceDays: number;
  description: string;
  keyRewards: string[];
  recommendedPreparation: string[];
  strategyGuideSlug?: string;
}
