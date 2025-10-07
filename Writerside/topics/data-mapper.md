# Data Mapper

<primary-label ref="mapper-component"/>
<show-structure for="chapter" depth="2"/>

A mapper is a system that transforms internal data into external data 
(normalization) and vice versa (denormalization) using a set of declarative
transformation rules.

A mapper can be used in the ACL layer (anti-corruption) for transforming DTOs 
or for interacting with the database (converting primitive data into full-fledged
entities and value objects). It can also be used for serialization and 
deserialization of data in command or query buses. It can also be used to 
transform JSON data in APIs into full-fledged DTOs, and much more.

## Installation

<tldr>
    <p>
        Via <a href="https://getcomposer.org/doc/01-basic-usage.md#installing-dependencies">Composer</a>:
        <code lang="bash">composer require type-lang/mapper</code>
    </p>
</tldr>

**Requirements:**
* `PHP >= 8.1`
* `ext-pcre`

## Usage

To create a mapper, you should use instantiation of the `TypeLang\Mapper\Mapper` 
object, after which the code is ready to use.

```php
$mapper = new TypeLang\Mapper\Mapper();
```

The mapper contains two transformation directions:
- **Normalization** - the process of converting complex internal application 
  data to external data (API, database, etc.)
    ```php
    $mapper = new TypeLang\Mapper\Mapper();

    $result = $mapper->normalize(new Example());
    ```
- **Denormalization** - the process of converting primitive data to 
  application data types
    ```php
    $mapper = new TypeLang\Mapper\Mapper();

    $result = $mapper->denormalize($data, Example::class);
    ```

As you can see, the denormalization process requires information about the type 
to which the incoming data will be converted.

With normalization, the type is optional, as it can be determined automatically 
based on the incoming data, but can also be explicitly specified as a 
second argument.

```php
$mapper->normalize(new Example(), Example::class);
```

The type specified in the second argument of the normalization and 
denormalization methods can be arbitrary, as described in the 
[language grammar](introduction.md) section.

```php
$result = $mapper->normalize(new Example(), <<<'PHP'
    object{
        field: non-empty-string,
        another: int<0, max>,
    }
    PHP);
```

The types themselves, their availability, capabilities, functionality and 
behavior depend on the selected platform.

<note>
The general <b>standard</b> <a href="platforms.md">platform</a> one is used by default
</note>