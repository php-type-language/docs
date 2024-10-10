# Generic Types

<secondary-label ref="phpstan"/>
<secondary-label ref="psalm"/>
<secondary-label ref="storm"/>
<show-structure for="chapter" depth="2"/>

Each type can take arguments containing other type declarations. Validation of
arguments and their number lies on the implementing side; the parser does not
limit their number or nesting and does not check their semantic correctness in
any way.

Each argument is enclosed in triangle brackets `<` and `>` and separated by a
comma (`,`).

<note>

Please note that throughout the documentation the term "**template argument**"
is used because the similar term "**template parameter**" is used to describe
a declaration.

If the PHP language supported generic types, then the declaration
(in pseudo-language) of the type:

* `interface Traversable<node of array-key, TValue of mixed>` would contain
  **parameters**

and the reference to the type:

* `Traversable<int<0, max>, string>` would contain **arguments**.

</note>

<tabs>
<tab title="Examples">

> Reference to an existing class, interface or enum with template arguments.
> ```typescript
> Path\To\ExampleClass<T, U>
> ```

> Reference to builtin type with template arguments containing other generics.
>  ```typescript
>  iterable<int<0, max>, Collection<User>>
>  ```

> Trailing comma is allowed.
>  ```typescript
>  HashMap<Request, User,>
>  ```

</tab>
<tab title="Counterexamples">

> Missing template argument.
> ```typescript
> example<>
> ```
> ```
> Syntax error, unexpected ">"
> ```
> {collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}
> {style="warning"}

> Leading comma is NOT allowed.
> ```typescript
> example<,T>
> ```
> ```
> Syntax error, unexpected ","
> ```
> {collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}
> {style="warning"}

</tab>
</tabs>

## Call-Site Hints

<secondary-label ref="phpstan"/>

Each template argument allows you to define an additional hint, which can be 
used, for example, in static analyzers to indicate the
[call-site variance](https://phpstan.org/blog/guide-to-call-site-generic-variance#call-site-variance).

> One template argument can contain only one hint.
> {style="warning"}

<tabs>
<tab title="Examples">

> Any identifier (in this case "`covariant`") before the template argument`s 
> type is acceptable.
> ```typescript
> HashMap<array-key, covariant Request>
> ```

</tab>
<tab title="Counterexamples">

> Only valid identifiers are allowed.
> ```typescript
> Collection<42 User>
> ```
> ```php
> Syntax error, unexpected "User"
> ```
> {collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}
> {style="warning"}

> Multiple hints are not allowed.
> ```typescript
>  HashMap<array-key, some covariant Request>
> ```
> ```
> Syntax error, unexpected "Request"
> ```
> {collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}
> {style="warning"}

</tab>
</tabs>


## List Syntax

<secondary-label ref="phpstan"/>
<secondary-label ref="psalm"/>
<secondary-label ref="storm"/>

In addition to modern list declarations such as `list<int>` or
`array<array-key, int>`, the legacy `int[]` syntax is allowed.

<tabs>
<tab title="Examples">

> List (array) of `User` objects.
> ```typescript
> User[]
> ```

> List of list (nested array) of `User` objects.
> ```typescript
> User[][]
> ```

</tab>
<tab title="Counterexamples">

> Incorrect syntax (was [used in the PSR](https://github.com/php-fig/event-dispatcher/blob/1.0.0/src/ListenerProviderInterface.php#L14) by mistake).
> ```typescript
> User[int]
> ```
> ```
> Syntax error, unexpected "int"
> ```
> {collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}
> {style="warning"}

</tab>
</tabs>


## Attributes

<primary-label ref="experimental"/>
<secondary-label ref="tl1.1"/>

Each template argument allows you to define list of additional attributes. 
An attribute is additional metadata for an argument.

<tabs>
<tab title="Examples">

> Simple attribute with one argument for each template argument.
> ```typescript
> HashMap<#[name("key")] T, #[name("value")] U>
> ```

> Multiple attributes in one group.
> ```typescript
> HashMap<#[name("key"), out] T>
> ```

> Multiple attribute groups.
> ```typescript
> HashMap<#[name("key")] #[out] T>
> ```

</tab>
<tab title="Counterexamples">

> Only valid identifiers are allowed.
> ```typescript
> Collection<#[42] User>
> ```
> ```
> Syntax error, unexpected "42"
> ```
> {collapsible="true" collapsed-title="TypeLang\Parser\Exception\ParseException"}
> {style="warning"}

</tab>
</tabs>
