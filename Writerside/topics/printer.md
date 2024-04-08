# Printer Component

## Installation

The printer package is responsible for visualizing the AST as string 
formats.

You can install it with:

```bash
composer require type-lang/printer
```

### Usage

Package supports two printer classes:

* `TypeLang\Printer\PrettyPrinter` — Used to display types as accurately as possible.
* `TypeLang\Printer\NativeTypePrinter` — Used to display types compatible with PHP.

Any printer implements the `TypeLang\Printer\PrinterInterface` interface, which 
contains an `print()` method for displaying ASTs as formatted strings.

<tabs>
<tab title="TypeLang\Printer\PrettyPrinter">

```php
$parser = new TypeLang\Parser\Parser();
$printer = new TypeLang\Printer\PrettyPrinter();

$result = $parser->parse(<<<'PHP'
    object{key: type, some: (list<T>|some<T>),
        ...<non-empty-string, int>}
    PHP);

echo $printer->print($result);
```

> Displays types as accurately as possible:
> ```php
> object{
>     key: type,
>     some: list<T>|some<T>,
>     ...<non-empty-string, int>
> }
> ```

</tab>
<tab title="TypeLang\Printer\NativeTypePrinter">

```php
$parser = new TypeLang\Parser\Parser();
$printer = new TypeLang\Printer\NativeTypePrinter();

$result = $parser->parse(<<<'PHP'
    object{key: type, some: (list<T>|some<T>),
        ...<non-empty-string, int>}
    PHP);

echo $printer->print($result);
```

> Displays types that are compatible with PHP:
> ```php
> object
> ```

</tab>
</tabs>

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
