---
description: Syntax Comparison Table
---

# Comparison Table

Below is a comparison list of all syntactic structures (grammar). The logical component (the physical existence of the type) is not taken into account.

### Basic And Common Types

Below is a list of simple, logical (composite) and other common types.

| Code Example                  | PHP Type Language | Psalm                                     | PHPStan |
| ----------------------------- | ----------------- | ----------------------------------------- | ------- |
| `ClassName`                   | ✔️                | ✔️                                        | ✔️      |
| `Non\Qualified\Name`          | ✔️                | ✔️                                        | ✔️      |
| `\Full\Qualified\Name`        | ✔️                | ✔️                                        | ✔️      |
| `type-name`                   | ✔️                | ✔️                                        | ✔️      |
| Union `T1 \| T2`              | ✔️                | ✔️                                        | ✔️      |
| Intersection `T1 & T2`        | ✔️                | ✔️                                        | ✔️      |
| Nullable `?T`                 | ✔️                | ✔️                                        | ✔️      |
| `OneTemplateParam<T>`         | ✔️                | ✔️                                        | ✔️      |
| `ManyTemplateParams<T, Y, Z>` | ✔️                | ✔️                                        | ✔️      |
| `TrailingComma<T, Y,>`        | ✔️                | ❌ ([ref](https://psalm.dev/r/866c32c49d)) | ✔️      |
| Legacy List `T[]`             | ✔️                | ✔️                                        | ✔️      |
| Legacy Nested List `T[][]`    | ✔️                | ✔️                                        | ✔️      |
| Conditional `T ? Y : Z`       | ❌                 | ✔️                                        | ✔️      |

### Literals

Below is a list of literal types/lexemes: Built-in and supported by PHP.

| Code Example                                                | PHP Type Language                               | Psalm                                     | PHPStan                                                               |
| ----------------------------------------------------------- | ----------------------------------------------- | ----------------------------------------- | --------------------------------------------------------------------- |
| Single-quoted string `'test'`                               | ✔️                                              | ✔️                                        | ✔️                                                                    |
| Double-quoted string `"test"`                               | ✔️                                              | ✔️                                        | ✔️                                                                    |
| Escape chars`"test\n"`                                      | ✔️                                              | ❌ ([ref](https://psalm.dev/r/a4763e39ea)) | ❌ ([ref](https://phpstan.org/r/ef392d41-f4e5-474c-8426-4ecdc583080a)) |
| Hexadecimal chars `"\xDE\xAD"`                              | ✔️                                              | ❌ ([ref](https://psalm.dev/r/ce7cdf12ba)) | ❌ ([ref](https://phpstan.org/r/06c7f670-4db4-433b-b181-d3c8b7219980)) |
| Unicode chars `"\u{1F60A}"`                                 | ✔️                                              | ❌ ([ref](https://psalm.dev/r/73412b8746)) | ❌ ([ref](https://phpstan.org/r/ebfdf3b6-e8e2-413d-adc5-a56ddd564bab)) |
| Int `42`                                                    | ✔️                                              | ✔️                                        | ✔️                                                                    |
| BigInt `PHP_INT_MAX + 1` or `PHP_INT_MIN - 1`               | ✔️/❌ _(round to int min/max + store as string)_ | ✔️/❌ _(cast to float)_                    | ✔️/❌ _(cast to float)_                                                |
| Binary Int `0b10`                                           | ✔️                                              | ❌ ([ref](https://psalm.dev/r/75794af443)) | ❌ ([ref](https://phpstan.org/r/79283030-f55e-4eb1-8b6b-2bdbc4083d30)) |
| Octal Int `0o42`                                            | ✔️                                              | ❌ ([ref](https://psalm.dev/r/8552461d46)) | ❌ ([ref](https://phpstan.org/r/362869d4-5b65-441c-8708-f9f32993b560)) |
| Legacy Octal Int `042`                                      | ✔️                                              | ❌ ([ref](https://psalm.dev/r/e4ab56c714)) | ❌ ([ref](https://phpstan.org/r/20f18b17-94c8-403c-8ad7-14058eb8a0ef)) |
| Hexadecimal Int `0xDEAD`                                    | ✔️                                              | ❌ ([ref](https://psalm.dev/r/60176a85f4)) | ❌ ([ref](https://phpstan.org/r/f9fcaaa6-384e-4d58-b38c-8a51f091abf8)) |
| Float `0.2`                                                 | ✔️                                              | ✔️                                        | ✔️                                                                    |
| Suffixed Float `.2`                                         | ✔️                                              | ❌ ([ref](https://psalm.dev/r/816ae7db23)) | ✔️                                                                    |
| Prefixed Float `2.`                                         | ✔️                                              | ❌ ([ref](https://psalm.dev/r/053808f77b)) | ✔️                                                                    |
| Scientific `2e2`                                            | ✔️                                              | ❌ ([ref](https://psalm.dev/r/fbd87ab0b6)) | ✔️                                                                    |
| Binary Scientific `0b10e2` _(_⚠️ _PHP non-compatible)_      | ❌                                               | ❌                                         | ❌                                                                     |
| Octal Scientific `0o42e2` _(_⚠️ _PHP non-compatible)_       | ❌                                               | ❌                                         | ❌                                                                     |
| Legacy Octal Scientific `042e2` _(_⚠️ _PHP non-compatible)_ | ❌                                               | ❌                                         | ❌                                                                     |
| Hexadecimal Scientific `0x42e2`                             | ✔️                                              | ❌                                         | ❌                                                                     |
| `true` or `false`                                           | ✔️                                              | ✔️                                        | ✔️                                                                    |
| `null`                                                      | ✔️                                              | ✔️                                        | ✔️                                                                    |

### Shapes

Below is a list of grammar of shaped types.

| Code Example                                   | PHP Type Language | Psalm                                                                         | PHPStan                                                               |
| ---------------------------------------------- | ----------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Explicit Shape `Type{key:val}`                 | ✔️                | ✔️/❌ _(only `array` and `object`:_ [_ref_](https://psalm.dev/r/4ec6feecc1)_)_ | ✔️                                                                    |
| Implicit Shape `Type{val}`                     | ✔️                | ✔️/❌ _(only `array` and `object`:_ [_ref_](https://psalm.dev/r/932713f109)_)_ | ✔️                                                                    |
| Optional Shape Key `array{key?: int}`          | ✔️                | ✔️                                                                            | ✔️                                                                    |
| Empty Shape `array{}`                          | ✔️                | ✔️                                                                            | ✔️                                                                    |
| Unsealed Shape `array{...}`                    | ✔️                | ✔️                                                                            | ✔️                                                                    |
| Explicit Unsealed Shape `array{key: val, ...}` | ✔️                | ✔️/❌ _(only `array` and `object`:_ [_ref_](https://psalm.dev/r/00688c401a)_)_ | ✔️                                                                    |
| Implicit Unsealed Shape `array{val, ...}`      | ✔️                | ✔️/❌ _(only `array` and `object`:_ [_ref_](https://psalm.dev/r/d346e9704b)_)_ | ✔️                                                                    |
| Typed Shape `array{...<string>}`               | ✔️                | ✔️                                                                            | ❌ ([ref](https://phpstan.org/r/401619e4-36a2-4c30-94eb-16c40a62c7ad)) |
| `TrailingComma{value,}`                        | ✔️                | ❌ ([ref](https://psalm.dev/r/d63771c22a))                                     | ✔️                                                                    |

### Callables

Below is a list of grammar of callable (function) types.

| Code Example                                                          | PHP Type Language     | Psalm                                                           | PHPStan           |
| --------------------------------------------------------------------- | --------------------- | --------------------------------------------------------------- | ----------------- |
| Simple Func `callable()`                                              | ✔️                    | ✔️                                                              | ✔️                |
| Typed Func `callable(): mixed`                                        | ✔️                    | ✔️                                                              | ✔️                |
| Func Args `callable(T)`                                               | ✔️                    | ✔️                                                              | ✔️                |
| Optional Arg `callable(T=)`                                           | ✔️                    | ✔️                                                              | ✔️                |
| Named Arg `callable(T $name)`                                         | ✔️                    | ✔️                                                              | ✔️                |
| Optional Named Arg `callable(T $name=)`                               | ✔️                    | ❌ _(Internal Error:_ [_ref_](https://psalm.dev/r/9ae58ed797)_)_ | ✔️                |
| Suffixed Variadic Arg `callable(T...)`                                | ✔️                    | ✔️                                                              | ✔️                |
| Prefixed Variadic Arg `callable(...T)`                                | ✔️                    | ✔️                                                              | ✔️                |
| Prefixed + Suffixed Variadic Named Arg `callable(...T ...$name)`      | ✔️ _(Syntax Error)_   | ❌ _(Internal Error:_ [_ref_](https://psalm.dev/r/4a6476fff6)_)_ | ✔️/❌ _(No Error)_ |
| Optional Variadic Arg `callable(...T=)`                               | ✔️ _(Semantic Error)_ | ✔️ _(Semantic Error)_                                           | ✔️ _(No Error)_   |
| Suffixed Variadic Named Arg `callable(T ...$arg)`                     | ✔️                    | ✔️                                                              | ✔️                |
| Prefixed Variadic Named Arg `callable(...T $arg)`                     | ✔️                    | ❌ _(Internal Error:_ [_ref_](https://psalm.dev/r/2dac434b3f)_)_ | ✔️                |
| Reference Arg `callable(T&)`                                          | ✔️                    | ❌ ([ref](https://psalm.dev/r/bb604c4219))                       | ✔️                |
| Optional Reference Arg `callable(T&=)`                                | ✔️                    | ❌ ([ref](https://psalm.dev/r/fc3041a846))                       | ✔️                |
| Optional Reference Named Arg `callable(T &$name=)`                    | ✔️                    | ❌ ([ref](https://psalm.dev/r/14dcf8634f))                       | ✔️                |
| Reference Named Variadic Arg `callable(T &...$name)`                  | ✔️                    | ❌ ([ref](https://psalm.dev/r/7a64356034))                       | ✔️                |
| Reference Named Prefix Variadic Arg `callable(...T &$name)`           | ✔️                    | ❌ ([ref](https://psalm.dev/r/bf7dcbc9b4))                       | ✔️                |
| Optional Reference Named Variadic Arg `callable(T &...$name=)`        | ✔️ _(Semantic Error)_ | ✔️ _(Semantic Error)_                                           | ✔️ _(No Error)_   |
| Optional Reference Named Prefix Variadic Arg `callable(...T &$name=)` | ✔️ _(Semantic Error)_ | ✔️ _(Semantic Error)_                                           | ✔️ _(No Error)_   |
