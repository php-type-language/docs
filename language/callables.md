---
description: Functional (Callable) Types
---

# Callables

Callable types describe an arbitrary type that describes a function.

Each callable MAY have a list of parameters and/or a return type definition.

* ✔️ **foo()** — Correct: Callable without parameters and return type.
* ✔️ **foo(): void** — Correct: Callable without parameters with return type.
* ✔️ **foo(T)** — Correct: Callable with 1 parameter without return type.
* ✔️ **foo(A, B, C): void** — Correct.
* ✔️ **a( b(), c(?C): mixed ): void** — Correct.

### Named Parameters

The name after the type of the parameter defines the parameter that
[allows passing by name](https://www.php.net/manual/en/functions.arguments.php#functions.named-arguments).&#x20;

The name must appear after the parameter type and begin with a "`$`" sign.
Just like in the PHP language.

* ✔️ **foo(T $name)** — Correct.
* ✔️ **foo(?A $a, B)** — Correct: Named parameter and anonymous.
* ❌ **foo($name)** — Incorrect: Type required.

### References

Passing a parameter by reference means that the function can change the passed
variable while it is running.

To indicate that a parameter is passed by reference, an "`&`" sign is used after
the type and before the name.

* ✔️ **foo(T&)** — Correct.
* ✔️ **foo(T &$name)** — Correct.
* ❌ **foo(\&T)** — Incorrect: Syntax error.

### Optional

An optional parameter means that the argument may not be passed when such a
function is called.

An optional parameter is indicated by the "`=`" sign at the end of the
parameter description.

* ✔️ **foo(T=)** — Correct.
* ✔️ **foo(T $name=)** — Correct.
* ✔️ **foo(T&=)** — Correct.
* ✔️ **foo(T &$name=)** — Correct.
* ❌ **foo(T= $name)** — Incorrect: Syntax error.

### Variadic

Variadic parameters are indicated by the "`...`" and can be placed either
_before the type_ or _before the parameter name._

{% hint style="danger" %}
Variadic parameter cannot be optional since they are already optional.
{% endhint %}

* ✔️ **foo(...T)** — Correct.
* ✔️ **foo(...T $name)** — Correct.
* ✔️ **foo(...T &$name)** — Correct.
* ✔️ **foo(T...)** — Correct.
* ✔️ **foo(T ...$name)** — Correct.
* ✔️ **foo(T &...$name)** — Correct.
* ❌ **foo(...T...)** — Incorrect: Must be one of two options.
* ❌ **foo(T ...$name=)** — Incorrect: Variadic parameter cannot be optional.
