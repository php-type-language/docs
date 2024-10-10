# Syntax Comparison

<show-structure for="chapter" depth="2"/>

The language is defined by a syntax that is based on the grammar of popular
static code analysis tools: [PHPStan](https://phpstan.org/) and [Psalm](https://psalm.dev/).

- PHPStan: [https://phpstan.org](https://phpstan.org/writing-php-code/phpdoc-types)
- Psalm: [https://psalm.dev](https://psalm.dev/docs/annotating_code/type_syntax/atomic_types/)

<tip>
There are others that are not currently tested for compatibility. 
For example:
<list>
    <li>PHAN: <a href="https://github.com/phan/phan/wiki">https://github.com/phan</a></li>
    <li>phpDocumentor: <a href="https://docs.phpdoc.org/guide/guides/types.html">https://docs.phpdoc.org</a></li>
</list>

If you wish, you can add information about this software using a
<a href="https://github.com/php-type-language/docs/blob/master/Writerside/topics/language.md">
    pull request to the documentation
</a>.
</tip>


> Below is a comparison list of all syntactic structures (grammar).
> The logical component (the physical existence of the type) is **NOT**
> taken into account.

General table across all type parsing capabilities

<table style="header-row">
    <tr>
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
        <td>
            <note>
                <format style="bold" color="DarkSeaGreen">62/62</format>
            </note>
        </td>
        <td>
            <warning>
                <format style="bold" color="RosyBrown">42/62</format>
            </warning>
        </td>
        <td>
            <warning>
                <format style="bold" color="RosyBrown">46/62</format>
            </warning>
        </td>
    </tr>
</table>