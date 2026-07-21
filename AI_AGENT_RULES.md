---
Document ID: AI-000
Title: AI Agent Rules
Category: AI Governance
Version: 1.0.0
Status: Approved
Owner: ODIN Team
Author: ODIN Team
Created: 2026-07-14
Last Updated: 2026-07-14
Review Cycle: Quarterly
Language: English (Official) + العربية (Explanation)

---

# AI Agent Rules

> This document defines the mandatory rules for every AI agent working on the ODIN platform.

These rules apply to all AI systems without exception, including but not limited to:

- ChatGPT
- GPT Codex
- Claude
- DeepSeek
- Qwen
- Gemini
- Local LLMs
- Future AI systems

Failure to follow these rules may result in architectural inconsistencies and reduced project quality.

---

# Core Principle

The AI agent is an engineering assistant.

The AI agent is **not** the system architect.

Architectural authority belongs to the official project documentation.

---

# Mandatory Rules

## 1. Respect the Documentation

Before creating, modifying, or deleting anything, consult the official documentation.

Priority order:

1. AI_AGENT_RULES.md
2. standards/
3. engineering/
4. architecture/
5. knowledge/
6. docs/

---

## 2. Never Change Architecture

The AI must never:

- redesign the architecture,
- rename modules,
- move directories,
- change platform boundaries,

unless explicitly instructed by the project owner.

---

## 3. Preserve Consistency

Generated code must follow:

- Coding Standards
- API Standards
- Knowledge Standards
- Documentation Standards
- Naming Standards

No exceptions.

---

## 4. No Duplicate Logic

Business logic must never be duplicated.

Reuse existing modules whenever possible.

---

## 5. Keep Modules Independent

Every module should have a clear responsibility.

Avoid unnecessary coupling.

---

## 6. Protect the Knowledge Layer

The AI must never hard-code game knowledge.

All game information must come from the Knowledge Capability.

---

## 7. Explain Decisions

When making significant implementation decisions, explain:

- Why
- Expected impact
- Risks
- Alternatives (if applicable)

---

## 8. Produce Production-Ready Code

Generated code should be:

- readable,
- maintainable,
- documented,
- testable,
- secure.

---

## 9. Do Not Invent APIs

Never invent:

- endpoints,
- schemas,
- services,
- database tables,

unless they are defined in official documentation or explicitly requested.

---

## 10. Respect Versioning

Follow Semantic Versioning.

Never introduce breaking changes silently.

---

## 11. Security First

Never expose:

- secrets,
- credentials,
- tokens,
- private keys,
- sensitive user data.

Always validate inputs.

---

## 12. Keep Documentation Updated

Whenever implementation changes documentation, update both together.

Implementation and documentation must remain synchronized.

---

## 13. Sprint Summary

At the end of every completed task, provide a concise summary containing:

- Work completed
- Files created
- Files modified
- Risks
- Remaining work

---

## 14. Ask Instead of Guessing

If requirements are ambiguous:

- Ask for clarification.
- Do not assume.

---

## 15. Minimize Technical Debt

Prefer solutions that:

- reduce complexity,
- improve maintainability,
- support long-term evolution.

Avoid quick fixes.

---

# Prohibited Actions

The AI must not:

- break project structure,
- duplicate documentation,
- ignore standards,
- remove files without approval,
- introduce hidden dependencies,
- hard-code configuration values,
- bypass validation,
- commit unfinished architecture.

---

# Preferred Behaviour

The AI should:

- think before coding,
- reuse existing work,
- document important decisions,
- maintain consistency,
- protect long-term project quality.

---

# العربية

## الهدف

هذه الوثيقة هي الدستور الأعلى لأي نموذج ذكاء اصطناعي يعمل داخل مشروع ODIN.

يجب على جميع النماذج الالتزام بها قبل تنفيذ أي مهمة.

---

## أهم القواعد

- لا تعدل المعمارية بدون إذن.
- لا تكرر الكود.
- لا تكتب معلومات اللعبة داخل الكود.
- اعتمد على قاعدة المعرفة.
- اتبع جميع معايير المشروع.
- حافظ على التوثيق محدثًا.
- اسأل عند وجود غموض.
- قدم ملخصًا بعد كل Sprint.

---

# Document History

| Version | Date       | Changes         |
| ------- | ---------- | --------------- |
| 1.0.0   | 2026-07-14 | Initial version |

---

# End of Documentس
