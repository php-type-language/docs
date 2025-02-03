import {defineConfig} from 'vitepress';
import {withMermaid} from 'vitepress-plugin-mermaid';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs';

import {en} from './config/en';

const config = defineConfig({
    title: "TypeLang",
    rewrites: {
        'en/:rest*': ':rest*'
    },
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    themeConfig: {
        logo: {
            src: '/icons/typelang.svg',
            width: 24,
            height: 24
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/php-type-language'}
        ]
    },
    locales: {
        root: {label: 'English', ...en},
        // ru: { label: 'Русский', ...ru },
    },
    markdown: {
        config(md) {
            md.use(groupIconMdPlugin);
            md.use(tabsMarkdownPlugin);
        },
    },
    vite: {
        plugins: [
            groupIconVitePlugin()
        ],
    }
});

export default withMermaid({
    ...config,
});
