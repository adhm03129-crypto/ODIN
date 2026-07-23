# ODIN Product Requirements Document (PRD) & Product Vision

```
Document ID: PRD-ODIN-2026-V1
Product Name: ODIN Intelligence Platform
Initial Game Engine: Whiteout Survival Intelligence Platform (WSIP)
Document Version: 1.0.0
Author: Principal Product Manager & Software Architect
Status: Approved / Production Ready
Target Audience: Executive Stakeholders, Engineering Leads, Product Managers, UI/UX Lead
```

---

## 👁️ 1. Product Vision

**ODIN** is the ultimate AI-powered multi-game intelligence and workspace platform for strategic mobile and 4X strategy titles. It bridges the gap between raw, fragmented game data and real-time actionable competitive intelligence.

Inspired by modern SaaS leaders (**Notion**, **Linear**, **Vercel**, **GitHub**, **Discord**, and **Cursor**), ODIN provides a clean, ultra-fast, minimal, and premium interface that simplifies complex game mechanics. Whether a player is a casual beginner seeking quick hero stats or a top-ranking alliance leader planning cross-server **State vs State (SvS)** warfare, ODIN delivers single-click clarity, AI-driven strategy recommendations, and deep data analytics.

> **Core Philosophy**: Zero clutter. Single-click reachability. Uncompromising performance. Multi-game extensible architecture.

---

## 🎯 2. Mission Statement

> *"To empower strategic gamers worldwide with enterprise-grade data intelligence, AI decision support, and workspace tools, transforming complex strategy titles into structured, predictable competitive victories."*

---

## 📈 3. Strategic Goals

1. **Category Leadership**: Become the #1 primary intelligence platform for Whiteout Survival within 6 months of release, capturing 40%+ of active state leaders.
2. **Multi-Game Extensibility**: Maintain a decoupled, game-agnostic core domain architecture capable of onboarding new titles (e.g., *Frostpunk Beyond*, *State of Survival*, *King of Avalon*) within < 2 weeks per game without altering platform infrastructure.
3. **AI Accuracy & Context Retrieval**: Deliver >98% precision on game strategy queries via RAG (Retrieval-Augmented Generation) connected directly to verified game data schemas.
4. **Sub-100ms UI Responsiveness**: Achieve instantaneous search (`Ctrl+K`), client-side filtering, and routing performance with zero layout shifts.

---

## 👥 4. Target Users & Personas

### Persona 1: "The State Governor / Alliance Lead" (Whale / Hardcore Leader)
- **Profile**: Manages a Top 3 Alliance in State #420. Coordinates 100+ players during Sunfire Castle and SvS events.
- **Pain Points**: Spreadsheets are messy; players don't know optimal rally setups; organizing Bear Hunt rallies is chaotic.
- **Needs**: Real-time rally troop ratio calculators (5-10-85), designated rally leader rosters, state rules governance, and instant AI team recommendations.

### Persona 2: "The Tactical F2P / Light Spender"
- **Profile**: Highly competitive, plays daily, optimizes every shard and speedup.
- **Pain Points**: Wasting resources on out-of-meta heroes; lacking transparency on exclusive gear upgrade costs and state age hero availability.
- **Needs**: Precise Hero Shard & Widget Upgrade Calculators, Generation availability roadmaps, and side-by-side hero comparison tools.

### Persona 3: "The Casual / Newbie Explorer"
- **Profile**: Joined Whiteout Survival recently; overwhelmed by buildings, research trees, and complex skill descriptions.
- **Pain Points**: Traditional wikis are cluttered with ads, outdated information, and slow page loads.
- **Needs**: Clean, ad-free UI, instant hero search, simple skill level sliders, and ChatGPT-style AI strategy guidance.

---

## 🧩 5. Problem vs Solution Matrix

| Problem in Current Gaming Ecosystem | ODIN Platform Solution |
| :--- | :--- |
| **Fragmented Information**: Game stats scattered across Reddit, Discord, Fandom wikis, and Youtube videos. | **Single Source of Truth**: Centralized, schema-validated database covering Heroes, Buildings, Tech Trees, Troops, Pets, and Events. |
| **Outdated Meta & Hall of Heroes Data**: Wikis rarely reflect state server age (e.g. Gen 1 vs Gen 6 meta). | **State-Age Context Engine**: Filters heroes and recommendations dynamically based on Server State Age (Day 1 to 300+). |
| **Complex Math & Resource Waste**: Manual calculations for Furnace 30 and rally compositions lead to mistakes. | **Embedded Calculators**: Interactive level sliders, shard calculators, and troop ratio presets. |
| **High Friction & Visual Noise**: Traditional gaming sites are bogged down by popups, video ads, and bloat. | **Linear/Notion SaaS Minimalism**: Dark-theme first (`#0B1220`), sub-100ms load times, `Ctrl+K` command palette. |
| **Single-Game Silos**: Strategy tools are custom-built for one game and abandoned when meta shifts. | **Multi-Game Core Architecture**: Abstract entity model supporting multiple strategy games under one unified workspace. |

---

## ⚡ 6. Core Features Specification

### 6.1 Multi-Game Workspace Core
- **Game Switcher**: Topbar / Sidebar selector supporting active Whiteout Survival (WSIP) with zero-downtime switching to future strategy titles.
- **Global Command Palette (`Ctrl+K`)**: Instant search overlay across all entities (Heroes, Buildings, Tech, Guides, Actions).

### 6.2 Whiteout Survival Intelligence Hub
1. **Hero Intelligence Center**:
   - Generation (Gen 1 to Gen 6+), Rarity, Class, and Role filtering.
   - Interactive Skill Scaling (Level 1 to 5).
   - Base vs Max Level 100 Stats Matrix.
   - Exclusive Gear specifications & level stat boosts.
   - Upgrade Shard & Widget Calculator.
   - Side-by-side Hero Comparison Tool.
2. **Building & Infrastructure Roadmap**:
   - Level slider for Furnace 1-30 & Fire Crystal tiers.
   - Resource requirements (Meat, Wood, Coal, Iron) and build time estimates.
3. **Troops & Combat Ratio Engine**:
   - Unit stats matrix for T1-T11 Infantry, Lancers, and Marksmen.
   - Rally Ratio Calculator (Bear Hunt 5/10/85, SvS 50/20/30, Garrison 40/40/20).
4. **Events & State Governance**:
   - Event Calendar (Sunfire Castle, SvS, Bear Hunt, Foundry Battle) with preparation checklists.
   - State Presidency history and NAP 10 rules archive.
5. **AI Strategy Assistant**:
   - Natural language strategy solver built with RAG over verified game schemas.
   - Pre-built prompt presets and inline hero card responses.

---

## 🔮 7. Future Vision & Multi-Game Expansion

ODIN's underlying domain model separates **Platform Core Services** (Search, AI RAG, User Workspace, Analytics) from **Game Data Schemas**.

```
ODIN Core Platform (Auth, AI Engine, Command Palette, Theme, Analytics)
  └── Multi-Game Plugin Architecture
       ├── Game Module 1: Whiteout Survival (Active)
       ├── Game Module 2: Frostpunk Beyond (Extensible)
       ├── Game Module 3: State of Survival (Extensible)
       └── Game Module 4: Custom Community Title (Extensible)
```

Future roadmap features include:
- **OCR Screenshot Reader**: Uploading in-game hero gear screenshots to auto-import stats into ODIN.
- **Live Alliance Discord Bot Sync**: Synchronizing ODIN Bear Hunt rally alerts directly into Discord channels.
- **Custom Player Lineup Builder**: Saving and sharing custom 5-hero lineup permalinks.

---

## ⚔️ 8. Competitive Analysis

| Evaluation Dimension | Traditional Game Wikis | Discord Community | Custom Spreadsheets | **ODIN Platform** |
| :--- | :--- | :--- | :--- | :--- |
| **Speed & Performance** | Slow, ad-heavy | Fast text, zero structure | Fast, poor UX | 🚀 **Sub-100ms Next.js SaaS** |
| **Searchability** | Poor, messy menus | Hard to search past messages | Manual searching | 🔍 **Global `Ctrl+K` Instant Search** |
| **AI Integration** | None | Ad-hoc bots | None | 🤖 **Embedded RAG Strategy AI** |
| **Data Accuracy** | Frequently outdated | Unverified opinions | Manual maintenance | ⚡ **Schema-Validated Data** |
| **User Interface** | Cluttered, 2010 design | Chat interface | Grid cells | 🎨 **Modern Minimal SaaS (Notion style)** |

---

## 🚫 9. Product Scope: In-Scope vs Out-of-Scope

### In-Scope (Phase 1 Deliverables)
- Full Whiteout Survival intelligence database (Gen 1-6 Heroes, Buildings, Tech, Troops, Events).
- Interactive calculators (Shards, Building costs, Rally ratios).
- AI Strategy Assistant with local RAG execution.
- Command Palette (`Ctrl+K`) and dark-theme SaaS layout.
- Multi-game architecture contracts.

### Out-of-Scope (Phase 1 Non-Goals)
- Real-time packet sniffing or unauthorized game account scraping (violates game TOS).
- Direct real-money microtransaction payment processing inside the platform.
- Native mobile app app-store deployment (Phase 1 is Progressive Web SaaS).

---

## 📋 10. Functional Requirements (FR)

### FR-1: Global Command Palette (`Ctrl+K`)
- **Priority**: P0 (Critical)
- **User Story**: As a player, I want to press `Ctrl+K` anywhere in the app so I can instantly search any hero, building, or guide within 2 keypresses.
- **Acceptance Criteria**:
  - Modal opens immediately upon `Ctrl+K` or `Cmd+K`.
  - Filters matching records across Heroes, Buildings, Events, and Knowledge articles in real time.
  - Supports keyboard arrow navigation and `Esc` to close.

### FR-2: Hero Database & Multi-Filter Catalog
- **Priority**: P0 (Critical)
- **User Story**: As a player, I want to filter heroes by Generation, Class, and Rarity so I can plan my server meta investments.
- **Acceptance Criteria**:
  - Filters update list without full page reloads.
  - Supports Grid and List view toggle.
  - Allows selecting up to 3 heroes for side-by-side comparison.

### FR-3: Hero Upgrade & Shard Calculator
- **Priority**: P1 (High)
- **User Story**: As a F2P/light spender, I want to calculate exact hero shards needed to reach 5 stars.
- **Acceptance Criteria**:
  - User can select target star rank (★1 to ★5).
  - Displays exact total shards and exclusive gear widget count needed.

### FR-4: Building Upgrade & Resource Estimator
- **Priority**: P1 (High)
- **User Story**: As a player pushing to Furnace 30, I want to calculate exact resource costs and build times.
- **Acceptance Criteria**:
  - Interactive slider for levels 1 to 30.
  - Calculates Meat, Wood, Coal, Iron costs, build time hours, and unlocked perks.

### FR-5: Rally Troop Ratio Calculator
- **Priority**: P1 (High)
- **User Story**: As an Alliance Lead, I want to calculate 5/10/85 troop numbers based on march capacity.
- **Acceptance Criteria**:
  - User inputs total march capacity.
  - Presets for Bear Hunt (5/10/85), SvS Rally (50/20/30), and Garrison (40/40/20) instantly recalculate unit breakdowns.

### FR-6: Embedded AI Strategy Assistant
- **Priority**: P0 (Critical)
- **User Story**: As a user, I want to ask strategic questions in natural language and receive formatted advice with inline hero cards.
- **Acceptance Criteria**:
  - Chat interface supports pre-built prompt presets.
  - Generates context-aware responses with markdown formatting and clickable hero cards.

---

## 🛡️ 11. Non-Functional Requirements (NFR)

### NFR-1: Performance & Speed
- **First Contentful Paint (FCP)**: < 0.8s on standard broadband.
- **Time to Interactive (TTI)**: < 1.2s.
- **Client Bundle Size**: Shared JS load under 110 kB.

### NFR-2: Scalability & Architecture
- Feature-based folder structure in Next.js 15 App Router.
- Decoupled state management with Zustand.
- Static generation for core pages with dynamic fallback support.

### NFR-3: Design & Aesthetics
- Dark theme default background `#0B1220`, sidebar `#111827`, card `#1F2937`.
- Rounded corners `16px` (`rounded-2xl`).
- Minimal soft shadows, clean typography (Inter / JetBrains Mono), zero banner ads.

### NFR-4: Accessibility & SEO
- Semantic HTML5 structure with ARIA labels on all interactive controls.
- Dynamic page title and meta description tags across all routes.
- Full keyboard accessibility for modal dialogs and inputs.

---

## 📌 Document Approval & Sign-Off

```
[APPROVED] Product Strategy Lead - ODIN Platform
[APPROVED] Frontend Architect - Next.js Engineering Team
[APPROVED] Lead Game Analyst - Whiteout Survival Meta Group
```
