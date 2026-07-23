import { ChatMessage } from "@/types/assistant";
import { HEROES_DATABASE } from "@/data/heroes";
import { BUILDINGS_DATABASE } from "@/data/buildings";
import { KNOWLEDGE_DATABASE } from "@/data/knowledgeBase";

export function generateAIResponse(prompt: string): ChatMessage {
  const query = prompt.toLowerCase();
  const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const id = `ai-${Date.now()}`;

  // 1. Bear Hunt Query
  if (query.includes("bear") || query.includes("hunt")) {
    return {
      id,
      sender: "assistant",
      timestamp,
      content: `### 🐻 Bear Hunt Score Maximization Strategy

For maximum damage against the Bear Boss, prioritize **Marksman lethality** and **defense debuffing hero leads**.

#### Recommended Rally Team Lineup:
1. **Primary Rally Lead**: **Jeronimo** (or **Alonso** in Gen 2) for armor reduction.
2. **Secondary Lead**: **Molly** (or **Mia** in Gen 3) for critical strike multiplier.
3. **Third Lead**: **Jessie** or **Bahiti** for steady DPS output.

#### Crucial Joiner Setup:
When joining someone else's rally, ALWAYS send **Jessie**, **Jasser**, or **Seo-Yoon** as your top lead hero to grant +25% rally damage to the entire march.

#### Recommended Troop Ratio:
- **5% Infantry** | **10% Lancer** | **85% Marksman**`,
      heroCards: ["hero-g01-jeronimo", "hero-g02-alonso", "hero-g01-molly"],
      synergyRecommendation: {
        title: "Apex Bear Hunt Rally Squad",
        lineup: ["Jeronimo", "Alonso", "Molly"],
        explanation: "Combines 35% squad attack bonus with 25% armor crush and high critical strike rate.",
      },
      suggestedFollowups: [
        "What are the best joiner heroes for Bear Hunt?",
        "How do I set up 5-10-85 troop presets?",
        "Compare Alonso vs Jeronimo",
      ],
    };
  }

  // 2. Hero Comparison Query (e.g. Molly vs Jeronimo)
  if (query.includes("compare") || (query.includes("molly") && query.includes("jeronimo"))) {
    const molly = HEROES_DATABASE.find((h) => h.id === "hero-g01-molly");
    const jeronimo = HEROES_DATABASE.find((h) => h.id === "hero-g01-jeronimo");

    return {
      id,
      sender: "assistant",
      timestamp,
      content: `### ⚔️ Hero Comparison Analysis: Molly vs Jeronimo

| Attribute | Molly | Jeronimo |
| :--- | :--- | :--- |
| **Generation** | Gen 1 | Gen 1 |
| **Class** | Lancer | Infantry |
| **Primary Role** | Stun Control & Rally | Tank & Attack Buffer |
| **Access** | Hall of Heroes (F2P Friendly) | VIP Packs (Premium) |
| **Base Attack** | 1,850 | 2,100 |
| **Specialty** | 2.5s Snowball Stun | Squad Attack +20% Aura |

#### WSIP Verdict:
- **Molly** is essential for Exploration and general F2P rally leadership due to her reliable stun.
- **Jeronimo** provides superior raw stat growth and squad attack buffs, making him the undisputed #1 rally lead for early SvS and Bear Hunt.`,
      heroCards: ["hero-g01-molly", "hero-g01-jeronimo"],
      suggestedFollowups: [
        "How many shards to 5-star Molly?",
        "Compare Flint vs Jeronimo",
        "Best team for Jeronimo",
      ],
    };
  }

  // 3. Furnace 30 Query
  if (query.includes("furnace") || query.includes("30") || query.includes("resource")) {
    const furnace = BUILDINGS_DATABASE.find((b) => b.id === "bldg-furnace");
    const lv30 = furnace?.levels.find((l) => l.level === 30);

    return {
      id,
      sender: "assistant",
      timestamp,
      content: `### 🔥 Furnace Level 30 Requirements & Breakdown

To reach Furnace 30, ensure your prerequisites are met in this order:

1. **Command Center Level 29**
2. **Embassy Level 29**
3. **Infirmary Level 29**

#### Resource Cost Summary:
- **Meat**: ${lv30?.meatCost || "320M"}
- **Wood**: ${lv30?.woodCost || "320M"}
- **Coal**: ${lv30?.coalCost || "80M"}
- **Iron**: ${lv30?.ironCost || "20M"}
- **Base Build Time**: ${lv30?.buildTimeHours || 720} hours (30 Days)

#### Key Perks Unlocked:
- **Troop Tier 10**: Enables training of Frost Vanguard Crusaders, Glacier Dragoons, and Frostbite Sharpshooters.
- **Fire Crystal Era**: Unlocks FC1 to FC5 upgrade paths.`,
      suggestedFollowups: [
        "What are the prerequisites for Fire Crystal 1?",
        "How much construction speedup do I need for Furnace 30?",
        "Show me T10 troop stats",
      ],
    };
  }

  // 4. SvS Query
  if (query.includes("svs") || query.includes("state vs state")) {
    return {
      id,
      sender: "assistant",
      timestamp,
      content: `### 🛡️ State vs State (SvS) War Strategy

SvS occurs monthly and consists of two phases: **Preparation Phase** (5 Days) and **Battle Phase** (24 Hours).

#### Key Point Optimization:
- **Day 1 (Hero Day)**: Save all Skill Manuals and Universal Hero Shards for this day.
- **Day 3 (Chief Gear)**: Save all Hardened Alloy and Polish Solution.
- **Day 5 (Troops)**: Convert T9 to T10 troops for maximum point efficiency per speedup hour.

#### Castle Defense Note:
Always appoint **Natalia** or **Flint** as Garrison Infantry Captain to maximize damage reduction against cross-server rallies.`,
      heroCards: ["hero-g02-flint", "hero-g01-natalia"],
      suggestedFollowups: [
        "What is the schedule for SvS Prep phase?",
        "Best garrison hero for SvS Castle defense?",
      ],
    };
  }

  // 5. Default General Intelligence search
  const matchingHero = HEROES_DATABASE.find((h) => query.includes(h.name.toLowerCase()));
  const matchingKB = KNOWLEDGE_DATABASE.find((k) => query.includes(k.title.toLowerCase()) || query.includes(k.category.toLowerCase()));

  return {
    id,
    sender: "assistant",
    timestamp,
    content: matchingHero
      ? `### 🌟 Hero Intelligence: ${matchingHero.name} (${matchingHero.title})

- **Generation**: Gen ${matchingHero.generation} (${matchingHero.rarity})
- **Class**: ${matchingHero.class} | **Role**: ${matchingHero.role}
- **Available Server Age**: Day ${matchingHero.stateAgeAvailableDays}+

#### AI Analysis:
${matchingHero.aiAnalysisSummary}

#### Key Skill: ${matchingHero.skills[0]?.name}
${matchingHero.skills[0]?.description}`
      : matchingKB
      ? `### 📚 Knowledge Base Match: ${matchingKB.title}

${matchingKB.summary}

Read full guide in Knowledge Base under **${matchingKB.category}**.`
      : `### 🤖 ODIN Intelligence Platform

I searched the Whiteout Survival database for **"${prompt}"**.

Here are relevant actions you can take:
- Explore the **Heroes** catalog (Generation 1 to Gen 6).
- Use the **Building Upgrade Calculator** for resource cost estimates.
- Check the **Knowledge Base** for detailed SvS and Bear Hunt guides.`,
    heroCards: matchingHero ? [matchingHero.id] : ["hero-g01-molly", "hero-g01-jeronimo"],
    suggestedFollowups: [
      "Show all Gen 1 Legendary Heroes",
      "What is the best team for Bear Hunt?",
      "How to reach Furnace 30 fast?",
    ],
  };
}
