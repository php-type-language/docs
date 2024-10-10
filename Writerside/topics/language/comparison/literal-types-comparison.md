# Literal Types

Below is a list of literal types/lexemes.

<table style="both">
    <tr>
        <td width="1"></td>
        <td>
            <icon src="typelang.svg" height="16"/>&nbsp;<a href="https://github.com/php-type-language">TypeLang</a>
        </td>
        <td>
            <icon src="psalm.png" height="16"/>&nbsp;<a href="https://github.com/vimeo/psalm">Psalm</a>
        </td>
        <td>
            <icon src="phpstan.png" height="16"/>&nbsp;<a href="https://github.com/phpstan">PHPStan</a>
        </td>
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td></td>
        <td colspan="3">
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
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
</table>