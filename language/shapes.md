---
description: Structural Types Description
---

# Shapes

Each **composite** type can be rigidly described by a structural type called a "shape". A shape within the PHP language can be applied to any array or object and contain either numeric or string keys.

{% hint style="warning" %}
Support for other types of keys, such as const mask (`Class::CONST_*)` is not currently available.
{% endhint %}

* ✔️ **type{ some, any }** — Сorrect.
* ✔️ **type{ key: type, some: any }** — Сorrect.
* ✔️ type{ some, } — Сorrect: Trailing comma is allowed.
* ✔️ type{} — Сorrect: Empty shape is allowed.
* ❌ type{ a, b: c } —  Incorrect: Cannot mix numeric and string keys.
* ❌ **type{ ,type }** — Incorrect: Leading comma is not allowed.

### Unsealed Shapes

Unsealed (unclosed) shapes mean that the composite type can contain additional fields beyond those described in the shape. Such types must be terminated with the "`...`".

In addition, such shapes can describe types for values or for keys and values, which are described after the ellipsis (`...`) char and contain syntax [similar to generics](generic-types.md).

* ✔️ **type{ some, ... }** — Сorrect.
* ✔️ **type{ key: type, ... }** — Сorrect.
* ✔️ type{ some, ..., } — Сorrect: Trailing comma is allowed.
* ✔️ type{ ... } — Сorrect: Empty unseald shape is allowed.
* ✔️ **type{ some, ...\<string> }** — Сorrect.
* ✔️ **type{ key: value, ...\<string, mixed> }** — Сorrect.
* ❌ type{ a, b: c, ... } —  Incorrect: Cannot mix numeric and string keys.

