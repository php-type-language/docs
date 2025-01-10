# Logical Types

<show-structure for="chapter" depth="2"/>

The TypeLang, [like PHP](https://www.php.net/manual/en/language.types.type-system.php#language.types.type-system.composite), supports two types of composite (logical) types:
Union and Intersection. The ability to specify a _nullable_ type using a 
separate expression is also supported.

### Union Types

Each union type is separated by a pipe character (`|`) and may contain any other
type definition.

> `A` **OR** `B` **OR** `C`.
> ```typescript
> A | B | C
> ```

### Intersection Types

Each intersection type is separated by an ampersand character (`&`) and may
contain any other type definition.

> `A` **AND** `B` **AND** `C`.
> ```typescript
> A & B & C
> ```

### Nullable Types

Nullable type is a shortened alias for union type `T | null` 
and is written as `?T.`

<tabs>
<tab title="Examples">

> Description of nullable type `Example` (equivalent to `Example | null`)
> ```typescript
> ?Example
> ```

</tab>
<tab title="Counterexamples">

> The question mark must be placed before the type name.
> ```typescript
> Example?
> ```
> ```
> Syntax error, unexpected "?"
> ```
> {collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}
> {style="warning"}
</tab>
</tabs>

### Parentheses

Parentheses can be used to disambiguate types.

> `A` **AND** `B` _or_ `C`
> ```typescript
> (A & B) | C
> ```
>
> `A` **AND** `C` _or_ `B` **AND** `C`
> ```typescript
> (A | B) & C
> ```
