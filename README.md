---
description: Parser API Usage Documentation
---

# Parser

A parser component is used to analyze and construct types AST with their information and grammar checking.

Make sure it is installed by running:

{% hint style="warning" %}
```bash
composer require phptl/parser
```
{% endhint %}

## Basic Usage

To create a parser instance, the `TypeLang\Parser\Parser` class is used. To run code analysis, you should use the `parse()` method.

The first argument of the `parse()` method corresponds to the source code data and can be of the following types:

* `resource` (stream)
* `string`
* Instance of `SplFileInfo` or `SplFileObject`
* Instance of `Phplrt\Contracts\Source\ReadableInterface`

```php
$parser = new TypeLang\Parser\Parser();

$result = $parser->parse(<<<'PHPTL'
    array<array-key, object{
      key: int<0, max>,
      ...
    }>
    PHPTL);

var_dump($result);
```
