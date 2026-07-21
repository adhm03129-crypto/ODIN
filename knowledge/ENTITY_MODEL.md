---
Document ID: KNO-007
Title: Entity Model
Category: Knowledge
Version: 1.0.0
Status: Approved
Owner: ODIN Team
Author: ODIN Team
Created: 2026-07-14
Last Updated: 2026-07-14
Review Cycle: Quarterly
Language: English (Official) + العربية (Explanation)

Related Documents:
- KNO-005 Knowledge Taxonomy
- KNO-006 Domain Model
- KNO-003 Knowledge Schema

---

# Entity Model

> Defines the universal structure of knowledge entities inside the ODIN platform.

---

# 🇺🇸 English (Official)

## Purpose

An Entity represents a real object, concept, or system element inside a game.

Every knowledge object in ODIN must be represented as an Entity.

Examples:

- Hero
- Building
- Troop
- Research
- Item
- Event
- Resource
- Technology

---

# Entity Structure

Every Entity follows this structure:

```
Entity

├── Identity
├── Description
├── Attributes
├── Relationships
├── Rules
├── Sources
├── Metadata
├── Version
└── Validation
```

---

# 1. Identity

Defines the unique identification of an entity.

Required fields:

```
id
name
type
domain
```

Example:

```
id:
hero_freyja

type:
Hero

domain:
Heroes
```

---

# 2. Description

Contains the general explanation of the entity.

Includes:

- Purpose
- Role
- Classification
- Usage

---

# 3. Attributes

Attributes describe the properties of an entity.

Examples:

Hero:

```
Attack
Defense
Health
Rarity
Generation
Class
```

Building:

```
Level
Upgrade Cost
Requirements
Capacity
```

---

# 4. Relationships

Relationships define connections between entities.

Examples:

```
Hero

USES

Equipment


Building

UNLOCKS

Research


Research

REQUIRES

Resource
```

---

# Relationship Types

Standard relationship types:

| Type      | Description                         |
| --------- | ----------------------------------- |
| Uses      | Entity uses another entity          |
| Requires  | Entity needs another entity         |
| Unlocks   | Entity enables another entity       |
| BelongsTo | Entity belongs to category          |
| Counters  | Entity is effective against another |
| Upgrades  | Entity improves another             |

---

# 5. Rules

Rules represent logical conditions.

Examples:

```
IF Furnace Level >= 30
THEN Unlock Feature X
```

Rules must be stored as knowledge.

They should not be hidden inside application code.

---

# 6. Sources

Every entity requires source information.

Source contains:

```
origin
date
reference
confidence
```

Example:

```
Origin:
Official Update

Confidence:
High
```

---

# 7. Metadata

Metadata provides additional information.

Required:

```
language
tags
game_version
status
created_date
updated_date
```

---

# 8. Version

Every entity supports independent versioning.

Example:

```
Version:
1.0.0
```

Changes must be tracked.

---

# 9. Validation

Before publishing an entity:

Validation checks:

- Required fields exist.
- Sources are provided.
- Relationships are valid.
- Version is correct.

---

# Entity Lifecycle

```
Draft

↓

Review

↓

Approved

↓

Published

↓

Deprecated
```

---

# Example Entity

```
Entity:

Hero

Identity:

id:
hero_example

type:
Hero

domain:
Heroes


Attributes:

Attack
Defense
Skills


Relationships:

Uses Equipment

Belongs To Generation


Source:

Official Data


Version:

1.0.0
```

---

# 🇪🇬 العربية (شرح)

## الهدف

هذا الملف يحدد الشكل الموحد لأي عنصر داخل قاعدة معرفة ODIN.

أي شيء في اللعبة يعتبر Entity.

مثل:

- البطل
- المبنى
- البحث
- الجندي
- العنصر
- الحدث

---

# مكونات الكيان

كل كيان يحتوي على:

- الهوية
- الوصف
- الخصائص
- العلاقات
- القواعد
- المصادر
- البيانات الإضافية
- الإصدار
- التحقق

---

# لماذا هذا مهم؟

لأن الذكاء الاصطناعي لن يتعامل مع ملفات عشوائية.

بل سيتعامل مع كيانات منظمة لها:

- هوية واضحة.
- علاقات واضحة.
- مصدر واضح.
- إصدار واضح.

---

# Document History

| Version | Date       | Changes         |
| ------- | ---------- | --------------- |
| 1.0.0   | 2026-07-14 | Initial version |

---

# End of Document
