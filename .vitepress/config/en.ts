import { defineConfig } from 'vitepress';

export const en = defineConfig({
    description: "PHP Type Description Language",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Language',
                link: '/language/basic-types',
                badge: { text: 'NEW' },
                activeMatch: '^/language',
            },
            {
                text: 'Components',
                activeMatch: '^/components',
                items: [
                    { text: 'Parser', link: '/components/parser' },
                    { text: 'Printer', link: '/components/printer' },
                    { text: 'PhpDoc', link: '/components/phpdoc' },
                    { text: 'Reader', link: '/components/reader' },
                ]
            },
        ],

        sidebar: {
            '/language/': {
                base: '/language/',
                items: [
                    { text: 'Basic Types', link: 'basic-types' },
                    { text: 'Logical Types', link: 'logical-types' },
                    { text: 'Generics', link: 'generic-types' },
                    { text: 'Literals', link: 'literal-types' },
                    { text: 'Constants', link: 'const-types' },
                    { text: 'Shapes', link: 'shape-types' },
                    { text: 'Callables', link: 'callable-types' },
                    { text: 'Offsets', link: 'offset-access' },
                    { text: 'Conditions', link: 'conditional-types' },
                    {
                        text: 'Other',
                        collapsed: false,
                        items: [
                            {
                                text: 'Comparison of syntax between different tools',
                                link: 'comparison'
                            },
                            {
                                text: 'PHPStan',
                                target: '_blank',
                                rel: 'external nofollow',
                                link: 'https://phpstan.org/writing-php-code/phpdoc-types',
                            },
                            {
                                text: 'Psalm',
                                target: '_blank',
                                rel: 'external nofollow',
                                link: 'https://psalm.dev/docs/annotating_code/typing_in_psalm',
                            },
                            {
                                text: 'PhpStorm',
                                target: '_blank',
                                rel: 'external nofollow',
                                link: 'https://www.jetbrains.com/help/phpstorm/php-type-checking.html',
                            },
                            {
                                text: 'phpDocumentor',
                                target: '_blank',
                                rel: 'external nofollow',
                                link: 'https://docs.phpdoc.org/guide/guides/types.html',
                            },
                        ]
                    },
                ]
            },
            '/components/': {
                base: '/components/',
                items: [
                    {
                        text: 'Parser',
                        link: 'parser',
                        collapsed: false,
                        items: [
                            { text: 'Feature toggling', link: 'parser/features' },
                            { text: 'Tolerant mode', link: 'parser/tolerant-mode' },
                            {
                                text: 'Visitors',
                                link: 'parser/visitors',
                                collapsed: false,
                                items: [
                                    { text: 'ClassNameMatcherVisitor', link: 'parser/visitors/class-name-matcher-visitor' },
                                    { text: 'StreamDumperVisitor', link: 'parser/visitors/stream-dumper-visitor' },
                                    { text: 'StringDumperVisitor', link: 'parser/visitors/string-dumper-visitor' },
                                    { text: 'TypeMapVisitor', link: 'parser/visitors/type-map-visitor' },
                                ]
                            },
                            {
                                text: 'GitHub',
                                target: '_blank',
                                rel: 'external nofollow',
                                link: 'https://github.com/php-type-language/parser',
                            },
                            {
                                text: 'Packagist',
                                target: '_blank',
                                rel: 'external nofollow',
                                link: 'https://packagist.org/packages/type-lang/parser',
                            }
                        ]
                    },
                    {
                        text: 'Printer',
                        link: 'printer',
                        collapsed: false,
                        items: [
                            {
                                text: 'GitHub',
                                target: '_blank',
                                rel: 'external nofollow',
                                link: 'https://github.com/php-type-language/printer',
                            },
                            {
                                text: 'Packagist',
                                target: '_blank',
                                rel: 'external nofollow',
                                link: 'https://packagist.org/packages/type-lang/printer',
                            }
                        ]
                    },
                    {
                        text: 'PhpDoc',
                        link: 'phpdoc',
                        collapsed: false,
                        items: [
                            {
                                text: 'Extensions',
                                collapsed: false,
                                items: [
                                    {
                                        text: 'Standard Tags',
                                        link: 'phpdoc/extensions/phpdoc-standard-tags',
                                        collapsed: true,
                                        items: [
                                            {
                                                text: 'GitHub',
                                                target: '_blank',
                                                rel: 'external nofollow',
                                                link: 'https://github.com/php-type-language/phpdoc-standard-tags',
                                            },
                                            {
                                                text: 'Packagist',
                                                target: '_blank',
                                                rel: 'external nofollow',
                                                link: 'https://packagist.org/packages/type-lang/phpdoc-standard-tags',
                                            }
                                        ]
                                    },
                                    {
                                        text: 'Template Tags',
                                        link: 'phpdoc/extensions/phpdoc-template-tags',
                                        collapsed: true,
                                        items: [
                                            {
                                                text: 'GitHub',
                                                target: '_blank',
                                                rel: 'external nofollow',
                                                link: 'https://github.com/php-type-language/phpdoc-template-tags',
                                            },
                                            {
                                                text: 'Packagist',
                                                target: '_blank',
                                                rel: 'external nofollow',
                                                link: 'https://packagist.org/packages/type-lang/phpdoc-template-tags',
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                text: 'GitHub',
                                target: '_blank',
                                rel: 'external nofollow',
                                link: 'https://github.com/php-type-language/phpdoc',
                            },
                            {
                                text: 'Packagist',
                                target: '_blank',
                                rel: 'external nofollow',
                                link: 'https://packagist.org/packages/type-lang/phpdoc',
                            },
                        ]
                    },
                    {
                        text: 'Reader',
                        link: 'reader',
                        collapsed: false,
                        items: [
                            {
                                text: 'GitHub',
                                target: '_blank',
                                rel: 'external nofollow',
                                link: 'https://github.com/php-type-language/reader',
                            },
                            {
                                text: 'Packagist',
                                target: '_blank',
                                rel: 'external nofollow',
                                link: 'https://packagist.org/packages/type-lang/reader',
                            }
                        ]
                    },
                ]
            }
        },

        editLink: {
            pattern: 'https://github.com/php-type-language/docs/edit/master/:path',
            text: 'Edit this page on GitHub'
        },
    }
})
