---
description: Language Literal Types
---

# Literals

As a type description, specific values corresponding to a specific type are allowed: `bool`, `string`, `int`, `float` and `null`.

### Boolean And Nulls

The literals `true` and `false` are used as the value of the PHP `bool` type.&#x20;

For PHP `null` types, the `null` literal is used.&#x20;

For other types the logic is more complicated.

### Strings

The syntax of string types is similar to that in PHP: The string allows single (`'`) and double (`"`) quotes, which can be escaped using a backslash (`\`).

* `'single-quoted string wrapped by \' symbol'`
* `"double-quoted string wrapped by \" symbol"`

Strings in single quotes are processed "as is", strings in double quotes allow insertion of special sequences.

#### Escape Sequences

All control sequences are similar to the PHP language: [https://www.php.net/manual/en/language.types.string.php](https://www.php.net/manual/en/language.types.string.php)

* `\n` — Line break (`0x0A` code)
* `\r` — Carriage return (`0x0D` code)
* `\t` — Tab (`0x09` code)
* `\v` — Vertical Tab (`0x0B` code)
* `\e` — Escape (`0x1B` code)
* `\f` — Form Feed (`0x0C` code)
* `\$` — Dollar Sign (`0x24` code)

#### Hexadecimal Sequences

The sequence of characters matching the regular expression `[0-9A-Fa-f]{1,2}` is a character in hexadecimal notation (e.g. `"\x41" === "A"`)

* `"\x48\x65\x6c\x6c\x6f\x20\x57\x6f\x72\x6c\x64"` — `"Hello World"` string equivalent.

#### Unicode Sequences

the sequence of characters matching the regular expression `[0-9A-Fa-f]+` is a Unicode codepoint, which will be output to the string as that codepoint's UTF-8 representation. The braces are required in the sequence. E.g. `"\u{41}" === "A"`

* `"\u{1F60A}"` — [`"😊"` unciode char](https://www.compart.com/en/unicode/U+1F60A) equivalent.

### Integers

The syntax of numbers is similar to the PHP language. Binary, octal, decimal and hexadecimal number systems are supported.

Decimal numbers can contain any digits from `0` to `9` (leading `0` not allowed) and must match the regular expression `[1-9][0-9]*`. For any other numbers, a special prefixed format is used, described below.

#### Binary

Every binary number is prefixed with `0b` and can only contain the numbers `1` and `0` and must match the regular expression `0b[0-1]+`.

* ✔️ **0b10101101** — Сorrect (number `173`).
* ❌ **0b101042** —  Incorrect: Can only contain "1" and "0".

#### Octal

Every octal number is prefixed with `0o` and can only contain the numbers between `0` and `7` and must match the regular expression `0o[0-7]+` or `[0-7]+`.

{% hint style="info" %}
For compatibility with older versions of PHP, the prefix `0` is allowed.
{% endhint %}

* ✔️ **0o42** — Сorrect (number `34`).
* ✔️ **042** — Сorrect (number `34`, legacy PHP syntax).
* ❌ **0o4281** —  Incorrect: Can only contain numbers between `0` and `7`.

#### Hexadecimal

Every hexadecimal number is prefixed with `0x` and can only contain the numbers between `0` and `f` and must match the regular expression `0x[0-9a-fA-F]+`.

* ✔️ **0xDEAD** — Сorrect (number `57005`).
* ✔️ **042** — Сorrect (number `34`, legacy PHP syntax).
* ❌ **0o4281** —  Incorrect: Can only contain numbers between `0` and `7`.
