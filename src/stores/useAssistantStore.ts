import { create } from "zustand";
import { ChatMessage } from "@/types/assistant";
import { generateAIResponse } from "@/lib/aiEngine";

interface AssistantStoreState {
  messages: ChatMessage[];
  isThinking: boolean;
  activeCategory: string;
  sendMessage: (userText: string) => void;
  clearHistory: () => void;
}

export const useAssistantStore = create<AssistantStoreState>((set, get) => ({
  messages: [
    {
      id: "msg-welcome",
      sender: "assistant",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      content: `Welcome to **ODIN Intelligence AI**.

I am connected directly to the **Whiteout Survival Intelligence Platform (WSIP)** knowledge database.

You can ask me anything about:
- **Hero Tier lists & synergies** (e.g. *"What is the best team for Bear Hunt?"*)
- **Hero Comparisons** (e.g. *"Compare Molly vs Jeronimo"*)
- **Furnace 30 & Building Requirements**
- **SvS Preparation Strategies**`,
      suggestedFollowups: [
        "What is the best hero team for Bear Hunt?",
        "Compare Molly vs Jeronimo",
        "How many resources for Furnace 30?",
        "Explain T10 Troop unlocked stats",
      ],
    },
  ],
  isThinking: false,
  activeCategory: "General Intelligence",

  sendMessage: (userText) => {
    if (!userText.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      content: userText,
    };

    set((state) => ({
      messages: [...state.messages, userMsg],
      isThinking: true,
    }));

    // Simulate AI synthesis with RAG engine
    setTimeout(() => {
      const responseMsg = generateAIResponse(userText);
      set((state) => ({
        messages: [...state.messages, responseMsg],
        isThinking: false,
      }));
    }, 600);
  },

  clearHistory: () =>
    set({
      messages: [
        {
          id: `msg-${Date.now()}`,
          sender: "assistant",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          content: "Chat history cleared. How can I assist your Whiteout Survival strategy today?",
          suggestedFollowups: ["What is the best hero team for Bear Hunt?", "Compare Molly vs Jeronimo"],
        },
      ],
    }),
}));
