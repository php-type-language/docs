# Conditional Types

Below is a list of conditional types.

<table style="both">
    <tr>
        <td width="1"></td>
        <td>
            <icon src="typelang.svg" height="20"/>&nbsp;<a href="https://github.com/php-type-language">TypeLang</a>
        </td>
        <td>
            <icon src="psalm.png" height="20"/>&nbsp;<a href="https://github.com/vimeo/psalm">Psalm</a>
        </td>
        <td>
            <icon src="phpstan.png" height="20"/>&nbsp;<a href="https://github.com/phpstan">PHPStan</a>
        </td>
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
    </tr>
    <tr>
        <td colspan="4">
            <a href="conditional-types.md">
                Conditional positive equality types
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td></td>
        <td colspan="3">
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
        <td colspan="4">
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
    </tr>
</table>
