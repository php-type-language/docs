# Standard Platform

The standard platform is the most general platform, suitable 
for targets such as DB or API.

```php
use TypeLang\Mapper\Mapper;
use TypeLang\Mapper\Platform\StandardPlatform;

$mapper = new Mapper(new StandardPlatform());
```

<note>
The standard platform is used by default. 
No explicit declaration is required.
</note>