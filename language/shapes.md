---
description: Structural Types Description
---

# Shapes

Each **composite** type can be rigidly described by a structural type called a
"shape". A shape within the PHP language can be applied to any array or object
and contain either numeric or string keys.

{% hint style="warning" %}
Support for other types of keys, such as const mask (`Class::CONST_*)` is not
currently available.
{% endhint %}

* ✔️ **type{ some, any }** — Correct.
* ✔️ **type{ key: type, some: any }** — Correct.
* ✔️ **type{ some, }** — Correct: Trailing comma is allowed.
* ✔️ **type{}** — Correct: Empty shape is allowed.
* ❌ **type{ a, b: c }** —  Incorrect: Cannot mix numeric and string keys.
* ❌ **type{ ,type }** — Incorrect: Leading comma is not allowed.

### Unsealed Shapes

Unsealed (unclosed) shapes mean that the composite type can contain additional
fields beyond those described in the shape. Such types must be terminated with
the "`...`".

In addition, such shapes can describe types for values or for keys and values,
which are described after the ellipsis (`...`) char and contain
syntax [similar to generics](generic-types.md).

* ✔️ **type{ some, ... }** — Correct.
* ✔️ **type{ key: type, ... }** — Correct.
* ✔️ **type{ some, ..., }** — Correct: Trailing comma is allowed.
* ✔️ **type{ ... }** — Correct: Empty unsealed shape is allowed.
* ✔️ **type{ some, ...\<string> }** — Correct.
* ✔️ **type{ key: value, ...\<string, mixed> }** — Correct.
* ❌ **type{ a, b: c, ... }** —  Incorrect: Cannot mix numeric and string keys.

