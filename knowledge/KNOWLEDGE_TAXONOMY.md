---
Document ID: KNO-005
Title: Knowledge Taxonomy
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
- KNO-001
- KNO-002
- KNO-003
- KNO-004
- ARC-004

---

# Knowledge Taxonomy

> Defines the universal knowledge model used throughout the ODIN platform.

---

# Table of Contents

1. English
2. العربية
3. Core Concepts
4. Entity Types
5. Relationships
6. Knowledge Hierarchy
7. Naming Rules
8. Future Expansion

---

# 🇺🇸 English (Official)

## Purpose

The Knowledge Taxonomy defines the common language used by every module within ODIN.

Every AI model, OCR process, analytics engine, API, and adapter must use this taxonomy when creating or consuming knowledge.

---

# Core Concepts

Knowledge is composed of the following building blocks:

- Entity
- Attribute
- Relationship
- Rule
- Source
- Metadata
- Version

These concepts are platform-wide standards.

---

# Entity

An Entity represents a real object or concept.

Examples:

- Hero
- Building
- Troop
- Research
- Item
- Pet
- Event
- Alliance
- State

Every Entity must have:

- Unique Identifier
- Name
- Description
- Category
- Metadata
- Version
- Status

---

# Attribute

Attributes describe an Entity.

Examples:

Hero

- Attack
- Defense
- Health
- Generation

Building

- Level
- Upgrade Time
- Capacity

---

# Relationship

Relationships connect entities.

Examples:

Hero

→ Uses Equipment

Hero

→ Belongs to Generation

Building

→ Unlocks Research

Research

→ Requires Resources

---

# Rule

Rules define business logic.

Examples:

- Hero A requires Furnace Level 25.
- Research B unlocks Technology C.
- Event X requires Item Y.

Rules should never be embedded inside application code.

---

# Source

Every knowledge object must reference its source.

Examples:

- Official Game
- Official Patch Notes
- Verified Community Testing
- Internal Validation

Every source should include:

- Origin
- Date
- Reliability
- Evidence

---

# Metadata

Every knowledge object should include:

- Language
- Tags
- Game Version
- Confidence
- Last Review
- Status

---

# Version

Knowledge evolves independently from software.

Each entity follows semantic versioning.

---

# Knowledge Hierarchy

```
Game

↓

Domain

↓

Entity

↓

Attributes

↓

Relationships

↓

Rules

↓

Metadata

↓

Source
```

---

# Naming Rules

Entity names should:

- Be singular.
- Use PascalCase for identifiers.
- Avoid abbreviations.
- Remain stable over time.

Examples:

Hero

Building

Research

Pet

---

# Future Expansion

The taxonomy is game-independent.

Additional games must reuse this taxonomy instead of creating new structures.

---

# 🇪🇬 العربية (شرح)

## الهدف

تحدد هذه الوثيقة اللغة الموحدة التي تستخدمها جميع مكونات منصة ODIN عند التعامل مع المعرفة.

أي معلومة داخل النظام يجب أن تتبع هذا التصنيف.

---

# المكونات الأساسية

أي معرفة تتكون من:

- كيان (Entity)
- خصائص (Attributes)
- علاقات (Relationships)
- قواعد (Rules)
- مصادر (Sources)
- بيانات وصفية (Metadata)
- إصدار (Version)

---

# الكيان

الكيان هو أي عنصر موجود داخل اللعبة.

مثل:

- بطل
- مبنى
- بحث
- جندي
- حيوان
- عنصر
- حدث

---

# العلاقات

العلاقات تربط الكيانات ببعضها.

مثل:

- البطل يستخدم معدات.
- البحث يفتح تقنية.
- المبنى يحتاج موارد.

---

# القواعد

القواعد تمثل منطق اللعبة.

ولا يجب أن تُكتب داخل الكود مباشرة.

---

# المصادر

كل معلومة يجب أن يكون لها مصدر واضح.

مثل:

- اللعبة الرسمية.
- ملاحظات التحديث.
- اختبارات موثقة.

---

# البيانات الوصفية

كل عنصر يجب أن يحتوي على:

- الإصدار.
- اللغة.
- مستوى الثقة.
- تاريخ المراجعة.

---

# التوسع

تم تصميم هذا التصنيف ليعمل مع أي لعبة مستقبلًا دون الحاجة إلى إعادة تصميم المنصة.

---

# Document History

| Version | Date       | Changes         |
| ------- | ---------- | --------------- |
| 1.0.0   | 2026-07-14 | Initial version |

---

# End of Document
