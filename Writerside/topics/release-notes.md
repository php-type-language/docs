# Release Notes

<show-structure for="chapter" depth="2"/>

## Versioning

TypeLang and its other first-party Components follow
[Semantic Versioning](https://semver.org/). Minor and patch releases should
never contain breaking changes.

Updates (including major ones) may be irregular, given the open source
and the lack of separate funding. However, support for stable work on all
supported versions of PHP is carried out as quickly as possible.

Support and availability of LTS versions is not expected yet.

When referencing the TypeLang Components from your application
or package, you should always use a version constraint such as `^1.0`, since
major releases of TypeLang do include breaking changes.

### Named Arguments

Breaking [named argument](https://www.php.net/manual/en/functions.arguments.php#functions.named-arguments)
compatibility in interfaces and classes implementing these interfaces
is only allowed in major releases.

Internal (i.e. marked as `@internal`) or other non-public classes may break
named argument backward compatibility in minor releases.

## Support Policy

The components support at least the minimum
[supported version of PHP](https://www.php.net/supported-versions.php).

- Requires `PHP 8.1.0` or higher.

The components do not require specific extensions. The entire set used is
either included in the standard build, is used in the vast majority of
installations, or can be replaced with a polyfill.

- May require `ext-pcre`.
- May require `ext-spl`.
- May require `ext-json`.
- May require `ext-mbstring` (or `symfony/polyfill-mbstring`).

| Version | PHP       | Release          |
|---------|-----------|------------------|
| 1.x     | 8.1 - 8.4 | April 15th, 2024 |
| 2.x     | *---*     | *---*            |