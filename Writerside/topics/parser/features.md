# Feature Toggling

<primary-label ref="parser-component"/>
<show-structure for="chapter" depth="2"/>

You can enable or disable a set of parser features if your task requires only
partial support of the functionality. Such a feature allows you to conveniently
implement more strict functionality.

> One of the feature flags is the ["tolerant" mode](tolerant-mode.md),
> but the logic and meaning of its operation is more complex than simply
> disabling some feature.
> {style="note"}

## Literals

[Literals are concrete values](literal-types.md) such as `42`, `0xDEAD`, 
`"string"`, `0.23`, etc.

To enable or disable literals, use the `literals: bool` flag.

```php
$parser = new TypeLang\Parser\Parser(
    literals: false,
);

$result = $parser->parse('42');
```

```
Literal values not allowed in "42"
```
{collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}

## Generics

To enable or disable template arguments (generics), use
the `generics: bool` flag.

```php
$parser = new TypeLang\Parser\Parser(
    generics: false,
);

$result = $parser->parse('Example<T>');
```

```
Template arguments not allowed in "Example<T>"
```
{collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}

## Hints

To enable or disable template argument hints (argument modifiers), use the 
`hints: bool` flag.

```php
$parser = new TypeLang\Parser\Parser(
    hints: false,
);

$result = $parser->parse('Example<out T, in U>');
```

```
Template argument hints not allowed in "Example<out T, in U>"
```
{collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}

## Lists

To enable or disable type lists (legacy/short syntax for iterable types), use
the `list: bool` flag.

```php
$parser = new TypeLang\Parser\Parser(
    list: false,
);

$result = $parser->parse('Example[]');
```

```
Square bracket list types not allowed in "Example[]"
```
{collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}

## Callables

To enable or disable callables (delegates), use the `callables: bool` flag.

```php
$parser = new TypeLang\Parser\Parser(
    callables: false,
);

$result = $parser->parse('fn()');
```

```
Callable types not allowed in "fn()"
```
{collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}

## Shapes

To enable or disable shape fields, use the `shapes: bool` flag.

```php
$parser = new TypeLang\Parser\Parser(
    shapes: false,
);

$result = $parser->parse(<<<'PHP'
    array{
        foo: T,
        ...
    }
    PHP);
```

```
Shape fields not allowed in "array{\n foo: T,\n ...\n}"
```
{collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}

## Unions

To enable or disable union types, use the `union: bool` flag.

```php
$parser = new TypeLang\Parser\Parser(
    union: false,
);

$result = $parser->parse('T|U');
```

```
Union types not allowed in "T|U"
```
{collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}

## Intersections

To enable or disable union types, use the `intersection: bool` flag.

```php
$parser = new TypeLang\Parser\Parser(
    intersection: false,
);

$result = $parser->parse('T&U');
```

```
Intersection types not allowed in "T&U"
```
{collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}

## Conditional

To enable or disable conditional types (expressions), use the `conditional: bool` flag.

```php
$parser = new TypeLang\Parser\Parser(
    conditional: false,
);

$result = $parser->parse('T is U ? 23 : 42');
```

```
Conditional expressions not allowed in "T is U ? 23 : 42"
```
{collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}

## Attributes

To enable or disable attributes, use the `attributes: bool` flag.

```php
$parser = new TypeLang\Parser\Parser(
    attributes: false,
);

$result = $parser->parse(<<<'PHP'
    array{
        #[name("new_name"), skip_when_empty]
        oldName: int,
    }
    PHP);
```

```
Shape field attributes not allowed in "array{\n #[name("new_name"),
skip_when_empt…" (19+) on line 2 at column 5
```
{collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}
