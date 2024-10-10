# Basic Types

Below is a list of simple, logical and other common types.

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
                <format style="bold" color="DarkSeaGreen">11/12</format>
            </note>
        </td>
        <td>
            <warning>
                <format style="bold" color="RosyBrown">9/12</format>
            </warning>
        </td>
        <td>
            <warning>
                <format style="bold" color="RosyBrown">10/12</format>
            </warning>
        </td>
    </tr>
    <tr>
        <td colspan="4">
            <a href="basic-types.md" anchor="namespace">
                Class or type name (including <tooltip term="FQN">FQN</tooltip>)
            </a>
            <code-block lang="typescript">
            Fully\Qualified\Name
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td></td>
        <td colspan="3">
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
        <td colspan="4">
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
                Call-site variance <sup>1</sup>
            </a>
        </td>
    </tr>
    <tr>
        <td></td>
        <td colspan="3">
            <deflist collapsible="true">
                <def title="1. PHPStan supports call-site variance" id="ref-1-2">
                    <code-block lang="typescript">
                    Collection&lt;covariant Animal>
                    </code-block>
                    <a href="https://phpstan.org/blog/whats-up-with-template-covariant#call-site-variance">Open in phpstan.org</a>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td colspan="4">
            <a href="generic-types.md" anchor="attributes">
                Template argument attributes
            </a>
            <code-block lang="typescript">
                ExampleCollection&lt;#[assert(not&lt;"0">)] array-key>
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            Not Supported
        </td>
        <td>
            <icon src="ko.svg"/>
            Not Supported
        </td>
    </tr>
    <tr>
        <td colspan="4">
            <a href="const-types.md" anchor="class-constants">
                Class constant types
            </a>
            <code-block lang="typescript">
                ClassName::CONSTANT_NAME
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
            <a href="const-types.md" anchor="constant-masks">
                Prefixed class constant mask types
            </a>
            <code-block lang="typescript">
                ClassName::CONSTANT_*
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
            <a href="const-types.md" anchor="constant-masks">
                Non-prefixed class constant mask types
            </a>
            <code-block lang="typescript">
                ClassName::*
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
            <a href="const-types.md" anchor="constant-masks">
                Global constant mask types
            </a>
            <code-block lang="typescript">
                JSON_*
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://psalm.dev/r/2872401a31">
                Not Supported
            </a>
        </td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://phpstan.org/r/7705c6cc-4aad-4394-8f54-0bdae761193e">
                Not Supported
            </a>
        </td>
    </tr>
</table>