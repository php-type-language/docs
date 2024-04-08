# Syntax Comparison

<show-structure for="chapter" depth="2"/>

The language is defined by a syntax that is based on the grammar of popular
static code analysis tools: [PHPStan](https://phpstan.org/) and [Psalm](https://psalm.dev/).

- PHPStan: [https://phpstan.org/writing-php-code/phpdoc-types](https://phpstan.org/writing-php-code/phpdoc-types)
- Psalm: [https://psalm.dev/docs/annotating\_code/type\_syntax/atomic\_types/](https://psalm.dev/docs/annotating\_code/type\_syntax/atomic\_types/)
- phpDocumentor: [https://docs.phpdoc.org/guide/guides/types.html](https://docs.phpdoc.org/guide/guides/types.html)

> Below is a comparison list of all syntactic structures (grammar). The logical component 
> (the physical existence of the type) is not taken into account.


## Basic Types

Below is a list of simple, logical and other common types.

<table style="both">
    <tr>
        <td width="1"></td>
        <td width="150">
            <icon src="typelang.svg" height="16"/>&nbsp;<a href="https://github.com/php-type-language">TypeLang</a>
        </td>
        <td width="150">
            <icon src="psalm.png" height="16"/>&nbsp;<a href="https://github.com/vimeo/psalm">Psalm</a>
        </td>
        <td width="150">
            <icon src="phpstan.png" height="16"/>&nbsp;<a href="https://github.com/phpstan">PHPStan</a>
        </td>
        <td width="150">
            <icon src="phan.png" height="16"/>&nbsp;<a href="https://github.com/phan">PHAN</a>
        </td>
        <td width="200">
            <icon src="phpdocumentor.png" height="16"/>&nbsp;<a href="https://github.com/phpDocumentor">phpDocumentor</a>
        </td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="basic-types.md" anchor="namespace">
                Class or type name (including <tooltip term="FQN">FQN</tooltip>)
            </a>
            <code-block lang="typescript">
            Non\Qualified\Name
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="logical-types.md" anchor="union-type">
                Logical union types
            </a>
            <code-block lang="typescript">
            T | U | V
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="logical-types.md" anchor="intersection-type">
                Logical intersection types
            </a>
            <code-block lang="typescript">
            T & U & V
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="logical-types.md" anchor="nullable-type">
                Logical nullable types
            </a>
            <code-block lang="typescript">
            ?T
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="generic-types.md" anchor="list-syntax">
                Legacy list types syntax
            </a>
            <code-block lang="typescript">
                User[]
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="generic-types.md">
                Template arguments (Generics)
            </a>
            <code-block lang="typescript">
                ExampleCollection&lt;array-key, User>
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="warning.svg"/>
            <a anchor="ref-1-1">
                Trailing comma not supported <sup>1</sup>
            </a>
        </td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="5">
            <deflist>
                <def title="1. Psalm does NOT support arguments ending with a comma" id="ref-1-1">
                    <code-block lang="typescript">
                    ExampleCollection&lt;array-key, User,>
                    </code-block>
                    <a href="https://psalm.dev/r/866c32c49d">Open in psalm.dev</a>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="generic-types.md" anchor="call-site-hints">
                Template argument hints
            </a>
            <code-block lang="typescript">
                ExampleCollection&lt;in array-key, out User>
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://psalm.dev/r/80a466e81c">Syntax Error</a>
        </td>
        <td>
            <icon src="ok.svg"/>
            <a anchor="ref-1-2">
                Call-site variance <sup>2</sup>
            </a>
        </td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="5">
            <deflist>
                <def title="2. PHPStan supports call-site variance" id="ref-1-2">
                    <code-block lang="typescript">
                    Collection&lt;covariant Animal>
                    </code-block>
                    <a href="https://phpstan.org/blog/whats-up-with-template-covariant#call-site-variance">Open in phpstan.org</a>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td></td>
        <td>
            <note>
                <format style="bold" color="DarkSeaGreen">7/7</format>
            </note>
        </td>
        <td>
            <warning>
                <format style="bold" color="RosyBrown">6/7</format>
            </warning>
        </td>
        <td>
            <note>
                <format style="bold" color="DarkSeaGreen">7/7</format>
            </note>
        </td>
        <td>
            <tip>
                <format style="bold" color="DarkGray">?/7</format>
            </tip>
        </td>
        <td>
            <tip>
                <format style="bold" color="DarkGray">?/7</format>
            </tip>
        </td>
    </tr>
</table>

## Conditional Types

Below is a list of conditional types.

<table style="both">
    <tr>
        <td></td>
        <td width="150">
            <icon src="typelang.svg" height="16"/>&nbsp;<a href="https://github.com/php-type-language">TypeLang</a>
        </td>
        <td width="150">
            <icon src="psalm.png" height="16"/>&nbsp;<a href="https://github.com/vimeo/psalm">Psalm</a>
        </td>
        <td width="150">
            <icon src="phpstan.png" height="16"/>&nbsp;<a href="https://github.com/phpstan">PHPStan</a>
        </td>
        <td width="150">
            <icon src="phan.png" height="16"/>&nbsp;<a href="https://github.com/phan">PHAN</a>
        </td>
        <td width="200">
            <icon src="phpdocumentor.png" height="16"/>&nbsp;<a href="https://github.com/phpDocumentor">phpDocumentor</a>
        </td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="conditional-types.md">
                Conditional (negative) equality types
            </a>
            <code-block lang="typescript">
            T is A ? B : C
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="conditional-types.md">
                Conditional negative equality types
            </a>
            <code-block lang="typescript">
            T is not A ? B : C
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="conditional-types.md">
                Conditional referenced types
            </a>
            <code-block lang="typescript">
            $var is A ? B : C
            $var is not A ? B : C
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="conditional-types.md">
                Conditional referenced types 
            </a>
            <a href="https://en.wikipedia.org/wiki/Yoda_conditions">
                in Yoda-style
            </a>
            <code-block lang="typescript">
            A is $var ? B : C
            A is not $var ? B : C
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://psalm.dev/r/c70473ea70">Syntax Error</a>
        </td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://phpstan.org/r/dc886f85-85b6-46b4-9a21-a37a90e6b0c9">Syntax Error</a>
        </td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="conditional-types.md">
                Functions in conditional types
            </a>
            <code-block lang="typescript">
            foo() is A ? B : C
            foo() is not A ? B : C
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ok.svg"/> <a anchor="ref-2-1">List of supported functions <sup>1</sup></a></td>
        <td><icon src="ok.svg"/> <a anchor="ref-2-2">List of supported functions <sup>2</sup></a></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="5">
            <deflist>
                <def title="1. Psalm supports the following functions" id="ref-2-1">
                    <list>
                        <li><code>define()</code></li>
                        <li><code>array_map()</code></li>
                        <li><code>array_filter()</code></li>
                        <li><code>func_get_arg()</code></li>
                        <li><code>func_get_args()</code></li>
                        <li><code>func_num_args()</code></li>
                        <li><code>is_a()</code></li>
                        <li><code>is_subclass_of()</code></li>
                        <li><code>class_alias()</code></li>
                    </list>
                </def>
                <def title="2. PHPStan supports the following functions" id="ref-2-2">
                    <list>
                        <li><code>func_get_arg()</code></li>
                        <li><code>func_get_args()</code></li>
                        <li><code>func_num_args()</code></li>
                    </list>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="conditional-types.md">
                Functions in conditional types
            </a>
            <a href="https://en.wikipedia.org/wiki/Yoda_conditions">
                in Yoda-style
            </a>
            <code-block lang="typescript">
            A is foo() ? B : C
            A is not foo() ? B : C
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://psalm.dev/r/d936b5ed48">Syntax Error</a>
        </td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://phpstan.org/r/529ccac7-2c9b-4a59-837f-26c846bd216f">Syntax Error</a>
        </td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td></td>
        <td>
            <note>
                <format style="bold" color="DarkSeaGreen">6/6</format>
            </note>
        </td>
        <td>
            <warning>
                <format style="bold" color="RosyBrown">4/6</format>
            </warning>
        </td>
        <td>
            <warning>
                <format style="bold" color="RosyBrown">4/6</format>
            </warning>
        </td>
        <td>
            <tip>
                <format style="bold" color="DarkGray">?/7</format>
            </tip>
        </td>
        <td>
            <tip>
                <format style="bold" color="DarkGray">?/7</format>
            </tip>
        </td>
    </tr>
</table>

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
