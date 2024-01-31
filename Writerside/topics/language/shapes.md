# Shapes

Each **composite** type can be rigidly described by a structural type called a
"shape". A shape within the PHP language can be applied to any array or object
and contain either implicit or explicit keys.

> Support for other types of **keys**, such as const mask (`Class::CONST_*)` is not
> currently available.
{style="warning"}

<tabs>
<tab title="named explicit keys">

```php
array{
    a: first,
    b: second
}
```
</tab>
<tab title="numeric explicit keys">

```php
array{
    1: first,
    42: second
}
```
</tab>
<tab title="string explicit keys">

```php
array{
    "name-some": first,
    "escape\nchars": second
}
```
</tab>
<tab title="implicit keys">

```php
array{
    first,
    second
}
```
</tab>
</tabs>

> The use of **explicit** and **implicit** keys in one shape is not allowed 
> and causes an exception during parsing.
> ```php
> array{
>     named: first,
>     second // Error: Cannot mix numeric and named keys.
> }
> ```
{style="warning"}

### Unsealed Shapes

Unsealed (unclosed) shapes mean that the composite type can contain additional
fields beyond those described in the shape. Such types must be terminated with
the "`...`".

<compare first-title="Sealed" second-title="Unsealed">

```php
array{
    key: type,
}
```

```php
array{
    key: type,
    ...
}
```
</compare>

In addition, such shapes can describe template arguments (types) for values or for keys and values,
which are described after the ellipsis (`...`) char and contain
syntax [similar to generics](generic-types.md).

<compare first-title="Without Arguments" second-title="With Arguments">

```php
array{
    user: User,
    ...
}
```

```php
array{
    user: User,
    ...<string, object>
}
```
</compare>

