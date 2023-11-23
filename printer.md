---
description: Printer API Usage Documentation
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: false
  pagination:
    visible: true
---

# Printer

The printer package is responsible for visualizing the AST as string formats.

Make sure it is installed by running:

{% hint style="warning" %}
```bash
composer require type-lang/printer
```
{% endhint %}

This package supports two rendering classes:

* `TypeLang\Printer\PrettyPrinter` — Used to display types as accurately as possible.
* `TypeLang\Printer\NativeTypePrinter` — Used to display types compatible with PHP.

### Usage

```php
$parser = new TypeLang\Parser\Parser();
$pretty = new TypeLang\Printer\PrettyPrinter();
$native = new TypeLang\Printer\NativeTypePrinter();

$expected = $parser->parse(<<<'PHP'
    object{key: type, some: list<T>|some<T>, ...<non-empty-string, int>}
    PHP);

echo $pretty->print($expected);
// Expected Pretty Printer Output:
//
// > object{
// >     key: type,
// >     some: list<T>|some<T>,
// >     ...<non-empty-string, int>
// > }

echo $native->print($expected);
// Expected Native Printer Output:
//
// > object
```

#### Callables

```php
$expected = $parser->parse(<<<'PHP'
    callable(...A &$a)|callable(B &...$b)
    PHP);

echo $pretty->print($expected);
// Expected Pretty Printer Output:
//
// > callable(A &...$a)|callable(B &...$b)

echo $native->print($expected);
// Expected Native Printer Output:
//
// > callable
```

#### Conditional

```php
$expected = $parser->parse(<<<'PHP'
    $arg is null ? non-empty-string : int<0, max>
    PHP);

echo $pretty->print($expected);
// Expected Pretty Printer Output:
//
// > ($arg is null ? non-empty-string : int<0, max>)

echo $native->print($expected);
// Expected Native Printer Output:
//
// > string|int
```
