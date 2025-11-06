# Custom Type Builder

To create a custom type, it may make sense to create a factory (i.e., a type 
builder). This ensures that the [type object](types.md) is created correctly 
and with the required constructor arguments.

The builder object compiles the type based on configuration rules and external 
parameters, so don't be afraid to move all type assembly logic into this class.

For a fully custom implementation of the type builder, one should implement 
the interface `TypeLang\Mapper\Type\Builder\TypeBuilderInterface`, which 
requires the implementation of two methods:
- `isSupported()` - Must return `bool(true)` if the specified type builder can 
  build [the `TypeInterface`](types.md)
- `build()` - Creates [a `TypeInterface` instance](types.md)

```php
use TypeLang\Mapper\Type\Parser\TypeParserInterface;
use TypeLang\Mapper\Type\Repository\TypeRepositoryInterface;
use TypeLang\Mapper\Type\TypeInterface;
use TypeLang\Parser\Node\Stmt\TypeStatement;

final readonly class CustomTypeBuilder implements TypeBuilderInterface
{
    public function isSupported(TypeStatement $statement): bool
    {
        // TODO: Should match the TypeStatement AST object
    }

    public function build(
        TypeStatement $statement,
        TypeRepositoryInterface $types,
        TypeParserInterface $parser,
    ): TypeInterface {
        // TODO: Should create the TypeInterface instance
    }
}
```

Additionally, don't forget that you can pass additional external
parameters to the type builder's constructor. For example,
a JSON Schema Validator, if you want to create a type that validates
a JSON inside a string, like: `json<"schema.json">`

```php
final readonly class JsonTypeBuilder implements TypeBuilderInterface
{
    public function __construct(
        private JsonSchemaValidator $validator,
    ) {}
}
```

<warning>
This is just an example, it is not necessary to pass the container 
to each type builder.
</warning>