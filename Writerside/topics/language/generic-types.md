# Generics

Each type can take arguments containing other type declarations. Validation of
arguments and their number lies on the implementing side; the parser does not
limit their number or nesting and does not check their semantic correctness in
any way.

Each argument is enclosed in triangle brackets `<` and `>` and separated by a
comma (`,`).

> Please note that throughout the documentation the term "**template argument**"
> is used because the similar term "**template parameter**" is used to describe
> a declaration.
>
> If the PHP language supported generic types, then the declaration
> (in pseudo-language) of the type:
>
> * `interface Traversable<TKey of array-key, TValue of mixed>` would contain **parameters**
>
> and the reference to the type:
>
> * `Traversable<int<0, max>, string>` would contain **arguments**.

<tabs>
<tab title="examples">

* ✔️ **example\<T>**
* ✔️ **iterable\<int<0, max>, non-empty-string>**
* ✔️ **HashMap\<Request, User,>** — Trailing comma is allowed.
</tab>
<tab title="counterexamples">

* ❌ **example<>** — Missing template argument.
* ❌ **example<,T>** — Leading comma is not allowed.
</tab>
</tabs>

### List Syntax

In addition to modern list declarations such as `list<int>` or
`array<array-key, int>`, the legacy `int[]` syntax is allowed.

<tabs>
<tab title="examples">

* ✔️ **User\[]** — Correct (list of `User` type).
* ✔️ **User\[]\[]** — Correct (list of lists of `User` type, similar to `list<list<User>>`).
</tab>
<tab title="counterexamples">

* ❌ **User\[int]** —  Incorrect syntax (was [used in the PSR](https://github.com/php-fig/event-dispatcher/blob/1.0.0/src/ListenerProviderInterface.php#L14) by mistake).
</tab>
</tabs>
