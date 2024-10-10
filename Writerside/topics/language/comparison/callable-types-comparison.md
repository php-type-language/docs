# Callables Types

Below is a list of grammar of callable (function) types.

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
                <format style="bold" color="DarkSeaGreen">15/15</format>
            </note>
        </td>
        <td>
            <warning>
                <format style="bold" color="RosyBrown">13/15</format>
            </warning>
        </td>
        <td>
            <warning>
                <format style="bold" color="RosyBrown">12/15</format>
            </warning>
        </td>
    </tr>
    <tr>
        <td colspan="4">
            <a href="callable-types.md">
                Non-typed callable types
            </a>
            <code-block lang="typescript">
            callable()
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://phpstan.org/r/a681d5d7-7632-42bf-bf8a-07ed1ae1c64c">
                Not Supported
            </a>
        </td>
    </tr>
    <tr>
        <td colspan="4">
            <a href="callable-types.md">
                Typed callable types
            </a>
            <code-block lang="typescript">
            callable(): Type
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
            <a href="callable-types.md">
                Callable with typed parameters
            </a>
            <code-block lang="typescript">
            callable(Type): T
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
            <a href="callable-types.md" anchor="optional-parameters">
                Callable with optional parameters
            </a>
            <code-block lang="typescript">
            callable(Type=): T
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
            <a href="callable-types.md" anchor="named-parameters">
                Callable with named parameters
            </a>
            <code-block lang="typescript">
            callable(Type $name): T
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
            <a href="callable-types.md">
                Callable with optional named parameters
            </a>
            <code-block lang="typescript">
            callable(Type $name=): T
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://psalm.dev/r/9ae58ed797">
                Not Supported
            </a>
        </td>
        <td><icon src="ok.svg"/></td>
    </tr>
    <tr>
        <td colspan="4">
            <a href="callable-types.md" anchor="output-parameters">
                Callable with output parameters
            </a>
            <code-block lang="typescript">
            callable(T&): T
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="warning.svg"/> <a anchor="ref-13-1">Works with restrictions <sup>1</sup></a></td>
        <td><icon src="ok.svg"/></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="3">
            <deflist collapsible="true">
                <def title="1. Psalm does NOT support literal types" id="ref-13-1">
                    <code-block lang="typescript">
                    // OK
                    callable(T&): U
                    </code-block>
                    <code-block lang="typescript">
                    // Bug: Intersection types must be all objects,
                    // Psalm\Type\Atomic\TInt provided in docblock
                    callable(int&): U
                    </code-block>
                    <a href="https://psalm.dev/r/9a5a81443f">Open in psalm.dev</a>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td colspan="4">
            <a href="callable-types.md">
                Callable with output optional parameters
            </a>
            <code-block lang="typescript">
            callable(T&=): T
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="warning.svg"/> <a anchor="ref-14-1">Works with restrictions <sup>1</sup></a></td>
        <td><icon src="ok.svg"/></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="3">
            <deflist collapsible="true">
                <def title="1. Psalm does NOT support literal types" id="ref-14-1">
                    <code-block lang="typescript">
                    // OK
                    callable(T&=): U
                    </code-block>
                    <code-block lang="typescript">
                    // Bug: Intersection types must be all objects,
                    // Psalm\Type\Atomic\TInt provided in docblock
                    callable(int&=): U
                    </code-block>
                    <a href="https://psalm.dev/r/33dde88598">Open in psalm.dev</a>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td colspan="4">
            <a href="callable-types.md">
                Callable with output optional named parameters
            </a>
            <code-block lang="typescript">
            callable(T &$name=): T
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://psalm.dev/r/7d7c34e559">
                Not Supported
            </a>
        </td>
        <td><icon src="ok.svg"/></td>
    </tr>
    <tr>
        <td colspan="4">
            <a href="callable-types.md" anchor="variadic-parameters">
                Callable with suffixed variadic parameters
            </a>
            <code-block lang="typescript">
            callable(Type...): T
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
            <a href="callable-types.md" anchor="variadic-parameters">
                Callable with prefixed variadic parameters
            </a>
            <code-block lang="typescript">
            callable(...Type): T
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="ok.svg"/></td>
        <td>
            <icon src="ko.svg"/>
            <a href="https://phpstan.org/r/a578af59-2099-4244-a297-67b74f9729b5">
                Not Supported
            </a>
        </td>
    </tr>
    <tr>
        <td colspan="4">
            <a href="callable-types.md" anchor="variadic-parameters">
                Callable with prefixed and suffixed variadic parameters
            </a>
            <code-block lang="typescript">
            callable(...Type ...$name): T
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="warning.svg"/> <a anchor="ref-15-1">Works with restrictions <sup>1</sup></a></td>
        <td><icon src="warning.svg"/> <a anchor="ref-15-2">Works with restrictions <sup>2</sup></a></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="3">
            <tip>
                This expression is incorrect because the "variadic" 
                lexeme <code>...</code> must be present in the parameter 
                in a single copy. The parser must throw a syntax or 
                semantic error.
            </tip>
            <deflist collapsible="true">
                <def title="1. Psalm throws an internal error instead of a valid error message" id="ref-15-1">
                    <code-block lang="typescript">
                    callable(...int ...$name)
                    // Internal Psalm error on line ...: 
                    // Unrecognised parse tree type Psalm\Internal\Type\ParseTree\CallableParamTree
                    </code-block>
                    <a href="https://psalm.dev/r/d802f62027">Open in psalm.dev</a>
                </def>
                <def title="2. PHPStan does not support prefixed variadic parameters" id="ref-15-2">
                    <code-block lang="typescript">
                    callable(...int ...$name)
                    // PHPDoc tag @return has invalid value (callable(...int ...$name): T): 
                    // Unexpected token "(", expected TOKEN_HORIZONTAL_WS at ...
                    </code-block>
                    <a href="https://phpstan.org/r/f1f73f78-cebe-4cf6-887c-e6516d684230">Open in phpstan.org</a>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td colspan="4">
            <a href="callable-types.md" anchor="variadic-parameters">
                Callable with optional variadic parameters
            </a>
            <code-block lang="typescript">
            callable(Type...=): T
            callable(...Type=): T
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="warning.svg"/> <a anchor="ref-16-1">Works with restrictions <sup>1</sup></a></td>
        <td>
            <icon src="ko.svg" />
            <a href="https://phpstan.org/r/0a7c61e9-691d-414c-983c-b5c32f472214">
                No Error
            </a>
        </td>
    </tr>
    <tr>
        <td></td>
        <td colspan="3">
            <tip>
                This expression is incorrect because any variadic 
                parameter is already optional. The parser must 
                throw a syntax or semantic error.
            </tip>
            <deflist collapsible="true">
                <def title="1. Psalm error depends on parameter definition syntax" id="ref-16-1">
                    <code-block lang="typescript">
                    // OK: Cannot have variadic param with a default in docblock
                    callable(...T=): T
                    </code-block>
                    <code-block lang="typescript">
                    // Bug: Cannot have duplicate tokens in docblock
                    callable(T...=): T
                    </code-block>
                    <a href="https://psalm.dev/r/7e5482be69">Open in psalm.dev</a>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td colspan="4">
            <a href="callable-types.md" anchor="variadic-parameters">
                Callable with named variadic parameters
            </a>
            <code-block lang="typescript">
            callable(Type ...$name): T
            callable(...Type $name): T
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="warning.svg"/> <a anchor="ref-17-1">Works with restrictions <sup>1</sup></a></td>
        <td><icon src="warning.svg"/> <a anchor="ref-17-2">Works with restrictions <sup>2</sup></a></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="3">
            <deflist collapsible="true">
                <def title="1. Psalm throws an internal error if using prefix syntax" id="ref-17-1">
                    <code-block lang="typescript">
                    callable(...Type $name): T
                    // Internal Psalm error on line ...: 
                    // Unrecognised parse tree type Psalm\Internal\Type\ParseTree\CallableParamTree
                    </code-block>
                    <a href="https://psalm.dev/r/2cf0778b29">Open in psalm.dev</a>
                </def>
                <def title="2. PHPStan does not support prefixed variadic parameters" id="ref-17-2">
                   <code-block lang="typescript">
                    callable(...Type $name): T
                    // PHPDoc tag @return has invalid value (callable(...Type $name): T): 
                    // Unexpected token "(", expected TOKEN_HORIZONTAL_WS at ...
                    </code-block>
                    <a href="https://phpstan.org/r/13de8276-eeac-4a0f-8344-06025ca3c781">Open in phpstan.org</a>
                </def>
            </deflist>
        </td>
    </tr>
    <tr>
        <td colspan="4">
            <a href="callable-types.md" anchor="variadic-parameters">
                Callable with output named variadic parameters
            </a>
            <code-block lang="typescript">
            callable(Type &...$name): T
            callable(...Type &$name): T
            </code-block>
        </td>
    </tr>
    <tr>
        <td></td>
        <td><icon src="ok.svg"/></td>
        <td><icon src="warning.svg"/> <a anchor="ref-18-1">Works with restrictions <sup>1</sup></a></td>
        <td><icon src="warning.svg"/> <a anchor="ref-18-2">Works with restrictions <sup>2</sup></a></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="3">
            <deflist collapsible="true">
                <def title="1. Psalm does NOT support literal types" id="ref-18-1">
                    <code-block lang="typescript">
                    // OK
                    callable(T &...$name): U
                    </code-block>
                    <code-block lang="typescript">
                    // Bug: Intersection types must be all objects,
                    // Psalm\Type\Atomic\TInt provided in docblock
                    callable(int &...$name): U
                    </code-block>
                    <a href="https://psalm.dev/r/33dde88598">Open in psalm.dev</a>
                </def>
                <def title="2. PHPStan does not support prefixed variadic parameters" id="ref-18-2">
                   <code-block lang="typescript">
                    callable(...Type &$name): T
                    // PHPDoc tag @return has invalid value (callable(...Type &$name): T): 
                    // Unexpected token "(", expected TOKEN_HORIZONTAL_WS at ...
                    </code-block>
                    <a href="https://phpstan.org/r/c5eba3e1-8c59-4066-a96a-070b82632495">Open in phpstan.org</a>
                </def>
            </deflist>
        </td>
    </tr>
</table>
