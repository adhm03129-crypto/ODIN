---
Document ID: WS-HERO-001
Title: Hero Knowledge Schema
Category: Game Knowledge
Version: 1.0.0
Status: Approved
Owner: ODIN Team
Language: English (Official) + العربية (Explanation)

Related Documents:
- README.md
- HERO_RULES.md
- HERO_RELATIONSHIPS.md
- ../../../framework/ENTITY_MODEL.md
---

# Hero Knowledge Schema

> Defines the canonical structure for all hero entities in Whiteout Survival.

---

# 🇺🇸 English (Official)

## Purpose

Every hero must follow the same structure.

The schema ensures:

- Consistency
- AI compatibility
- Validation
- Easy maintenance
- Future scalability

---

# Hero Structure

Every Hero contains the following sections:

```
Hero

├── Identity
├── Classification
├── Statistics
├── Skills
├── Equipment
├── Progression
├── Relationships
├── Recommendations
├── Sources
├── Metadata
└── Version
```

---

# Identity

Required fields

- id
- name
- generation
- rarity
- class
- faction (if applicable)

---

# Classification

Defines the hero role.

Examples

- Infantry
- Lancer
- Marksman

---

# Statistics

Examples

- Attack
- Defense
- Health
- Expedition Stats
- Exploration Stats

Statistics should be stored as structured values.

---

# Skills

Each hero contains:

- Skill Name
- Skill Type
- Description
- Upgrade Levels
- Effects

---

# Equipment

Defines supported equipment.

Examples

- Exclusive Equipment
- Recommended Gear
- Badge
- Charm

---

# Progression

Contains:

- Upgrade Requirements
- Star Levels
- Ascension
- Hero Shards

---

# Relationships

Possible relationships include:

- Counters Hero
- Recommended With Hero
- Uses Equipment
- Strong Against
- Weak Against

---

# Recommendations

Examples

- Best Events
- Best Arena Teams
- Best Expedition Teams
- Best Rally Teams

Recommendations should be generated from verified knowledge.

---

# Sources

Every hero requires:

- Official Source
- Verification Date
- Confidence Level

---

# Metadata

Every hero includes:

- Language
- Game Version
- Status
- Created
- Updated
- Tags

---

# Version

Hero data follows semantic versioning.

---

# 🇪🇬 العربية (شرح)

## الهدف

يحدد هذا الملف الشكل الرسمي لأي بطل داخل منصة ODIN.

أي بطل جديد يجب أن يحتوي على نفس الأقسام.

---

## الأقسام الأساسية

كل بطل يحتوي على:

- الهوية
- التصنيف
- الإحصائيات
- المهارات
- المعدات
- التطوير
- العلاقات
- التوصيات
- المصادر
- البيانات الوصفية
- الإصدار

---

## الهدف من هذا التصميم

- توحيد جميع الأبطال.
- تسهيل عمل الذكاء الاصطناعي.
- منع اختلاف بنية البيانات.
- تسهيل التحقق من صحة البيانات.

---

# Document History

| Version | Date       | Changes         |
| ------- | ---------- | --------------- |
| 1.0.0   | 2026-07-14 | Initial version |

---

# End of Document
