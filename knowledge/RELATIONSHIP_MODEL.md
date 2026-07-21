---
Document ID: KNO-008
Title: Relationship Model
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
- KNO-007 Entity Model

---

# Relationship Model

> Defines how knowledge entities are connected throughout the ODIN platform.

---

# 🇺🇸 English (Official)

## Purpose

A Relationship defines how two or more entities interact.

Relationships enable the AI, analytics engine, and recommendation engine to reason over knowledge instead of isolated facts.

---

# Relationship Structure

Every relationship consists of:

```
Relationship

├── Source Entity
├── Relationship Type
├── Target Entity
├── Conditions
├── Strength
├── Metadata
├── Source
└── Version
```

---

# Source Entity

The entity initiating the relationship.

Example:

```
Hero
```

---

# Target Entity

The entity being referenced.

Example:

```
Equipment
```

---

# Relationship Types

The following relationship types are standardized across ODIN.

| Type           | Description                     |
| -------------- | ------------------------------- |
| Uses           | Uses another entity             |
| Requires       | Depends on another entity       |
| Unlocks        | Grants access to another entity |
| Produces       | Creates another entity          |
| Consumes       | Uses resources                  |
| BelongsTo      | Part of a category              |
| Upgrades       | Improves another entity         |
| EvolvesInto    | Evolves into another entity     |
| RecommendedFor | Best suited for                 |
| Counters       | Strong against                  |
| CounteredBy    | Weak against                    |
| LocatedIn      | Exists within                   |
| Rewards        | Grants rewards                  |
| ParticipatesIn | Can participate in              |
| DependsOn      | Requires another relationship   |

---

# Relationship Direction

Relationships are directional.

Example:

```
Hero

USES

Equipment
```

is different from

```
Equipment

USES

Hero
```

---

# Cardinality

Relationships support:

```
One → One

One → Many

Many → One

Many → Many
```

---

# Conditions

Relationships may define conditions.

Example:

```
Requires

Furnace Level ≥ 30
```

or

```
Only during Event X
```

---

# Relationship Strength

Optional strength values:

- Critical
- Strong
- Medium
- Weak
- Informational

---

# Metadata

Relationships should include:

```
Game Version

Language

Confidence

Created

Updated

Status
```

---

# Source Verification

Every relationship should reference at least one source.

Possible sources:

- Official Documentation
- Official Patch Notes
- Verified Community Testing
- Internal Validation

---

# Versioning

Relationships evolve independently.

Every relationship has its own semantic version.

---

# Validation Rules

Every relationship must satisfy:

- Valid Source Entity
- Valid Target Entity
- Valid Relationship Type
- Verified Source
- Supported Game Version

---

# Example

```
Hero

USES

Equipment


Condition:

Hero Level ≥ 50


Confidence:

High


Source:

Official Documentation
```

---

# 🇪🇬 العربية (شرح)

## الهدف

تحدد هذه الوثيقة طريقة ربط الكيانات داخل قاعدة المعرفة.

العلاقات هي التي تسمح للذكاء الاصطناعي بفهم اللعبة بدلاً من قراءة معلومات منفصلة.

---

## مكونات العلاقة

كل علاقة تحتوي على:

- الكيان المصدر
- نوع العلاقة
- الكيان الهدف
- الشروط
- قوة العلاقة
- المصدر
- البيانات الوصفية
- الإصدار

---

## أمثلة

- البطل يستخدم معدات.
- المبنى يفتح بحثًا.
- البحث يحتاج موارد.
- الحدث يمنح مكافآت.
- الحيوان يقوي الجيش.

---

## قواعد

- العلاقة لها اتجاه واضح.
- يجب أن يكون لها مصدر.
- يجب أن تكون قابلة للتحقق.
- يجب أن تكون مرتبطة بإصدار اللعبة.

---

# Document History

| Version | Date       | Changes         |
| ------- | ---------- | --------------- |
| 1.0.0   | 2026-07-14 | Initial version |

---

# End of Document
