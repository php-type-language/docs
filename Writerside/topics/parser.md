# Parser Component

<show-structure for="chapter" depth="2"/>

A parser component is used to analyze and construct types AST with their
information and grammar checking.

## Installation

<tldr>
    <p>
        Via <a href="https://getcomposer.org/doc/01-basic-usage.md#installing-dependencies">Composer</a>:
        <code lang="bash">composer require type-lang/parser</code>
    </p>
</tldr>

**Requirements:**
* `PHP >= 8.1`
* `ext-pcre`
* `ext-mbstring` <sup>optional</sup>

## Usage

To create a parser instance, the `TypeLang\Parser\Parser` class is used.
To run code analysis, you should use the `parse()` method.

<deflist>
<def title="Method signature">

The first argument of the `parse()` method corresponds to the source code data
and can be of the following types:

<tabs>
  <tab title="string">

  ```php
  $result = $parser->parse(<<<'CODE'
      object{ key?: int<0, max> }
  CODE);
  ```
  </tab>
  <tab title="resource (stream)">
  
  ```php
  $result = $parser->parse(
      fopen(__DIR__ . '/source.txt', 'rb'),
  );
  ```
  </tab>
  <tab title="SplFileInfo">

  ```php
  $result = $parser->parse(
      new SplFileInfo(__DIR__ . '/source.txt'),
  );
  ```
  </tab>
  <tab title="ReadableInterface">

  ```php
  $result = $parser->parse(
      Phplrt\Source\File::fromPathname(__DIR__ . '/source.txt'),
  );
  ```
  </tab>
</tabs>
</def>
</deflist>

```php
$parser = new TypeLang\Parser\Parser();

$result = $parser->parse(<<<'PHP'
    array<array-key, object{
      key: int<0, max>,
      ...
    }>
    PHP);

var_dump($result);
```
{prompt="1"}


```php
TypeLang\Parser\Node\Stmt\NamedTypeNode {
  +offset: 0
  +name: TypeLang\Parser\Node\Name {
    +offset: 0
    -parts: array:1 [
      0 => TypeLang\Parser\Node\Identifier {
        +offset: 0
        +value: "array"
      }
    ]
  }
  +arguments: TypeLang\Parser\Node\Stmt\Template\ArgumentsListNode {
    +offset: 5
    +items: array:2 [
      0 => TypeLang\Parser\Node\Stmt\Template\ArgumentNode {
        +offset: 6
        +value: TypeLang\Parser\Node\Stmt\NamedTypeNode {
          +offset: 6
          +name: TypeLang\Parser\Node\Name {
            +offset: 6
            -parts: array:1 [
              0 => TypeLang\Parser\Node\Identifier {
                +offset: 6
                +value: "array-key"
              }
            ]
          }
          +arguments: null
          +fields: null
        }
      }
      1 => TypeLang\Parser\Node\Stmt\Template\ArgumentNode {
        +offset: 17
        +value: TypeLang\Parser\Node\Stmt\NamedTypeNode {
          +offset: 17
          +name: TypeLang\Parser\Node\Name {
            +offset: 17
            -parts: array:1 [
              0 => TypeLang\Parser\Node\Identifier {
                +offset: 17
                +value: "object"
              }
            ]
          }
          +arguments: null
          +fields: TypeLang\Parser\Node\Stmt\Shape\FieldsListNode {
            +offset: 27
            +items: array:1 [
              0 => TypeLang\Parser\Node\Stmt\Shape\NamedFieldNode {
                +offset: 27
                +type: TypeLang\Parser\Node\Stmt\NamedTypeNode {
                  +offset: 32
                  +name: TypeLang\Parser\Node\Name {
                    +offset: 32
                    -parts: array:1 [
                      0 => TypeLang\Parser\Node\Identifier {
                        +offset: 32
                        +value: "int"
                      }
                    ]
                  }
                  +arguments: TypeLang\Parser\Node\Stmt\Template\ArgumentsListNode {
                    +offset: 35
                    +items: array:2 [
                      0 => TypeLang\Parser\Node\Stmt\Template\ArgumentNode {
                        +offset: 36
                        +value: TypeLang\Parser\Node\Literal\IntLiteralNode {
                          +offset: 36
                          +raw: "0"
                          +value: 0
                        }
                      }
                      1 => TypeLang\Parser\Node\Stmt\Template\ArgumentNode {
                        +offset: 39
                        +value: TypeLang\Parser\Node\Stmt\NamedTypeNode {
                          +offset: 39
                          +name: TypeLang\Parser\Node\Name {
                            +offset: 39
                            -parts: array:1 [
                              0 => TypeLang\Parser\Node\Identifier {
                                +offset: 39
                                +value: "max"
                              }
                            ]
                          }
                          +arguments: null
                          +fields: null
                        }
                      }
                    ]
                  }
                  +fields: null
                }
                +optional: false
                +key: TypeLang\Parser\Node\Identifier {
                  +offset: 27
                  +value: "key"
                }
              }
            ]
            +sealed: false
          }
        }
      }
    ]
  }
  +fields: null
}
```
{collapsible="true" collapsed-title="Result"}