# Basic Types

The parser does not impose restrictions on type naming. The type name must begin with the 
characters `[a-zA-Z\x80-\xff]` (any letter) and `_` (underscore) and can contain any characters 
within the limit `[a-zA-Z0-9\x80-\xff]` (any letter), as well as the characters `_` (underscore) and `-` (dash).

> For our purposes here, a **letter** is `a-z`, `A-Z`, and the bytes from 128 through 255 (`0x80-0xff`).
{style="note"}

In this case, the only difference from [the PHP grammar](https://www.php.net/manual/en/language.variables.basics.php) 
is that a **dash** (`-`) symbol is allowed in the middle of the name.

In addition, it is worth noting that the case-insensitive names `true`, `false` and `null` are registered 
PHP literals, so their use as a custom type name is **unacceptable**.

<tabs>
<tab title="examples">

* ✔️ **example**
* ✔️ **ExampleTypeName**
* ✔️ **example-type** — Dash (`-`) char is allowed.
* ✔️ **example-42** — Digits is allowed.
* ✔️ **true-type** — The reserved keyword (`true`) is allowed as part of the full name.
</tab>
<tab title="counterexamples">

* ❌ **true** — Reserved name.
* ❌ **TRUE** — Reserved name (case-insensitive).
* ❌ **42type** — Starts with a number.
* ❌ **-type** — Starts with a dash symbol.
</tab>
</tabs>

## Namespace

Each name can contain a namespace symbol (`\` — backslash), which is [similar to that in PHP](https://www.php.net/manual/en/language.namespaces.rationale.php). The separator 
can be located either in the middle or at the beginning of any type name. End position is not allowed.

The namespace delimiter can be used in conjunction with keywords such as `true`, `false`, or `null` to explicitly 
indicate a type reference.

<tabs>
<tab title="examples">

* ✔️ **example\name** — Relative class <tooltip term="FQN">FQN</tooltip>.
* ✔️ **\prefixed\example\name** — Absolute class <tooltip term="FQN">FQN</tooltip>.
</tab>
<tab title="counterexamples">

* ❌ **true\null** — Reserved name.
* ❌ **example\name\\** — Trailing delimiter.
* ❌ **example\2type** — Name starts with a number.
</tab>
</tabs>
