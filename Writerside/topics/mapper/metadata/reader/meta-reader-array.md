# Array Reader

<link-summary>
Reads metadata using passed PHP array
</link-summary>

<tldr>
    <p>
        Class:
        <code>TypeLang\Mapper\Mapping\Reader\ArrayReader</code>
    </p>
    Arguments:
    <list>
        <li>
            (optional) <code>$config</code>: 
            <code>array&lt;array-key, mixed></code>
        </li>
        <li>
            (optional) <code>$delegate</code>: 
            <code>TypeLang\Mapper\Mapping\Reader\ReaderInterface</code>
        </li>
    </list>
</tldr>

The PHP Array reader allows you to specify metadata declaratively using simple 
PHP arrays. As an example, let's specify simple information for the class below:

```php
final class UserInfo
{
    public function __construct(
        public string $name,
    ) {}
}
```

To create an array reader with the specified configuration rules, you should 
create a new `ArrayReader` instance, passing the settings in the `$config` 
property.

```php
use TypeLang\Mapper\Mapping\Reader\ArrayReader;

$reader = new ArrayReader(config: [
    // Example settings for class "UserInfo"
    UserInfo::class => [
        'normalize_as_array' => true,
        'properties' => [
            'name' => 'non-empty-string',
        ],
    ],
]);
```

<tip>
You can find more information about <b>metadata configuration</b> rules
in the <a href="meta-configuration.md">"metadata configuration" section</a>.
</tip>

<note>
To enable validation of <code>ArrayReader</code> config, you should add
<code>justinrainbow/json-schema</code> package.

<code-block lang="shell">
composer require justinrainbow/json-schema --dev
</code-block>
</note>

If you need to supplement metadata from another reader, you should
specify this explicitly using `$delegate` argument:

```php
use TypeLang\Mapper\Mapping\Reader\ArrayReader;

$reader = new ArrayReader(
    config: [ ... ],
    delegate: new AnotherExampleReader(),
);
```