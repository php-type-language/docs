# Configuration

Configuration is a `TypeLang\Mapper\Runtime\Configuration` DTO passed to the
`TypeLang\Mapper\Mapper` constructor, containing a list of general mapper
settings.

```php
$mapper = new TypeLang\Mapper\Mapper(
    config: new TypeLang\Mapper\Runtime\Configuration(
        // true|false|null
        isObjectsAsArrays: null,
        // true|false|null
        isStrictTypes: null,
        // Psr\Log\LoggerInterface|null
        logger: null,
        // TypeLang\Mapper\Runtime\Tracing\TracerInterface|null
        tracer: null,
    ),
);
```

## Objects As Arrays

This option is responsible for converting user defined objects 
PHP into associative arrays.

<note>
This option is only applicable if the output can be an array or an object.
For example, in the <a href="standard-platform.md">standard platform</a>.
</note>

<warning>
If the configuration value is not set, the option will
be <b>enabled</b> (<code>isObjectsAsArrays: true</code>).
</warning>

<tabs>
<tab title="isObjectsAsArrays: null">
<code-block lang="php">
<![CDATA[
$config = new Configuration(isObjectsAsArrays: null);

$result = new Mapper(config: $config)
    ->normalize((object)['key' => 'value']);

// array:1 [
//   "key" => "value"
// ]
]]>
</code-block>
</tab>
<tab title="isObjectsAsArrays: true">
<code-block lang="php">
<![CDATA[
$config = new Configuration(isObjectsAsArrays: true);

$result = new Mapper(config: $config)
    ->normalize((object)['key' => 'value']);

// array:1 [
//   "key" => "value"
// ]
]]>
</code-block>
</tab>
<tab title="isObjectsAsArrays: false">
<code-block lang="php">
<![CDATA[
$config = new Configuration(isObjectsAsArrays: false);

$result = new Mapper(config: $config)
    ->normalize((object)['key' => 'value']);

// object(StdClass) {
//   "key": "value"
// }
]]>
</code-block>
</tab>
</tabs>

## Strict Types

This option is responsible for disabling the strict comparison 
mode and attempts to adapt the values.

<warning>
If the configuration value is not set, the option will
be will depend on which direction is used:
<list>
<li>
    <b>Normalization</b>: 
    <code>isStrictTypes: false</code>
</li>
<li>
    <b>Denormalization</b>: 
    <code>isStrictTypes: true</code>
</li>
</list>
</warning>


<tabs>
<tab title="isStrictTypes: null">
<code-block lang="php">
<![CDATA[
$config = new Configuration(isStrictTypes: null);

$result = new Mapper(config: $config)
    ->normalize(['k' => 42], 'list<string>');

// array:1 [
//   0 => "42"
// ]

$result = new Mapper(config: $config)
    ->denormalize(['k' => 42], 'list<string>');

// TypeLang\Mapper\Exception\Mapping\InvalidValueException: 
// Passed value {"k": 42} is invalid
//
]]>
</code-block>
</tab>
<tab title="isStrictTypes: true">
<code-block lang="php">
<![CDATA[
$config = new Configuration(isStrictTypes: true);

$result = new Mapper(config: $config)
    ->normalize(['k' => 42], 'list<string>');

// TypeLang\Mapper\Exception\Mapping\InvalidIterableValueException:
// Passed value 42 on "k" in {"k": 42} is invalid at $[0]
//

$result = new Mapper(config: $config)
    ->denormalize(['k' => 42], 'list<string>');

// TypeLang\Mapper\Exception\Mapping\InvalidValueException:
// Passed value {"k": 42} is invalid
//
]]>
</code-block>
</tab>
<tab title="isStrictTypes: false">
<code-block lang="php">
<![CDATA[
$config = new Configuration(isStrictTypes: false);

$result = new Mapper(config: $config)
    ->normalize(['k' => 42], 'list<string>');

// array:1 [
//   0 => "42"
// ]

$result = new Mapper(config: $config)
    ->denormalize(['k' => 42], 'list<string>');

// array:1 [
//   0 => "42"
// ]
]]>
</code-block>
</tab>
</tabs>