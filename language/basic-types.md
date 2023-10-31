---
description: Atomic Types
---

# Basic Types

The parser does not impose restrictions on type naming. The type name must begin with the characters `[a-zA-Z\x80-\xff]` (any letter[^1]) and `_` (underscore) and can contain any characters within the limit `[a-zA-Z0-9\x80-\xff]` (any letter[^2]), as well as the characters `_` (underscore) and `-` (dash).

> For our purposes here, a **letter** is a-z, A-Z, and the bytes from 128 through 255 (`0x80-0xff`).

In this case, the only difference from [the PHP grammar](https://www.php.net/manual/en/language.variables.basics.php) is that a **dash** (`-`) symbol is allowed in the middle of the name.

In addition, it is worth noting that the case-insensitive names `true`, `false` and `null` are registered PHP literals, so their use as a custom type name is **unacceptable**.

#### Examples

* ✔️ **example** — Сorrect.
* ✔️ **example-type** — Сorrect.
* ✔️ **example-42** — Сorrect.
* ✔️ **ExampleTypeName** — Сorrect.
* ✔️ **true-type** — Сorrect.
* ✔️ **false-type** — Сorrect.
* ❌ **true** —  Incorrect: Reserved name.
* ❌ **TRUE** — Incorrect: Reserved name.
* ❌ **42type** — Incorrect: Starts with a number.
* ❌ **-type** — Incorrect: Starts with a dash symbol.

## Namespace

Each name can contain a namespace symbol (`\` — backslash), which is [similar to that in PHP](https://www.php.net/manual/en/language.namespaces.rationale.php). The separator can be located either in the middle or at the beginning of any type name. End position is not allowed.

The namespace delimiter can be used in conjunction with keywords such as `true`, `false`, or `null` to explicitly indicate a type reference.

#### Examples

* ✔️ **example\name** — Сorrect.
* ✔️ **\prefixed\example\name** — Сorrect.
* ✔️ **\true**— Сorrect.
* ✔️ **\true\null** — Сorrect.
* ❌ **true\null** —  Incorrect: Reserved name.
* ❌ **example\name\\** — Incorrect: Trailing delimiter.
* ❌ **example\2type** — Incorrect: Starts with a number.

[^1]: see the summary below

[^2]: see the summary below
