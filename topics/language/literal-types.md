# Literals

As a type description, specific values corresponding to a specific type are
allowed: `bool`, `string`, `int`, `float` and `null`.

## Boolean And Null

The literals `true` and `false` are used as the value of the PHP `bool` type.

For PHP `null` types, the `null` literal is used.&#x20;

For other types the logic is more complicated.

## Strings

The syntax of string types is similar to that in PHP: The string allows single
(`'`) and double (`"`) quotes, which can be escaped using a backslash (`\`).

* `'single-quoted string wrapped by \' symbol'`
* `"double-quoted string wrapped by \" symbol"`

Strings in single quotes are processed "as is", strings in double quotes allow
insertion of special sequences.

### Escape Sequences

All control sequences are similar to the PHP language: [https://www.php.net/manual/en/language.types.string.php](https://www.php.net/manual/en/language.types.string.php)

* `\n` — Line break (`0x0A` code)
* `\r` — Carriage return (`0x0D` code)
* `\t` — Tab (`0x09` code)
* `\v` — Vertical Tab (`0x0B` code)
* `\e` — Escape (`0x1B` code)
* `\f` — Form Feed (`0x0C` code)
* `\$` — Dollar Sign (`0x24` code)

### Hexadecimal Sequences

The sequence of characters matching the regular expression `[0-9A-Fa-f]{1,2}` is
a character in hexadecimal notation (e.g. `"\x41" === "A"`)

* `"\x48\x65\x6c\x6c\x6f\x20\x57\x6f\x72\x6c\x64"` — `"Hello World"` string equivalent.

### Unicode Sequences

the sequence of characters matching the regular expression `[0-9A-Fa-f]+` is a
Unicode codepoint, which will be output to the string as that codepoint's UTF-8
representation. The braces are required in the sequence. E.g. `"\u{41}" === "A"`

* `"\u{1F60A}"` — [`"😊"` unciode char](https://www.compart.com/en/unicode/U+1F60A) equivalent.

## Integer

The syntax of integer numbers is similar to the PHP language. Binary, octal,
decimal and hexadecimal number systems are supported.

> Please note that in addition to numbers, underscores (`_`) are allowed.
{style="note"}

Decimal numbers can contain any digits from `0` to `9` (leading `0` not allowed)
and must match the regular expression `[1-9][0-9]*`. For any other numbers,
a special prefixed format is used, described below. Negative values are prefixed
with a minus (`-`).

### Binary

Every binary number is prefixed with `0b` or `0B` and can only contain the
numbers `1` and `0` and must match the regular expression `0b[0-1]+`.

<tabs>
<tab title="examples">

* ✔️ **0b10101101** — Number `173`.
* ✔️ **0B1010** — Number `10`.
* ✔️ **-0b1010** — Number `-10`.
* ✔️ **0b10\_10\_11\_01** — Also number `173`.
</tab>
<tab title="counterexamples">

* ❌ **0b101042** — Binary numbers can only contain `1` and `0` digits.
</tab>
</tabs>

### Octal

Every octal number is prefixed with `0o` or `0O` and can only contain the
numbers between `0` and `7` and must match the regular expression
`0o[0-7]+` or `[0-7]+`.

> For compatibility with older versions of PHP, the prefix `0` is also allowed.
{style="note"}

<tabs>
<tab title="examples">

* ✔️ **0o42** — Number `34`.
* ✔️ **0O42** — Also number `34`.
* ✔️ **0o42\_23** — Number `2195`.
* ✔️ **042** — Number `34`, legacy octal PHP syntax.
</tab>
<tab title="counterexamples">

* ❌ **0o4281** — Octal numbers can only contain digits between `0` and `7`.
</tab>
</tabs>

### Hexadecimal

Every hexadecimal number is prefixed with `0x` or `0X` and can only contain the
numbers between `0` and `F` and must match the regular expression `0x[0-9a-fA-F]+`.

<tabs>
<tab title="examples">

* ✔️ **0xDEAD** — Number `57005`.
* ✔️ **0XDEAD** — Also number `57005`.
* ✔️ **0xDEAD\_BEEF** — Number `3735928559`.
</tab>
<tab title="counterexamples">

* ❌ **0xHELL** — Can only contain digits between `0` and `F`.
</tab>
</tabs>

## Float

The syntax of float numbers is similar to the PHP language. Basic floating point
syntax and scientific notation are supported.

Every floating point number accepts the format `[0-9]+\.[0-9]+`. The leading or
trailing number may be omitted. Negative values are prefixed with a minus (`-`.

<tabs>
<tab title="examples">

* ✔️ **0.9** — Correct.
* ✔️ **.9** — Also number `0.9`.
* ✔️ -**.9** — Also number `0.9`.
* ✔️ **1.** — Number `1.0`.
</tab>
<tab title="counterexamples">

* ❌ **.** — Only leading or trailing number may be omitted (not both).
* ❌ **0.0A** — Only number between `0` and `9` are allowed.
</tab>
</tabs>

### Scientific Notation

Scientific notation is a way of expressing numbers that are too large or too small to be 
conveniently written in decimal form, since to do so would require writing out an 
inconveniently long string of digits.

<tabs>
<tab title="examples">

* ✔️ **10e2** — Number `1000.0`.
* ✔️ **10E2** — Also number `1000.0`.
* ✔️ **10e-2** — Also number `0.1`.
</tab>
<tab title="counterexamples">

* ❌ **10e-F** — Incorrect.
</tab>
</tabs>

## AST API

The API of each literal AST node implements the
`TypeLang\Parser\Node\Literal\LiteralNodeInterface` interface, which contains
the following methods:

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

<tabs>
<tab title="Integer Literal">

```php
$parser = new \TypeLang\Parser\Parser();

$integer = $parser->parse(<<<'PHP'
    1234_5678_1234_5678_1234_5678
    PHP);

echo 'PHP Value: [' . $integer->getValue() . "]\n";
echo 'Raw Value: [' . $integer->getRawValue() . "]\n";

// PHP Value: int(9223372036854775807)
// Raw Value: string("1234_5678_1234_5678_1234_5678") 
```
</tab>
<tab title="String Literal">

```php
$parser = new \TypeLang\Parser\Parser();

$string = $parser->parse(<<<'PHP'
    "Hello \u{1F60A}"
    PHP);

echo 'PHP Value: [' . $string->getValue() . "]\n";
echo 'Raw Value: [' . $string->getRawValue() . "]\n";

// PHP Value: string("Hello 😊")
// Raw Value: string("Hello \u{1F60A}")
```
</tab>
</tabs>