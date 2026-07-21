---
Document ID: ARC-007
Title: Event Flow
Category: Architecture
Version: 1.0.0
Status: Draft
Owner: ODIN Team
Author: ODIN Team
Created: 2026-07-14
Last Updated: 2026-07-14
Review Cycle: Quarterly
Language: English (Official) + العربية (Explanation)

Related Documents:
- ARC-003
- ARC-004
- ARC-005
- ARC-006

Related ADRs:
- None
---

# Event Flow

> Defines how modules communicate through events across the ODIN platform.

---

# Table of Contents

1. English
2. العربية
3. Event Principles
4. Event Lifecycle
5. Event Categories
6. Document History

---

# 🇺🇸 English (Official)

## Purpose

This document defines the event-driven communication model used inside the ODIN platform.

Events notify other modules that something has happened without creating direct dependencies.

---

# Event Principles

The event system follows these principles:

- Loose coupling
- Single responsibility
- Independent event consumers
- Immutable events
- No business logic inside events

---

# Event Lifecycle

```
Business Action

↓

Domain Event

↓

Event Dispatcher

↓

Interested Modules

↓

Processing

↓

Completion
```

---

# Event Categories

## Domain Events

Represent important business occurrences.

Examples:

- HeroCreated
- ResearchCompleted
- BuildingUpgraded

---

## Integration Events

Used to communicate with external systems.

Examples:

- ScreenshotImported
- AIResponseReceived
- OCRCompleted

---

## System Events

Represent platform-level operations.

Examples:

- UserSignedIn
- CacheCleared
- ConfigurationReloaded

---

# Event Rules

Every event must:

- Have a clear name.
- Represent something that already happened.
- Be immutable.
- Contain only required data.
- Be independently processable.

---

# Event Processing

Modules subscribe only to events they need.

A module must never depend on the internal implementation of another module.

Communication occurs through published events.

---

# Error Handling

Event failures must:

- Be isolated.
- Be logged.
- Never stop unrelated event processing.

Retries should be handled by infrastructure.

---

# Performance

The event architecture should support:

- Asynchronous processing
- Parallel execution
- Message queues
- Distributed processing

without changing business rules.

---

# 🇪🇬 العربية (شرح)

## الهدف

توضح هذه الوثيقة كيفية تواصل Modules داخل منصة ODIN باستخدام الأحداث (Events) بدلاً من الاعتماد المباشر على بعضها.

---

# مبادئ الأحداث

تعتمد المنصة على:

- تقليل الترابط.
- استقلالية كل Module.
- عدم وجود منطق عمل داخل الحدث نفسه.
- عدم تعديل بيانات الحدث بعد إنشائه.

---

# دورة الحدث

```
تنفيذ عملية

↓

إنشاء Event

↓

Event Dispatcher

↓

الوحدات المهتمة

↓

تنفيذ المعالجة

↓

انتهاء
```

---

# أنواع الأحداث

## Domain Events

تعبر عن أحداث العمل المهمة.

مثل:

- إنشاء بطل.
- اكتمال بحث.
- ترقية مبنى.

---

## Integration Events

خاصة بالتكامل مع الخدمات الخارجية.

مثل:

- انتهاء OCR.
- استلام استجابة AI.
- استيراد صورة.

---

## System Events

أحداث خاصة بالمنصة نفسها.

مثل:

- تسجيل الدخول.
- إعادة تحميل الإعدادات.
- تنظيف Cache.

---

# القواعد

كل Event يجب أن:

- يصف حدثًا وقع بالفعل.
- يكون غير قابل للتعديل.
- يحتوي على البيانات الضرورية فقط.
- يمكن معالجته بشكل مستقل.

---

# معالجة الأحداث

كل Module يستمع فقط للأحداث التي يحتاجها.

ولا يعتمد على تفاصيل تنفيذ أي Module آخر.

---

# معالجة الأخطاء

إذا فشلت معالجة Event:

- يتم تسجيل الخطأ.
- لا تتوقف بقية الأحداث.
- تتم إعادة المحاولة بواسطة Infrastructure عند الحاجة.

---

# الأداء

يجب أن تدعم المنصة:

- التنفيذ غير المتزامن.
- المعالجة المتوازية.
- Message Queues.
- الأنظمة الموزعة.

دون التأثير على قواعد العمل.

---

# Document History

| Version | Date       | Changes         |
| ------- | ---------- | --------------- |
| 1.0.0   | 2026-07-14 | Initial version |

---

# Related Documents

- ARC-003 — Clean Architecture
- ARC-004 — Domain Model
- ARC-005 — Modules
- ARC-006 — Data Flow

---

# End of Document
