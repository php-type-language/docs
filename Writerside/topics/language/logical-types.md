# Logical Types

The TypeLang, [like PHP](https://www.php.net/manual/en/language.types.type-system.php#language.types.type-system.composite), supports two types of composite (logical)
types: Union and Intersection. The ability to specify a _nullable_ type using a
separate expression is also supported.

### Union Type

Each union type is separated by a pipe character (`|`) and may contain any other
type definition.

* `A | B | C` — One of "A" **or** "B" **or** "C".

### Intersection Type

Each intersection type is separated by an ampersand character (`&`) and may
contain any other type definition.

* `A & B & C` — The "A" **and** "B" **and** "C".

### Nullable Type

Nullable type is a shortened alias for union type `T | null` and is written as `?T.`

<tabs>
<tab title="examples">

* ✔️ **?example** — Nullable "example" type.
* ✔️ **example | null** — Similar full type definition.
</tab>
<tab title="counterexamples">

* ❌ **example?** — The question mark must be placed before the type name.
* ❌ **? | example** — The question mark must be placed before the type name.
</tab>
</tabs>

