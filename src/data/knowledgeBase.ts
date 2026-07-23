import { KnowledgeArticle } from "@/types/knowledge";

export const KNOWLEDGE_DATABASE: KnowledgeArticle[] = [
  {
    id: "kb-bear-hunt",
    slug: "bear-hunt-maximum-score-setup",
    title: "Bear Hunt Mastery: Optimal Squad Ratios & Hero Combinations",
    category: "Bear Hunt",
    summary: "Learn how to score 500M+ in Bear Hunt using optimal 5-10-85 troop ratios, defense-debuffing heroes, and joiner skills.",
    content: `# Bear Hunt Mastery: Maximize Alliance Scores

Bear Hunt is the most frequent source of Exclusive Gear Widgets and Speedups in Whiteout Survival.

## Core Principles

1. **Troop Composition Ratio**:
   - **5% Infantry**: Just enough to take the first hit.
   - **10% Lancers**: Provides secondary strike capacity.
   - **85% Marksmen**: Heavy raw attack and lethality damage against stationary target.

2. **Hero Selection**:
   - **Rally Captain**: Jeronimo or Alonso (applies massive defense debuffs to the Bear).
   - **Secondaries**: Molly or Mia (crit multiplier bonus).
   - **Joiner Heroes**: Always send **Jessie, Jasser, or Seo-Yoon** as the lead hero when *joining* someone else's rally. Their top left passive skill boosts rally damage by 25%.

3. **Buff Timing**:
   - Activate 10% City Attack Boost 5 minutes prior to trap open.
   - Assign Alliance Titles (Minister of War) to primary rally leads.`,
    author: "Staff Strategist S-420",
    updatedAt: "2026-07-20",
    version: "v2.4",
    readTimeMinutes: 5,
    tags: ["Bear Hunt", "Hero Synergies", "Troop Ratio", "Widgets"],
    relatedHeroes: ["hero-g01-molly", "hero-g02-alonso", "hero-g01-jeronimo"],
    references: ["WSIP Strategy Note #102"],
  },
  {
    id: "kb-furnace-30",
    slug: "furnace-30-resource-and-time-roadmap",
    title: "Furnace 30 Fast-Track: Resource Blueprint & Pre-requisites",
    category: "Economy & Furnace",
    summary: "Step-by-step requirements for reaching Furnace 30, Fire Crystal upgrades, and optimizing builder gear.",
    content: `# Furnace 30 Acceleration Guide

Reaching Furnace Level 30 is the single most important milestone in Whiteout Survival as it unlocks Tier 10 troops and Fire Crystal progression.

## Key Prerequisite Buildings

To start Furnace Level 30 construction, you must first complete:
- **Command Center Level 29**
- **Embassy Level 29**
- **Infirmary Level 29**

## Total Resource Requirement Checklist
- **Meat**: 320,000,000
- **Wood**: 320,000,000
- **Coal**: 80,000,000
- **Iron**: 20,000,000
- **Construction Time**: ~30 Days base (reduced to ~12 days with 20% research + alliance helps + VP speedup).`,
    author: "ODIN Architecture Team",
    updatedAt: "2026-07-18",
    version: "v1.8",
    readTimeMinutes: 7,
    tags: ["Furnace 30", "Building Roadmap", "Resource Management", "T10 Troops"],
    relatedHeroes: ["hero-g01-zinman"],
    references: ["WSIP Infrastructure Schema"],
  },
  {
    id: "kb-svs-prep",
    slug: "svs-prep-and-battle-mastery",
    title: "State vs State (SvS): Preparation Phase & Castle Warfare",
    category: "SvS Mastery",
    summary: "Mastering the 5-day SvS Preparation Phase to secure home field advantage and dominate the Castle phase.",
    content: `# State vs State (SvS) Comprehensive Guide

SvS takes place monthly and pits your server against a neighboring state.

## Preparation Phase Day-by-Day Schedule

- **Day 1**: Hero Development (Use Hero Shards & Skill Manuals)
- **Day 2**: Pet Enhancement & Beast Training
- **Day 3**: Chief Gear & Charm Upgrades
- **Day 4**: Tech Research & Building Power
- **Day 5**: Troop Training & Speedup Burn

## Battle Phase Strategy
- Assign scout towers along the border.
- Cross-server invaders lose 20% troop healing speed when outside their home server.`,
    author: "Supreme Governor S-420",
    updatedAt: "2026-07-22",
    version: "v3.1",
    readTimeMinutes: 9,
    tags: ["SvS", "State vs State", "Preparation Phase", "Castle War"],
    relatedHeroes: ["hero-g03-mia", "hero-g04-lynn"],
    references: ["WSIP War Manual"],
  },
];
