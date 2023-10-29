---
description: Generic And Wrapping Types
---

# Generics

Each type can take arguments containing other type declarations. Validation of arguments and their number lies on the implementing side; the parser does not limit their number or nesting and does not check their semantic correctness in any way.

Each argument is enclosed in triangle brackets `<` and `>` and separated by a comma (`,`).

{% hint style="info" %}
Please note that throughout the documentation the term "**template argument**" is used because the similar term "**template parameter**" is used to describe a declaration.&#x20;

If the PHP language supported generic types, then the declaration (in pseudo-language) of the type `interface Traversable<TKey of array-key, TValue of mixed>` would contain **parameters**, and the reference to the type `Traversable<int<0, max>, string>` would contain **arguments**.
{% endhint %}

### Examples

* ✔️ **example\<T>** — Сorrect
* ✔️ **iterable\<int<0, max>, non-empty-string>** — Сorrect
* ✔️ **HashMap\<Request, User,>** — Сorrect: Trailing comma is allowed
* ❌ **example<>** —  Incorrect: Missing Template Argument
* ❌ **example<,T>** — Incorrect: Leading comma is not allowed
