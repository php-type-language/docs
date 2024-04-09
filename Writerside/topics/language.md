# Syntax Comparison

<show-structure for="chapter" depth="2"/>

The language is defined by a syntax that is based on the grammar of popular
static code analysis tools: [PHPStan](https://phpstan.org/) and [Psalm](https://psalm.dev/).

- PHPStan: [https://phpstan.org](https://phpstan.org/writing-php-code/phpdoc-types)
- Psalm: [https://psalm.dev](https://psalm.dev/docs/annotating_code/type_syntax/atomic_types/)
- PHAN: [https://github.com/phan](https://github.com/phan/phan/wiki)
- phpDocumentor: [https://docs.phpdoc.org](https://docs.phpdoc.org/guide/guides/types.html)

> Below is a comparison list of all syntactic structures (grammar).
> The logical component (the physical existence of the type) is **NOT**
> taken into account.

## Basic Types

Below is a list of simple, logical and other common types.

<table style="both">
    <tr>
        <td width="1"></td>
        <td width="150">
            <icon src="typelang.svg" height="16"/>&nbsp;<a href="https://github.com/php-type-language">TypeLang</a>
        </td>
        <td width="130">
            <icon src="psalm.png" height="16"/>&nbsp;<a href="https://github.com/vimeo/psalm">Psalm</a>
        </td>
        <td width="130">
            <icon src="phpstan.png" height="16"/>&nbsp;<a href="https://github.com/phpstan">PHPStan</a>
        </td>
        <td width="130">
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
            <deflist collapsible="true">
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
            <a href="https://psalm.dev/r/80a466e81c">
                Not Supported
            </a>
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
            <deflist collapsible="true">
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
        <td width="1"></td>
        <td width="150">
            <icon src="typelang.svg" height="16"/>&nbsp;<a href="https://github.com/php-type-language">TypeLang</a>
        </td>
        <td width="130">
            <icon src="psalm.png" height="16"/>&nbsp;<a href="https://github.com/vimeo/psalm">Psalm</a>
        </td>
        <td width="130">
            <icon src="phpstan.png" height="16"/>&nbsp;<a href="https://github.com/phpstan">PHPStan</a>
        </td>
        <td width="130">
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
            <a href="https://psalm.dev/r/c70473ea70">
                Not Supported
            </a>
        </td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://phpstan.org/r/dc886f85-85b6-46b4-9a21-a37a90e6b0c9">
                Not Supported
            </a>
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
            <deflist collapsible="true">
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
            <a href="https://psalm.dev/r/d936b5ed48">
                Not Supported
            </a>
        </td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://phpstan.org/r/529ccac7-2c9b-4a59-837f-26c846bd216f">
                Not Supported
            </a>
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

<table style="both">
    <tr>
        <td width="1"></td>
        <td width="150">
            <icon src="typelang.svg" height="16"/>&nbsp;<a href="https://github.com/php-type-language">TypeLang</a>
        </td>
        <td width="130">
            <icon src="psalm.png" height="16"/>&nbsp;<a href="https://github.com/vimeo/psalm">Psalm</a>
        </td>
        <td width="130">
            <icon src="phpstan.png" height="16"/>&nbsp;<a href="https://github.com/phpstan">PHPStan</a>
        </td>
        <td width="130">
            <icon src="phan.png" height="16"/>&nbsp;<a href="https://github.com/phan">PHAN</a>
        </td>
        <td width="200">
            <icon src="phpdocumentor.png" height="16"/>&nbsp;<a href="https://github.com/phpDocumentor">phpDocumentor</a>
        </td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="literal-types.md" anchor="boolean-and-null">
                Boolean <code>true</code> and <code>false</code> literals
            </a>
            <code-block lang="typescript">
            true
            false
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
            <a href="literal-types.md" anchor="boolean-and-null">
                The <code>null</code> literals
            </a>
            <code-block lang="typescript">
            null
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
            <a href="literal-types.md" anchor="strings">
                Single-quoted string literals
            </a>
            <code-block lang="typescript">
            'single-quoted string'
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
            <a href="literal-types.md" anchor="strings">
                Double-quoted string literals
            </a>
            <code-block lang="typescript">
            "double-quoted string"
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
            <a href="literal-types.md" anchor="escape-sequences">
                Escape sequences in a double-quoted string literals
            </a>
            <code-block lang="typescript">
            "string with \n new line \n delimiters"
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://psalm.dev/r/a4763e39ea">
                Not Supported
            </a>
        </td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://phpstan.org/r/ef392d41-f4e5-474c-8426-4ecdc583080a">
                Not Supported
            </a>
        </td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="literal-types.md" anchor="hexadecimal-sequences">
                Hexadecimal sequences in a double-quoted string literals
            </a>
            <code-block lang="typescript">
            "\xDE\xAD\xBE\xEF"
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://psalm.dev/r/ce7cdf12ba">
                Not Supported
            </a>
        </td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://phpstan.org/r/06c7f670-4db4-433b-b181-d3c8b7219980">
                Not Supported
            </a>
        </td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="literal-types.md" anchor="unicode-sequences">
                Unicode sequences in a double-quoted string literals
            </a>
            <code-block lang="typescript">
            "This is smile \u{1F60A}"
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://psalm.dev/r/73412b8746">
                Not Supported
            </a>
        </td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://phpstan.org/r/ebfdf3b6-e8e2-413d-adc5-a56ddd564bab">
                Not Supported
            </a>
        </td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="literal-types.md" anchor="integer">
                Integer literals
            </a>
            <code-block lang="typescript">
            42
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
            <a href="literal-types.md" anchor="integer">
                BigInteger (<code>PHP_INT_MAX + 1</code> or <code>PHP_INT_MIN - 1</code>) literals
            </a>
            <code-block lang="typescript">
            42
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="warning.svg"/> <a anchor="ref-3-1">Works with restrictions <sup>1</sup></a></td>
        <td><icon src="warning.svg"/> <a anchor="ref-3-2">Works with restrictions <sup>2</sup></a></td>
        <td><icon src="warning.svg"/> <a anchor="ref-3-3">Works with restrictions <sup>3</sup></a></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="5">
            <deflist collapsible="true">
                <def title="1. TypeLang limits value to min/max int and store literal value as string" id="ref-3-1">
                    <code-block lang="typescript">
                    // Input
                    9999999999999999999
                    </code-block>
                    <code-block lang="typescript">
                    // Stored
                    TypeLang\Parser\Node\Literal\IntLiteralNode {
                      +offset: 0
                      +raw: "9999999999999999999"
                      +value: 9223372036854775807
                    }
                    </code-block>
                </def>
                <def title="2. Psalm limits value to min/max int" id="ref-3-2">
                    <code-block lang="typescript">
                    // Input
                    9999999999999999999
                    </code-block>
                    <code-block lang="typescript">
                    // Stored
                    9223372036854775807
                    </code-block>
                    <a href="https://psalm.dev/r/6136de9980">Open in psalm.dev</a>
                </def>
                <def title="3. PHPStan limits value to min/max int" id="ref-3-3">
                    <code-block lang="typescript">
                    // Input
                    9999999999999999999
                    </code-block>
                    <code-block lang="typescript">
                    // Stored
                    9223372036854775807
                    </code-block>
                    <a href="https://phpstan.org/r/e8f6fef0-7726-412a-9c99-9eef04c53c17">Open in phpstan.org</a>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="literal-types.md" anchor="binary">
                Integer literals in binary format
            </a>
            <code-block lang="typescript">
            0b10101010
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://psalm.dev/r/75794af443">
                Not Supported
            </a>
        </td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://phpstan.org/r/79283030-f55e-4eb1-8b6b-2bdbc4083d30">
                Not Supported
            </a>
        </td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="literal-types.md" anchor="octal">
                Integer literals in octal format
            </a>
            <code-block lang="typescript">
            0o42
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://psalm.dev/r/8552461d46">
                Not Supported
            </a>
        </td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://phpstan.org/r/362869d4-5b65-441c-8708-f9f32993b560">
                Not Supported
            </a>
        </td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="literal-types.md" anchor="octal">
                Integer literals in legacy octal format
            </a>
            <code-block lang="typescript">
            042
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://psalm.dev/r/e4ab56c714">
                Not Supported
            </a>
        </td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://phpstan.org/r/20f18b17-94c8-403c-8ad7-14058eb8a0ef">
                Not Supported
            </a>
        </td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="literal-types.md" anchor="hexadecimal">
                Integer literals in hexadecimal format
            </a>
            <code-block lang="typescript">
            0xDEAD_BEEF
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://psalm.dev/r/60176a85f4">
                Not Supported
            </a>
        </td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://phpstan.org/r/f9fcaaa6-384e-4d58-b38c-8a51f091abf8">
                Not Supported
            </a>
        </td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="literal-types.md" anchor="float">
                Float literals
            </a>
            <code-block lang="typescript">
            0.42
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
            <a href="literal-types.md" anchor="float">
                Float literals without leading zero
            </a>
            <code-block lang="typescript">
            .42
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://psalm.dev/r/816ae7db23">
                Not Supported
            </a>
        </td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="literal-types.md" anchor="float">
                Float literals without trailing zero
            </a>
            <code-block lang="typescript">
            42.
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://psalm.dev/r/053808f77b">
                Not Supported
            </a>
        </td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="literal-types.md" anchor="scientific-notation">
                Float literals in scientific notation
            </a>
            <code-block lang="typescript">
            2e2
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://psalm.dev/r/fbd87ab0b6">
                Not Supported
            </a>
        </td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="literal-types.md" anchor="scientific-notation">
                Float literals in scientific notation
            </a>
            <code-block lang="typescript">
            2e2
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://psalm.dev/r/fbd87ab0b6">
                Not Supported
            </a>
        </td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="literal-types.md" anchor="scientific-notation">
                Float hexadecimal literals in scientific notation
            </a>
            <code-block lang="typescript">
            0x42e2
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://psalm.dev/r/4cf7bef40c">
                Not Supported
            </a>
        </td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://phpstan.org/r/bc5bc798-7ef0-4afa-b3f6-813b52ba4a5f">
                Not Supported
            </a>
        </td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td></td>
        <td>
            <note>
                <format style="bold" color="DarkSeaGreen">19/19</format>
            </note>
        </td>
        <td>
            <warning>
                <format style="bold" color="RosyBrown">7/19</format>
            </warning>
        </td>
        <td>
            <warning>
                <format style="bold" color="RosyBrown">11/19</format>
            </warning>
        </td>
        <td>
            <tip>
                <format style="bold" color="DarkGray">?/19</format>
            </tip>
        </td>
        <td>
            <tip>
                <format style="bold" color="DarkGray">?/19</format>
            </tip>
        </td>
    </tr>
</table>

## Shape Types

Below is a list of grammar of shaped types.


<table style="both">
    <tr>
        <td width="1"></td>
        <td width="150">
            <icon src="typelang.svg" height="16"/>&nbsp;<a href="https://github.com/php-type-language">TypeLang</a>
        </td>
        <td width="130">
            <icon src="psalm.png" height="16"/>&nbsp;<a href="https://github.com/vimeo/psalm">Psalm</a>
        </td>
        <td width="130">
            <icon src="phpstan.png" height="16"/>&nbsp;<a href="https://github.com/phpstan">PHPStan</a>
        </td>
        <td width="130">
            <icon src="phan.png" height="16"/>&nbsp;<a href="https://github.com/phan">PHAN</a>
        </td>
        <td width="200">
            <icon src="phpdocumentor.png" height="16"/>&nbsp;<a href="https://github.com/phpDocumentor">phpDocumentor</a>
        </td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="shape-types.md">
                Explicit shape types
            </a>
            <code-block lang="typescript">
            object {
                key: ValueType
            }
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="warning.svg"/> <a anchor="ref-4-1">Works with restrictions <sup>1</sup></a></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="5">
            <deflist collapsible="true">
                <def title="1. Psalm supports only array and object types" id="ref-4-1">
                    <code-block lang="typescript">
                    // OK
                    object {
                        key: ValueType
                    }
                    </code-block>
                    <code-block lang="typescript">
                    // Error
                    Custom\ObjectType {
                        key: ValueType
                    }
                    </code-block>
                    <a href="https://psalm.dev/r/4ec6feecc1">Open in psalm.dev</a>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="shape-types.md">
                Trailing comma in explicit shape types
            </a>
            <code-block lang="typescript">
            object {
                key: ValueType,
            }
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="warning.svg"/> <a anchor="ref-5-1">Works with restrictions <sup>1</sup></a></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="5">
            <deflist collapsible="true">
                <def title="1. Psalm supports only array and object types" id="ref-5-1">
                    <code-block lang="typescript">
                    // OK
                    object {
                        key: ValueType,
                    }
                    </code-block>
                    <code-block lang="typescript">
                    // Error
                    Custom\ObjectType {
                        key: ValueType,
                    }
                    </code-block>
                    <a href="https://psalm.dev/r/ba0ff971fe">Open in psalm.dev</a>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="shape-types.md">
                Implicit shape types
            </a>
            <code-block lang="typescript">
            object {
                ValueType
            }
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="warning.svg"/> <a anchor="ref-6-1">Works with restrictions <sup>1</sup></a></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="5">
            <deflist collapsible="true">
                <def title="1. Psalm supports only array and object types" id="ref-6-1">
                    <code-block lang="typescript">
                    // OK
                    object {
                        ValueType
                    }
                    </code-block>
                    <code-block lang="typescript">
                    // Error
                    Custom\ObjectType {
                        ValueType
                    }
                    </code-block>
                    <a href="https://psalm.dev/r/932713f109">Open in psalm.dev</a>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="shape-types.md">
                Trailing comma in implicit shape types
            </a>
            <code-block lang="typescript">
            object {
                ValueType,
            }
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://psalm.dev/r/0526cb9569">
                Not Supported
            </a>
        </td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="shape-types.md">
                Optional keys in explicit shape types
            </a>
            <code-block lang="typescript">
            object {
                key?: ValueType
            }
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="warning.svg"/> <a anchor="ref-7-1">Works with restrictions <sup>1</sup></a></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="5">
            <deflist collapsible="true">
                <def title="1. Psalm supports only array and object types" id="ref-7-1">
                    <code-block lang="typescript">
                    // OK
                    object {
                        key?: ValueType
                    }
                    </code-block>
                    <code-block lang="typescript">
                    // Error
                    Custom\ObjectType {
                        key?: ValueType
                    }
                    </code-block>
                    <a href="https://psalm.dev/r/d1f685e70d">Open in psalm.dev</a>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="shape-types.md">
                Empty (closed) shape types
            </a>
            <code-block lang="typescript">
            object {}
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="warning.svg"/> <a anchor="ref-8-1">Works with restrictions <sup>1</sup></a></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="5">
            <deflist collapsible="true">
                <def title="1. Psalm supports only array and object types" id="ref-8-1">
                    <code-block lang="typescript">
                    // OK
                    object {}
                    </code-block>
                    <code-block lang="typescript">
                    // Error
                    Custom\ObjectType {}
                    </code-block>
                    <a href="https://psalm.dev/r/4581b137f2">Open in psalm.dev</a>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="shape-types.md" anchor="unsealed-shapes">
                Unsealed shape types
            </a>
            <code-block lang="typescript">
            object { ... }
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="warning.svg"/> <a anchor="ref-9-1">Works with restrictions <sup>1</sup></a></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="5">
            <deflist collapsible="true">
                <def title="1. Psalm supports only array and object types" id="ref-9-1">
                    <code-block lang="typescript">
                    // OK
                    object { ... }
                    </code-block>
                    <code-block lang="typescript">
                    // Error
                    Custom\ObjectType { ... }
                    </code-block>
                    <a href="https://psalm.dev/r/afad7f4c66">Open in psalm.dev</a>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="shape-types.md" anchor="unsealed-shapes">
                Explicit unsealed shape types
            </a>
            <code-block lang="typescript">
            object {
                key: ValueType,
                ...
            }
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="warning.svg"/> <a anchor="ref-10-1">Works with restrictions <sup>1</sup></a></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="5">
            <deflist collapsible="true">
                <def title="1. Psalm supports only array and object types" id="ref-10-1">
                    <code-block lang="typescript">
                    // OK
                    object {
                        key: ValueType,
                        ...
                    }
                    </code-block>
                    <code-block lang="typescript">
                    // Error
                    Custom\ObjectType {
                        key: ValueType,
                        ...
                    }
                    </code-block>
                    <a href="https://psalm.dev/r/65fdb88c08">Open in psalm.dev</a>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="shape-types.md" anchor="unsealed-shapes">
                Implicit unsealed shape types
            </a>
            <code-block lang="typescript">
            object {
                ValueType,
                ...
            }
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="warning.svg"/> <a anchor="ref-11-1">Works with restrictions <sup>1</sup></a></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="5">
            <deflist collapsible="true">
                <def title="1. Psalm supports only array and object types" id="ref-11-1">
                    <code-block lang="typescript">
                    // OK
                    object {
                        ValueType,
                        ...
                    }
                    </code-block>
                    <code-block lang="typescript">
                    // Error
                    Custom\ObjectType {
                        ValueType,
                        ...
                    }
                    </code-block>
                    <a href="https://psalm.dev/r/65fdb88c08">Open in psalm.dev</a>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td colspan="6">
            <a href="shape-types.md" anchor="typed-shapes">
                Typed unsealed shape types
            </a>
            <code-block lang="typescript">
            object {
                ...&lt;array-key, Type>
            }
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="warning.svg"/> <a anchor="ref-12-1">Works with restrictions <sup>1</sup></a></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://phpstan.org/r/401619e4-36a2-4c30-94eb-16c40a62c7ad">
                Not Supported
            </a>
        </td>
        <td><icon src="unknown.svg"/></td>
        <td><icon src="unknown.svg"/></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="5">
            <deflist collapsible="true">
                <def title="1. Psalm supports only array and object types" id="ref-12-1">
                    <code-block lang="typescript">
                    // OK
                    object {
                        ...&lt;array-key, Type>
                    }
                    </code-block>
                    <code-block lang="typescript">
                    // Error
                    Custom\ObjectType {
                        ...&lt;array-key, Type>
                    }
                    </code-block>
                    <a href="https://psalm.dev/r/487c82502c">Open in psalm.dev</a>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td></td>
        <td>
            <note>
                <format style="bold" color="DarkSeaGreen">10/10</format>
            </note>
        </td>
        <td>
            <warning>
                <format style="bold" color="RosyBrown">9/10</format>
            </warning>
        </td>
        <td>
            <warning>
                <format style="bold" color="RosyBrown">9/10</format>
            </warning>
        </td>
        <td>
            <tip>
                <format style="bold" color="DarkGray">?/10</format>
            </tip>
        </td>
        <td>
            <tip>
                <format style="bold" color="DarkGray">?/10</format>
            </tip>
        </td>
    </tr>
</table>

## Callables Types

Below is a list of grammar of callable (function) types.

<warning>This table is not yet formatted</warning>

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
