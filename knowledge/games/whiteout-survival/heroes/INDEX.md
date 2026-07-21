---
Document ID: WS-HERO-002
Title: Whiteout Survival Hero Registry
Category: Game Knowledge
Version: 2.1.0
Status: Approved
Owner: ODIN Team
Language: English (Official)
Last Updated: 2026-07-14
Related Documents:
  - README.md
  - HERO_SCHEMA.md
  - heroes/data/
---

# Whiteout Survival Hero Registry

> Official registry of all Whiteout Survival heroes supported by the ODIN platform.

---

# Purpose

This document serves as the official registry of every hero available in Whiteout Survival.

It is the **Single Source of Truth (SSOT)** for hero identities.

This document **does not contain hero knowledge** such as skills, stats, equipment, or recommendations.

Detailed hero information is stored inside:

```text
heroes/data/
```

---

# Registry Rules

- Hero IDs are permanent.
- Hero IDs must never change.
- Hero names must follow the official game naming.
- One hero = one JSON file.
- Every hero must appear in this registry before its data file is created.

---

# Status Legend

| Symbol | Meaning |
|---------|----------|
| ⏳ | Not Started |
| 🚧 | In Progress |
| ✅ | Verified |

---

# Hero Registry

## Generation 1

| ID | Hero | Class | Rarity | Source | Data | Verified |
|----|------|--------|---------|--------|------|-----------|
| hero-g01-smith | Smith | Infantry | Rare | Wiki | ⏳ | ⏳ |
| hero-g01-eugene | Eugene | Infantry | Rare | Wiki | ⏳ | ⏳ |
| hero-g01-charlie | Charlie | Lancer | Rare | Wiki | ⏳ | ⏳ |
| hero-g01-cloris | Cloris | Marksman | Rare | Wiki | ⏳ | ⏳ |
| hero-g01-sergey | Sergey | Infantry | Epic | Wiki | ⏳ | ⏳ |
| hero-g01-jessie | Jessie | Lancer | Epic | Wiki | ⏳ | ⏳ |
| hero-g01-patrick | Patrick | Lancer | Epic | Wiki | ⏳ | ⏳ |
| hero-g01-lumak_bokan | Lumak Bokan | Lancer | Epic | Wiki | ⏳ | ⏳ |
| hero-g01-ling_xue | Ling Xue | Lancer | Epic | Wiki | ⏳ | ⏳ |
| hero-g01-gina | Gina | Marksman | Epic | Wiki | ⏳ | ⏳ |
| hero-g01-bahiti | Bahiti | Marksman | Epic | Wiki | ⏳ | ⏳ |
| hero-g01-jasser | Jasser | Marksman | Epic | Wiki | ⏳ | ⏳ |
| hero-g01-seo_yoon | Seo-Yoon | Marksman | Epic | Wiki | ⏳ | ⏳ |
| hero-g01-natalia | Natalia | Infantry | Legendary | Wiki | ⏳ | ⏳ |
| hero-g01-jeronimo | Jeronimo | Infantry | Legendary | Wiki | ⏳ | ⏳ |
| hero-g01-molly | Molly | Lancer | Legendary | Wiki | ⏳ | ⏳ |
| hero-g01-zinman | Zinman | Marksman | Legendary | Wiki | ⏳ | ⏳ |

### Statistics

| Category | Count |
|----------|------:|
| Total Heroes | 17 |
| Rare | 4 |
| Epic | 9 |
| Legendary | 4 |

---

### Progress

| Item | Value |
|------|------:|
| Heroes Completed | 0 / 17 |
| Completion | 0% |

---

## Generation 2

> Not yet indexed.

---

## Generation 3

> Not yet indexed.

---

## Generation 4

> Not yet indexed.

---

## Generation 5

> Not yet indexed.

---

## Generation 6

> Not yet indexed.

---

## Future Generations

New heroes should be added only after their official release and verification.

---

# Notes

- This document contains hero identities only.
- Hero data is maintained separately.
- Hero IDs must remain stable across all ODIN components.
- AI, OCR, Backend and Frontend must reference this registry instead of maintaining separate hero lists.

---

# Document History

| Version | Date | Changes |
|---------|------------|------------------------------|
| 2.0.0 | 2026-07-14 | Initial Hero Registry |
| 2.1.0 | 2026-07-14 | Added registry rules, source tracking, statistics, progress, and notes |

---

# End of Document
