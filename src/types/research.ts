export type TechCategory = "Growth" | "Economy" | "Battle" | "Hero Tech";

export interface TechNode {
  id: string;
  name: string;
  category: TechCategory;
  description: string;
  maxLevel: number;
  icon: string;
  prerequisites: string[]; // Tech IDs required
  effectPerLevel: string;
}
