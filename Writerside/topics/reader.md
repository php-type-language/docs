# Reader Component

<show-structure for="chapter" depth="2"/>

This package provides a set of methods for reading PHP metadata and 
converting it into the TypeLang AST Nodes.

## Installation

<tldr>
    <p>
        Via <a href="https://getcomposer.org/doc/01-basic-usage.md#installing-dependencies">Composer</a>:
        <code lang="bash">composer require type-lang/reader</code>
    </p>
</tldr>

**Requirements:**
* `PHP >= 8.1`

## Usage

Package supports one reader class.

<deflist>
    <def title="TypeLang\Reader\ReflectionReader">
        Used to read types metadata from reflection objects.
    </def>
</deflist>

Any reader implements the `TypeLang\Reader\ReaderInterface` interface, which 
contains several methods:

- [`findConstantType(ReflectionClassConstant): ?TypeStatement`](#constants)
- [`findPropertyType(ReflectionProperty): ?TypeStatement`](#properties)
- [`findFunctionType(ReflectionFunctionAbstract): ?TypeStatement`](#functions)
- [`findParameterType(ReflectionParameter): ?TypeStatement`](#parameters)

### Constants

Method `findConstantType()` is used to read types from constants.

```php
class Example
{
    public const int EXAMPLE = 0xDEAD_BEEF;
}

$reader = new \TypeLang\Reader\ReflectionReader();

$node = $reader->findConstantType(
    constant: new \ReflectionClassConstant(
        class: Example::class,
        constant: 'EXAMPLE',
    ),
);

var_dump($node);
```

```php
TypeLang\Parser\Node\Stmt\NamedTypeNode {
  +offset: 0
  +name: TypeLang\Parser\Node\Name {
    +offset: 0
    -parts: array:1 [
      0 => TypeLang\Parser\Node\Identifier {
        +offset: 0
        +value: "int"
      }
    ]
  }
  +arguments: null
  +fields: null
}
```
{collapsible="true" collapsed-title="Result"}

### Properties

Method `findPropertyType()` is used to read types from class properties.

```php
class Example
{
    public readonly string $test;
}

$reader = new \TypeLang\Reader\ReflectionReader();

$node = $reader->findPropertyType(
    property: new \ReflectionProperty(
        class: Example::class,
        property: 'test',
    ),
);

var_dump($node);
```

```php
TypeLang\Parser\Node\Stmt\NamedTypeNode {
  +offset: 0
  +name: TypeLang\Parser\Node\Name {
    +offset: 0
    -parts: array:1 [
      0 => TypeLang\Parser\Node\Identifier {
        +offset: 0
        +value: "string"
      }
    ]
  }
  +arguments: null
  +fields: null
}
```
{collapsible="true" collapsed-title="Result"}

### Functions

Method `findFunctionType()` is used to read return types from
functions and class methods.

```php
$example = function(): void {};

$reader = new \TypeLang\Reader\ReflectionReader();

$node = $reader->findFunctionType(
    function: new \ReflectionFunction($example),
);

var_dump($node);
```

```php
TypeLang\Parser\Node\Stmt\NamedTypeNode {
  +offset: 0
  +name: TypeLang\Parser\Node\Name {
    +offset: 0
    -parts: array:1 [
      0 => TypeLang\Parser\Node\Identifier {
        +offset: 0
        +value: "void"
      }
    ]
  }
  +arguments: null
  +fields: null
}
```
{collapsible="true" collapsed-title="Result"}

### Parameters

Method `findParameterType()` is used to read types from
function and method parameters.

```php
$example = function(bool $param) {};

$reader = new \TypeLang\Reader\ReflectionReader();

$node = $reader->findParameterType(
    parameter: new \ReflectionParameter(
        function: $example,
        param: 'param',
    ),
);

var_dump($node);
```

```php
TypeLang\Parser\Node\Stmt\NamedTypeNode {
  +offset: 0
  +name: TypeLang\Parser\Node\Name {
    +offset: 0
    -parts: array:1 [
      0 => TypeLang\Parser\Node\Identifier {
        +offset: 0
        +value: "bool"
      }
    ]
  }
  +arguments: null
  +fields: null
}
```
{collapsible="true" collapsed-title="Result"}

## Complex Example

Complete example for reading and printing types from an entire class.

> The [`type-lang/printer` component](printer.md) is used to print the types.

```php
$class = new \ReflectionClass(Path\To\Example::class);
$printer = new \TypeLang\Printer\PrettyPrinter();
$converter = new \TypeLang\Reader\ReflectionReader();


// Dump all constants with its types.
foreach ($class->getReflectionConstants() as $constant) {
    // Creates type node AST from a constant's type.
    if ($type = $converter->findConstantType($constant)) {
        echo vsprintf("const %s has type %s\n", [
            $constant->name,
            $printer->print($type),
        ]);
    }
}


// Dump all properties with its types.
foreach ($class->getProperties() as $property) {
    // Creates type node AST from a property's type.
    if ($type = $converter->findPropertyType($property)) {
        echo vsprintf("property %s has type %s\n", [
            $property->name,
            $printer->print($type),
        ]);
    }
}


// Dump all methods with its types.
foreach ($class->getMethods() as $method) {
    // Creates type node AST from any function's return type.
    if ($type = $converter->findFunctionType($method)) {
        echo vsprintf("function %s has type %s\n", [
            $method->name,
            $printer->print($type),
        ]);
    }


    // Creates type node AST from a parameter's type.
    foreach ($method->getParameters() as $parameter) {
        if ($type = $converter->findParameterType($parameter)) {
            echo vsprintf("parameter %s has type %s\n", [
                $parameter->name,
                $printer->print($type),
            ]);
        }
    }
}
```