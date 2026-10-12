---
name: Codegen compatibility
description: Automatic Zod version detection can produce incompatible validation code.
---

Do not assume Orval's automatic Zod version detection matches the runtime resolved by the validation package.

**Why:** Adding an integer field produced Zod 4-only validation despite the package resolving Zod 3. Explicitly targeting the runtime version resolved the failure.

**How to apply:** When changing the Zod runtime or code generator, align the generator's target version and check regenerated integer validators before shipping.
