---
description: Union And Intersection Types
---

# Logical Types

The Type Language, [like PHP](https://www.php.net/manual/en/language.types.type-system.php#language.types.type-system.composite), supports two types of composite (logical)
types: Union and Intersection. The ability to specify a _nullable_ type using a
separate expression is also supported.

### Union

Each union type is separated by a pipe character (`|`) and may contain any other
type definition.

* **`A | B | C`** — One of "A" _or_ "B" _or_ "C".

### Intersection

Each intersection type is separated by a ampersand character (`&`) and may
contain any other type definition.

* **`A & B & C`** — The "A" _and_ "B" _and_ "C".

### Nullable

Nullable type is a shortened alias for union type `T | null` and is written as `?T.`

* ✔️ **?example** — Correct.
* ❌ **example?** —  Incorrect: The question mark must be placed before the type name.
* ❌ **? | example** —  Incorrect: The question mark must be placed before the type name.
