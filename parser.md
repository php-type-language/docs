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

## Visitors

To completely traverse a graph of all types, you can use the `TypeLang\Parser\Traverser` class. The traverser instance can accept several the `TypeLang\Parser\Traverser\VisitorInterface` implementation as a constructor argument.

Let's try to write a simple visitor that will display the names of all classes when entering each AST node.

```php
use TypeLang\Parser\Node\Node;
use TypeLang\Parser\Traverser;
use TypeLang\Parser\Traverser\Command;
use TypeLang\Parser\Traverser\Visitor;

$traverser = new Traverser([
    new class extends Visitor {
        public function enter(Node $node): ?Command
        {
            echo \sprintf(" - %s\n", $node::class);

            return null;
        }
    }
]);

$traverser->traverse([$result]);
```

You can see the following text as the output result:

```abap
 - TypeLang\Parser\Node\Stmt\NamedTypeNode
 - TypeLang\Parser\Node\Name
 - TypeLang\Parser\Node\Stmt\Template\ArgumentsListNode
 - TypeLang\Parser\Node\Stmt\Template\ArgumentNode
 - TypeLang\Parser\Node\Stmt\NamedTypeNode
 - TypeLang\Parser\Node\Name
 - TypeLang\Parser\Node\Stmt\Template\ArgumentNode
 - TypeLang\Parser\Node\Stmt\NamedTypeNode
 - TypeLang\Parser\Node\Name
 - TypeLang\Parser\Node\Stmt\Shape\FieldsListNode
 - TypeLang\Parser\Node\Stmt\Shape\NamedFieldNode
 - TypeLang\Parser\Node\Stmt\NamedTypeNode
 - TypeLang\Parser\Node\Name
 - TypeLang\Parser\Node\Stmt\Template\ArgumentsListNode
 - TypeLang\Parser\Node\Stmt\Template\ArgumentNode
 - TypeLang\Parser\Node\Literal\IntLiteralNode
 - TypeLang\Parser\Node\Stmt\Template\ArgumentNode
 - TypeLang\Parser\Node\Stmt\NamedTypeNode
 - TypeLang\Parser\Node\Name
 - TypeLang\Parser\Node\Identifier
```

### Visitor Commands

#### Skip Children Nodes

To skip any nodes when traversing, you can use the appropriate command `TypeLang\Parser\Traverser\Command::SKIP_CHILDREN`.

```php
use TypeLang\Parser\Node\Node;
use TypeLang\Parser\Node\Stmt\Template\ArgumentNode;
use TypeLang\Parser\Traverser;
use TypeLang\Parser\Traverser\Command;
use TypeLang\Parser\Traverser\Visitor;

$traverser = new Traverser([
    new class extends Visitor {
        public function enter(Node $node): ?Command
        {
            if ($node instanceof ArgumentNode) {
                return Command::SKIP_CHILDREN;
            }
            
            echo \sprintf(" - %s\n", $node::class);

            return null;
        }
    }
]);

$traverser->traverse([$result]);
```

### Predefined Visitors

#### Debugging

To easily debug the structure and output of the AST, you can use the `StreamDumperVisitor` visitor.

```php
use TypeLang\Parser\Traverser;

Traverser::new([new Traverser\StreamDumperVisitor()])
    ->traverse([$result]);
```

You can see the following text as the output result:

```abap
Stmt\NamedTypeNode
  Name(array)
  Stmt\Template\ArgumentsListNode
    Stmt\Template\ArgumentNode
      Stmt\NamedTypeNode
        Name(array-key)
    Stmt\Template\ArgumentNode
      Stmt\NamedTypeNode
        Name(object)
        Stmt\Shape\FieldsListNode(unsealed)
          Stmt\Shape\NamedFieldNode(required)
            Stmt\NamedTypeNode
              Name(int)
              Stmt\Template\ArgumentsListNode
                Stmt\Template\ArgumentNode
                  Literal\IntLiteralNode(0)
                Stmt\Template\ArgumentNode
                  Stmt\NamedTypeNode
                    Name(max)
            Identifier(key)
```

#### Node Finder

To search for the first suitable node for an instance of a class, you can use the `ClassNameMatcherVisitor` visitor.

```php
use TypeLang\Parser\Node\Name;
use TypeLang\Parser\Traverser;

Traverser::new([
    $finder = new Traverser\ClassNameMatcherVisitor(Name::class),
])
    ->traverse([$result]);
    
var_dump($finder->getFoundNode());
```

You can see the following text as the output result:

```php
TypeLang\Parser\Node\Name {
  +offset: 0
  -parts: array:1 [
    0 => TypeLang\Parser\Node\Identifier {
      +offset: 0
      +value: "array"
    }
  ]
}
```
