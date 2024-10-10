# Shape Types

Below is a list of grammar of shaped types.


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
                <format style="bold" color="DarkSeaGreen">11/11</format>
            </note>
        </td>
        <td>
            <warning>
                <format style="bold" color="RosyBrown">9/11</format>
            </warning>
        </td>
        <td>
            <warning>
                <format style="bold" color="RosyBrown">10/11</format>
            </warning>
        </td>
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td></td>
        <td colspan="3">
            <deflist collapsible="true">
                <def title="1. Psalm does not support custom (class instances) objects" id="ref-4-1">
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
        <td colspan="4">
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
    </tr>
    <tr>
        <td></td>
        <td colspan="3">
            <deflist collapsible="true">
                <def title="1. Psalm does not support custom (class instances) objects" id="ref-5-1">
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
        <td colspan="4">
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
    </tr>
    <tr>
        <td></td>
        <td colspan="3">
            <deflist collapsible="true">
                <def title="1. Psalm does not support custom (class instances) objects" id="ref-6-1">
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
        <td colspan="4">
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
    </tr>
    <tr>
        <td colspan="4">
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
    </tr>
    <tr>
        <td></td>
        <td colspan="3">
            <deflist collapsible="true">
                <def title="1. Psalm does not support custom (class instances) objects" id="ref-7-1">
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
        <td colspan="4">
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
    </tr>
    <tr>
        <td></td>
        <td colspan="3">
            <deflist collapsible="true">
                <def title="1. Psalm does not support custom (class instances) objects" id="ref-8-1">
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
        <td colspan="4">
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
    </tr>
    <tr>
        <td></td>
        <td colspan="3">
            <deflist collapsible="true">
                <def title="1. Psalm does not support custom (class instances) objects" id="ref-9-1">
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
        <td colspan="4">
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
    </tr>
    <tr>
        <td></td>
        <td colspan="3">
            <deflist collapsible="true">
                <def title="1. Psalm does not support custom (class instances) objects" id="ref-10-1">
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
        <td colspan="4">
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
    </tr>
    <tr>
        <td></td>
        <td colspan="3">
            <deflist collapsible="true">
                <def title="1. Psalm does not support custom (class instances) objects" id="ref-11-1">
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
        <td colspan="4">
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
        <td><icon src="warning.svg"/> <a anchor="ref-12-2">Works with restrictions <sup>2</sup></a></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="3">
            <deflist collapsible="true">
                <def title="1. Psalm does not support custom (class instances) objects" id="ref-12-1">
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
                <def title="2. PHPStan does not support some built-in types such as list (hardcoded in the parser)" id="ref-12-2">
                    <code-block lang="typescript">
                    // OK
                    array {
                        ...&lt;array-key, Type>
                    }
                    </code-block>
                    <code-block lang="typescript">
                    // Syntax Error
                    list {
                        array-key, 
                        ...&lt;Type>
                    }
                    </code-block>
                    <a href="https://phpstan.org/r/d89fdfaf-cee8-4737-b5fd-c9145458da6a">Open in phpstan.org</a>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td colspan="4">
            <a href="shape-types.md" anchor="attributes">
                Shape field attributes
            </a>
            <code-block lang="typescript">
            object {
                #[inline, assert(not&lt;"">)]
                name: string
            }
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ko.svg"/></td>
        <td><icon src="ko.svg"/></td>
    </tr>
</table>