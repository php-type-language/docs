# PHPDoc Reader

<link-summary>
Reads metadata using PHPDoc annotations
</link-summary>

<tldr>
    <p>
        Class:
        <code>TypeLang\Mapper\Mapping\Reader\PhpDocReader</code>
    </p>
    Arguments:
    <list>
        <li>
            (optional) <code>$paramTagName</code>:
            <code>non-empty-string</code>
        </li>
        <li>
            (optional) <code>$varTagName</code>:
            <code>non-empty-string</code>
        </li>
        <li>
            (optional) <code>$returnTagName</code>:
            <code>non-empty-string</code>
        </li>
        <li>
            (optional) <code>$delegate</code>:
            <code>TypeLang\Mapper\Mapping\Reader\ReaderInterface</code>
        </li>
    </list>
</tldr>

This reader is used to read PHPDoc annotations to construct metadata.

To use it, you need to install an additional package, which provides the 
ability to read docblocks:

```shell
composer require type-lang/phpdoc type-lang/phpdoc-standard-tags
```

By default, it supports the following annotations, which directly or 
indirectly describe types for properties:

- `@param` - The annotation name can be overridden by specifying the
  `$paramTagName` constructor argument explicitly
- `@var` - The annotation name can be overridden by specifying the 
  `$varTagName` constructor argument explicitly
- `@return` - The annotation name can be overridden by specifying the
  `$returnTagName` constructor argument explicitly

To create this reader, it is enough to instantiate `PhpDocReader` class:

```php
use TypeLang\Mapper\Mapping\Reader\PhpDocReader;

$reader = new PhpDocReader();
```

<tip>
You can find more information about <b>metadata configuration</b> rules
in the <a href="meta-configuration.md">"metadata configuration" section</a>.
</tip>

If you need to supplement metadata from another reader, you should
specify this explicitly using `$delegate` argument:

```php
use TypeLang\Mapper\Mapping\Reader\PhpDocReader;

$reader = new PhpDocReader(
    delegate: new AnotherExampleReader(),
);
```

In addition, you can create fallback rules for annotations in the same way: 
"first with a prefix, then the regular name"

To create this reader, it is enough to instantiate `PhpDocReader` class:

```php
use TypeLang\Mapper\Mapping\Reader\PhpDocReader;

// First, we read all annotations 
// with the "map-" prefix.
$reader = new PhpDocReader(
    paramTagName: 'map-param',
    varTagName: 'map-var',
    returnTagName: 'map-return',
    // Then everyone else
    delegate: new PhpDocReader(
        // Then we can turn to another reader,
        // for example, reflection
        delegate: ...
    ),
);
```