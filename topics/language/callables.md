---
description: Functional (Callable) Types
---

# Callables

Callable types describe an arbitrary type that describes a function.

Each callable MAY have a list of parameters and/or a return type definition.

* ✔️ **foo()** — Callable without parameters and return type.
* ✔️ **foo(): void** — Callable without parameters with return type.
* ✔️ **foo(T)** — Callable with 1 parameter without return type.
* ✔️ **foo(A, B, C): void** .
* ✔️ **a( b(), c(?C): mixed ): void**.

### Named Parameters

The name after the type of the parameter defines the parameter that
[allows passing by name](https://www.php.net/manual/en/functions.arguments.php#functions.named-arguments).&#x20;

The name must appear after the parameter type and begin with a "`$`" sign.
Just like in the PHP language.

<tabs>
<tab title="examples">

* ✔️ **foo(T $name)**
* ✔️ **foo(?A $a, B)** — Named parameter and anonymous.
</tab>
<tab title="counterexamples">

* ❌ **foo($name)** — Type required.
</tab>
</tabs>

### References

Passing a parameter by reference means that the function can change the passed
variable while it is running.

To indicate that a parameter is passed by reference, an "`&`" sign is used after
the type and before the name.

<tabs>
<tab title="examples">

* ✔️ **foo(T&)**.
* ✔️ **foo(T &$name)**.
</tab>
<tab title="counterexamples">

* ❌ **foo(\&T)** — Syntax error.
</tab>
</tabs>

### Optional

An optional parameter means that the argument may not be passed when such a
function is called.

An optional parameter is indicated by the "`=`" sign at the end of the
parameter description.

<tabs>
<tab title="examples">

* ✔️ **foo(T=)**
* ✔️ **foo(T $name=)**
* ✔️ **foo(T&=)**
* ✔️ **foo(T &$name=)**
</tab>
<tab title="counterexamples">

* ❌ **foo(T= $name)** — Syntax error.
</tab>
</tabs>

### Variadic

Variadic parameters are indicated by the "`...`" and can be placed either
_before the type_ or _before the parameter name._

> Variadic parameter cannot be optional since they are already optional.
{style="warning"}

<tabs>
<tab title="examples">

* ✔️ **foo(...T)**
* ✔️ **foo(...T $name)**
* ✔️ **foo(...T &$name)**
* ✔️ **foo(T...)**
* ✔️ **foo(T ...$name)**
* ✔️ **foo(T &...$name)**
</tab>
<tab title="counterexamples">

* ❌ **foo(...T...)** — Must be one of two options.
* ❌ **foo(T ...$name=)** — Variadic parameter cannot be optional.
</tab>
</tabs>
