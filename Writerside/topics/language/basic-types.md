# Basic Types

<secondary-label ref="phpstan"/>
<secondary-label ref="psalm"/>
<secondary-label ref="storm"/>
<show-structure for="chapter" depth="2"/>

The parser does not impose restrictions on type naming. The type name must begin
with the characters `[a-zA-Z\x80-\xff]` (any letter) and `_` (underscore) and 
can contain any characters within the limit `[a-zA-Z0-9\x80-\xff]` (any letter), 
as well as the characters `_` (underscore) and `-` (dash).

> For our purposes here, a **letter** is `a-z`, `A-Z`, and the bytes from 128
> through 255 (`0x80-0xff`).

In this case, the only difference from [the PHP grammar](https://www.php.net/manual/en/language.variables.basics.php) 
is that a **dash** (`-`) symbol is allowed in the middle of the name.

In addition, it is worth noting that the case-insensitive names `true`, `false`
and `null` are registered PHP literals, so their use as a custom type name 
is **unacceptable**.

<tabs>
<tab title="Examples">

> Example of a simple <tooltip term="Identifier">Identifier</tooltip>.
> ```typescript
> ExampleTypeName
> ```

> Dashes (`-`) in <tooltip term="Identifier">Identifier</tooltip> are also 
> acceptable.
> ```typescript
> example-type
> ```

> The reserved keyword (`true`) is allowed as part of the <tooltip
> term="Identifier">Identifier</tooltip>.
> ```typescript
> true-type
> ```

</tab>
<tab title="Counterexamples">

> The standalone keywords (`true`) is NOT available as an <tooltip
> term="Identifier">Identifier</tooltip> regardless of case and is parsed as a
> literal value rather than an <tooltip term="Identifier">Identifier</tooltip>.
> ```typescript
> TrUe
> ```
> ```php
> TypeLang\Parser\Node\Literal\BoolLiteralNode {
>     +offset: 0
>     +raw: "TrUe"
>     +value: true
> }
> ```
> {collapsible="true" collapsed-title="TypeLang\Parser\Node\Literal\BoolLiteralNode"}
> 
> {style="warning"}

> <tooltip term="Identifier">Identifiers</tooltip> cannot begin with digits
> (`0-9`) or a dash (`-`) symbol.
> ```typescript
> 42type
> ```
> ```
> Syntax error, unexpected "type"
> ```
> {collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}
> {style="warning"}

</tab>
</tabs>

## Namespace

<secondary-label ref="phpstan"/>
<secondary-label ref="psalm"/>
<secondary-label ref="storm"/>

Each name can contain a namespace symbol (`\` — backslash), which is 
[similar to that in PHP](https://www.php.net/manual/en/language.namespaces.rationale.php). The separator can be located either in the middle
or at the beginning of any <tooltip term="Identifier">Identifier</tooltip>. End
position is not allowed.

The namespace delimiter can be used in conjunction with keywords such as `true`,
`false`, or `null` to explicitly indicate a type reference.

<tabs>
<tab title="Examples">

> Relative class <tooltip term="FQN">FQN</tooltip> reference.
> ```typescript
> Example\Name
> ```

> Absolute class <tooltip term="FQN">FQN</tooltip> reference.
> ```typescript
> \Absolute\Type\Name
> ```

</tab>
<tab title="Counterexamples">

> <tooltip term="Identifier">Identifiers</tooltip> cannot contain keywords
> reserved for literal values.
> ```typescript
> true\null
> ```
> ```
> Syntax error, unexpected "\"
> ```
> {collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}
> {style="warning"}

> <tooltip term="FQN">FQN</tooltip> type names cannot end in `\` delimiter.
> ```typescript
> example\name\
> ```
> ```
> Syntax error, unexpected end of input
> ```
> {collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}
> {style="warning"}

</tab>
</tabs>
