---
description: Language Literal Types
---

# Literals

## Syntax

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

{% hint style="info" %}
Please note that in addition to numbers, underscores (`_`) are allowed.
{% endhint %}

Decimal numbers can contain any digits from `0` to `9` (leading `0` not allowed) and must match the regular expression `[1-9][0-9]*`. For any other numbers, a special prefixed format is used, described below.

#### Binary

Every binary number is prefixed with `0b` or `0B` and can only contain the numbers `1` and `0` and must match the regular expression `0b[0-1]+`.

* ✔️ **0b10101101** — Сorrect (number `173`).
* ✔️ **0B1010** — Сorrect (number `10`).
* ✔️ **0b10\_10\_11\_01** — Сorrect (also number `173`).
* ❌ **0b101042** —  Incorrect: Can only contain "1" and "0".

#### Octal

Every octal number is prefixed with `0o` or `0O` and can only contain the numbers between `0` and `7` and must match the regular expression `0o[0-7]+` or `[0-7]+`.

{% hint style="info" %}
For compatibility with older versions of PHP, the prefix `0` is also allowed.
{% endhint %}

* ✔️ **0o42** — Сorrect (number `34`).
* ✔️ **0O42** — Сorrect (also number `34`).
* ✔️ **0o42\_23** — Сorrect (number `2195`).
* ✔️ **042** — Сorrect (number `34`, legacy octal PHP syntax).
* ❌ **0o4281** —  Incorrect: Can only contain numbers between `0` and `7`.

#### Hexadecimal

Every hexadecimal number is prefixed with `0x` or `0X` and can only contain the numbers between `0` and `F` and must match the regular expression `0x[0-9a-fA-F]+`.

* ✔️ **0xDEAD** — Сorrect (number `57005`).
* ✔️ **0XDEAD** — Сorrect (also number `57005`).
* ✔️ **0xDEAD\_BEEF** — Сorrect (number `3735928559`).
* ❌ **0xHELL** —  Incorrect: Can only contain numbers between `0` and `F`.

## AST API

The API of each literal AST node implements the `TypeLang\Parser\Node\Literal\LiteralNodeInterface` interface, which contains the following methods:

```php
/**
 * @template TValue of mixed
 */
interface LiteralNodeInterface extends \Stringable
{
    /**
     * Returns a PHP representation of the literal value.
     *
     * @return TValue
     */
    public function getValue(): mixed;

    /**
     * Returns the original literal value specified in the token.
     */
    public function getRawValue(): string;

    /**
     * Returns the processed ({@see getValue()}) literal value as a string.
     */
    public function __toString(): string;
}
```

This way you can get arbitrary values of the processed node:

```php
$parser = new \TypeLang\Parser\Parser();

$integer = $parser->parse(<<<'PHP'
    1234_5678_1234_5678_1234_5678
    PHP);

echo 'PHP Value: [' . $integer->getValue() . "]\n";
echo 'Raw Value: [' . $integer->getRawValue() . "]\n";

// PHP Value: [9223372036854775807]
// Raw Value: [1234_5678_1234_5678_1234_5678]

$string = $parser->parse(<<<'PHP'
    "Hello \u{1F60A}"
    PHP);

echo 'PHP Value: [' . $string->getValue() . "]\n";
echo 'Raw Value: [' . $string->getRawValue() . "]\n";

// PHP Value: [Hello 😊]
// Raw Value: ["Hello \u{1F60A}"]
```
