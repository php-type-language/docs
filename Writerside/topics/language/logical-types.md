# Logical Types

The TypeLang, [like PHP](https://www.php.net/manual/en/language.types.type-system.php#language.types.type-system.composite), supports two types of composite (logical)
types: Union and Intersection. The ability to specify a _nullable_ type using a
separate expression is also supported.

### Union Type

Each union type is separated by a pipe character (`|`) and may contain any other
type definition.

> One of `A` **OR** `B` **OR** `C`.
> ```typescript
> A | B | C
> ```
> {style="note"}

### Intersection Type

Each intersection type is separated by an ampersand character (`&`) and may
contain any other type definition.

> All of `A` **AND** `B` **AND** `C`.
> ```typescript
> A & B & C
> ```
> {style="note"}

### Nullable Type

Nullable type is a shortened alias for union type `T | null` and is written as `?T.`

<tabs>
<tab title="examples">

> Description of nullable type `Example` (equivalent to `Example | null`)
> ```typescript
> ?Example
> ```
> {style="note"}

</tab>
<tab title="counterexamples">

> The question mark must be placed before the type name.
> ```typescript
> Example?
> 
> // Syntax error, unexpected "?"
> ```
> {style="warning"}
</tab>
</tabs>

