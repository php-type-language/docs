# Syntax Comparison

The language is defined by a syntax that is based on the grammar of popular
static code analysis tools: [PHPStan](https://phpstan.org/) and [Psalm](https://psalm.dev/).

- PHPStan: [https://phpstan.org/writing-php-code/phpdoc-types](https://phpstan.org/writing-php-code/phpdoc-types)
- Psalm: [https://psalm.dev/docs/annotating\_code/type\_syntax/atomic\_types/](https://psalm.dev/docs/annotating\_code/type\_syntax/atomic\_types/)
- phpDocumentor: [https://docs.phpdoc.org/guide/guides/types.html](https://docs.phpdoc.org/guide/guides/types.html)

> Below is a comparison list of all syntactic structures (grammar). The logical component 
> (the physical existence of the type) is not taken into account.

## Basic Types

Below is a list of simple, logical (composite) and other common types.

| Code Example                   | TypeLang | Psalm                                             | PHPStan                                                                                               |
|--------------------------------|----------|---------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| `ClassName`                    | ✔️       | ✔️                                                | ✔️                                                                                                    |
| `Non\Qualified\Name`           | ✔️       | ✔️                                                | ✔️                                                                                                    |
| `\Full\Qualified\Name`         | ✔️       | ✔️                                                | ✔️                                                                                                    |
| `type-name`                    | ✔️       | ✔️                                                | ✔️                                                                                                    |
| Union `T1 \| T2`               | ✔️       | ✔️                                                | ✔️                                                                                                    |
| Intersection `T1 & T2`         | ✔️       | ✔️                                                | ✔️                                                                                                    |
| Nullable `?T`                  | ✔️       | ✔️                                                | ✔️                                                                                                    |
| `OneTemplateParam<T>`          | ✔️       | ✔️                                                | ✔️                                                                                                    |
| `ManyTemplateParams<T, Y, Z>`  | ✔️       | ✔️                                                | ✔️                                                                                                    |
| `TrailingComma<T, Y,>`         | ✔️       | [❌ Not Supported](https://psalm.dev/r/866c32c49d) | ✔️                                                                                                    |
| `GenericModifier<out T, in Y>` | ✔️       | [❌ Not Supported](https://psalm.dev/r/80a466e81c) | ⚠️ [Call-site variance](https://phpstan.org/blog/whats-up-with-template-covariant#call-site-variance) |
| Legacy List `T[]`              | ✔️       | ✔️                                                | ✔️                                                                                                    |
| Legacy Nested List `T[][]`     | ✔️       | ✔️                                                | ✔️                                                                                                    |

## Conditional Types

Below is a list of conditional types.

| Code Example                              | TypeLang | Psalm                                             | PHPStan                                                                       |
|-------------------------------------------|----------|---------------------------------------------------|-------------------------------------------------------------------------------|
| Simple eq `T is A ? B : C`                | ✔️       | ✔️                                                | ✔️                                                                            |
| Simple neq `T is not A ? B : C`           | ✔️       | ✔️                                                | ✔️                                                                            |
| Referenced eq `$var is A ? B : C`         | ✔️       | ✔️                                                | ✔️                                                                            |
| Referenced neq `$var is not A ? B : C`    | ✔️       | ✔️                                                | ✔️                                                                            |
| Referenced inv eq `A is $var ? B : C`     | ✔️       | [❌ Not Supported](https://psalm.dev/r/c70473ea70) | [❌ Not Supported](https://phpstan.org/r/dc886f85-85b6-46b4-9a21-a37a90e6b0c9) |
| Referenced inv eq `A is not $var ? B : C` | ✔️       | [❌ Not Supported](https://psalm.dev/r/ebe7c053d6) | [❌ Not Supported](https://phpstan.org/r/0b7b5621-cec4-4967-be6f-3bca3c032df9) |

## Literal Types

Below is a list of literal types/lexemes.

| Code Example                                  | TypeLang                                     | Psalm                                             | PHPStan                                                                       |
|-----------------------------------------------|----------------------------------------------|---------------------------------------------------|-------------------------------------------------------------------------------|
| `true` or `false`                             | ✔️                                           | ✔️                                                | ✔️                                                                            |
| `null`                                        | ✔️                                           | ✔️                                                | ✔️                                                                            |
| Single-quoted string `'test'`                 | ✔️                                           | ✔️                                                | ✔️                                                                            |
| Double-quoted string `"test"`                 | ✔️                                           | ✔️                                                | ✔️                                                                            |
| Escape chars`"test\n"`                        | ✔️                                           | [❌ Not Supported](https://psalm.dev/r/a4763e39ea) | [❌ Not Supported](https://phpstan.org/r/ef392d41-f4e5-474c-8426-4ecdc583080a) |
| Hexadecimal chars `"\xDE\xAD"`                | ✔️                                           | [❌ Not Supported](https://psalm.dev/r/ce7cdf12ba) | [❌ Not Supported](https://phpstan.org/r/06c7f670-4db4-433b-b181-d3c8b7219980) |
| Unicode chars `"\u{1F60A}"`                   | ✔️                                           | [❌ Not Supported](https://psalm.dev/r/73412b8746) | [❌ Not Supported](https://phpstan.org/r/ebfdf3b6-e8e2-413d-adc5-a56ddd564bab) |
| Int `42`                                      | ✔️                                           | ✔️                                                | ✔️                                                                            |
| BigInt `PHP_INT_MAX + 1` or `PHP_INT_MIN - 1` | ⚠️ Round to `int` min/max, store as `string` | ⚠️ Cast to `float`                                | ⚠️ Cast to `float`                                                            |
| Binary Int `0b10`                             | ✔️                                           | [❌ Not Supported](https://psalm.dev/r/75794af443) | [❌ Not Supported](https://phpstan.org/r/79283030-f55e-4eb1-8b6b-2bdbc4083d30) |
| Octal Int `0o42`                              | ✔️                                           | [❌ Not Supported](https://psalm.dev/r/8552461d46) | [❌ Not Supported](https://phpstan.org/r/362869d4-5b65-441c-8708-f9f32993b560) |
| Legacy Octal Int `042`                        | ✔️                                           | [❌ Not Supported](https://psalm.dev/r/e4ab56c714) | [❌ Not Supported](https://phpstan.org/r/20f18b17-94c8-403c-8ad7-14058eb8a0ef) |
| Hexadecimal Int `0xDEAD`                      | ✔️                                           | [❌ Not Supported](https://psalm.dev/r/60176a85f4) | [❌ Not Supported](https://phpstan.org/r/f9fcaaa6-384e-4d58-b38c-8a51f091abf8) |
| Float `0.2`                                   | ✔️                                           | ✔️                                                | ✔️                                                                            |
| Suffixed Float `.2`                           | ✔️                                           | [❌ Not Supported](https://psalm.dev/r/816ae7db23) | ✔️                                                                            |
| Prefixed Float `2.`                           | ✔️                                           | [❌ Not Supported](https://psalm.dev/r/053808f77b) | ✔️                                                                            |
| Scientific `2e2`                              | ✔️                                           | [❌ Not Supported](https://psalm.dev/r/fbd87ab0b6) | ✔️                                                                            |
| Binary Scientific `0b10e2`                    | ❌                                            | ❌                                                 | ❌                                                                             |
| Octal Scientific `0o42e2`                     | ❌                                            | ❌                                                 | ❌                                                                             |
| Legacy Octal Scientific `042e2`               | ❌                                            | ❌                                                 | ❌                                                                             |
| Hexadecimal Scientific `0x42e2`               | ✔️                                           | ❌                                                 | ❌                                                                             |

## Shape Types

Below is a list of grammar of shaped types.

| Code Example                                   | TypeLang | Psalm                                                          | PHPStan                                                                       |
|------------------------------------------------|----------|----------------------------------------------------------------|-------------------------------------------------------------------------------|
| Explicit Shape `Type{key:val}`                 | ✔️       | [⚠️ only `array` and `object`](https://psalm.dev/r/4ec6feecc1) | ✔️                                                                            |
| Implicit Shape `Type{val}`                     | ✔️       | [⚠️ only `array` and `object`](https://psalm.dev/r/932713f109) | ✔️                                                                            |
| Optional Shape Key `array{key?: int}`          | ✔️       | ✔️                                                             | ✔️                                                                            |
| Empty Shape `array{}`                          | ✔️       | ✔️                                                             | ✔️                                                                            |
| Unsealed Shape `array{...}`                    | ✔️       | ✔️                                                             | ✔️                                                                            |
| Explicit Unsealed Shape `array{key: val, ...}` | ✔️       | [⚠️ only `array` and `object`](https://psalm.dev/r/00688c401a) | ✔️                                                                            |
| Implicit Unsealed Shape `array{val, ...}`      | ✔️       | [⚠️ only `array` and `object`](https://psalm.dev/r/d346e9704b) | ✔️                                                                            |
| Typed Shape `array{...<string>}`               | ✔️       | ✔️                                                             | [❌ Not Supported](https://phpstan.org/r/401619e4-36a2-4c30-94eb-16c40a62c7ad) |
| `TrailingComma{value,}`                        | ✔️       | [❌ Not Supported](https://psalm.dev/r/d63771c22a)              | ✔️                                                                            |

## Callables Types

Below is a list of grammar of callable (function) types.

| Code Example                                                          | TypeLang          | Psalm                                              | PHPStan    |
|-----------------------------------------------------------------------|-------------------|----------------------------------------------------|------------|
| Simple Func `callable()`                                              | ✔️                | ✔️                                                 | ✔️         |
| Typed Func `callable(): mixed`                                        | ✔️                | ✔️                                                 | ✔️         |
| Func Args `callable(T)`                                               | ✔️                | ✔️                                                 | ✔️         |
| Optional Arg `callable(T=)`                                           | ✔️                | ✔️                                                 | ✔️         |
| Named Arg `callable(T $name)`                                         | ✔️                | ✔️                                                 | ✔️         |
| Optional Named Arg `callable(T $name=)`                               | ✔️                | [❌ Internal Error](https://psalm.dev/r/9ae58ed797) | ✔️         |
| Suffixed Variadic Arg `callable(T...)`                                | ✔️                | ✔️                                                 | ✔️         |
| Prefixed Variadic Arg `callable(...T)`                                | ✔️                | ✔️                                                 | ✔️         |
| Prefixed + Suffixed Variadic Named Arg `callable(...T ...$name)`      | ✔️ Syntax Error   | [❌ Internal Error](https://psalm.dev/r/4a6476fff6) | ❌ No Error |
| Optional Variadic Arg `callable(...T=)`                               | ✔️ Semantic Error | ✔️ Semantic Error                                  | ❌ No Error |
| Suffixed Variadic Named Arg `callable(T ...$arg)`                     | ✔️                | ✔️                                                 | ✔️         |
| Prefixed Variadic Named Arg `callable(...T $arg)`                     | ✔️                | [❌ Internal Error](https://psalm.dev/r/2dac434b3f) | ✔️         |
| Reference Arg `callable(T&)`                                          | ✔️                | [❌ Not Supported](https://psalm.dev/r/bb604c4219)  | ✔️         |
| Optional Reference Arg `callable(T&=)`                                | ✔️                | [❌ Not Supported](https://psalm.dev/r/fc3041a846)  | ✔️         |
| Optional Reference Named Arg `callable(T &$name=)`                    | ✔️                | [❌ Not Supported](https://psalm.dev/r/14dcf8634f)  | ✔️         |
| Reference Named Variadic Arg `callable(T &...$name)`                  | ✔️                | [❌ Not Supported](https://psalm.dev/r/7a64356034)  | ✔️         |
| Reference Named Prefix Variadic Arg `callable(...T &$name)`           | ✔️                | [❌ Not Supported](https://psalm.dev/r/bf7dcbc9b4)  | ✔️         |
| Optional Reference Named Variadic Arg `callable(T &...$name=)`        | ✔️ Semantic Error | ✔️ Semantic Error                                  | ❌ No Error |
| Optional Reference Named Prefix Variadic Arg `callable(...T &$name=)` | ✔️ Semantic Error | ✔️ Semantic Error                                  | ❌ No Error |
