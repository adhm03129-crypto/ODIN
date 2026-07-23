export interface ChatMessage {
  id: string;
  sender: "user" | "assistant";
  timestamp: string;
  content: string;
  heroCards?: string[]; // IDs of heroes to display inline
  synergyRecommendation?: {
    title: string;
    lineup: string[];
    explanation: string;
  };
  suggestedFollowups?: string[];
}

export interface PromptPreset {
  id: string;
  title: string;
  prompt: string;
  iconName: string;
  category: string;
}
