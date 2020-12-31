// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Threefold Cloud',
    plugins: [

        // Local models
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Card',
                path: './content/page/**/cards/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Slide',
                path: './content/page/**/sliders/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Contact',
                path: './content/page/**/contactData/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'MarkdownPage',
                path: './content/page/*/*.md',
                refs: {
                    cards: 'Card',
                    slides: 'Slide',
                    contactData: 'Contact',
                    plans: 'Plans'
                }
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Navigation',
                path: './content/navigation/navigation.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Footer',
                path: './content/footer/footer.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Person',
                path: './content/person/**/*.md',
                refs: {
                    tags: {
                        typeName: 'PersonTag',
                        create: true
                    },
                    memberships: {
                        typeName: 'Membership',
                        create: true
                    },
                    projects: 'Project'
                },
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Blog',
                path: './content/blog/**/*.md',
                templates: {
                    BlogPost: '/blog/post/:id'
                },
                refs: {
                    authors: 'Person',
                    tags: {
                        typeName: 'BlogTag',
                        create: true
                    }
                }
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'News',
                path: './content/news/**/*.md',
                refs: {
                    authors: 'Person',
                    tags: {
                        typeName: 'NewsTag',
                        create: true
                    }
                }
            }
        },


        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Project',
                path: './content/project/**/*.md',
                refs: {
                    authors: 'Person',
                    members: 'Person',

                    tags: {
                        typeName: 'ProjectTag',
                        create: true
                    }
                }
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Plans',
                path: './content/page/**/withComparisonTable/**/*.md',
            }
        },

        // Tailwind
        {
            use: 'gridsome-plugin-tailwindcss',
            options: {
                tailwindConfig: './tailwind.config.js',
                purgeConfig: {
                    whitelist: ['svg-inline--fa', 'table', 'table-striped', 'table-bordered', 'table-hover', 'table-sm'],
                    whitelistPatterns: [/fa-$/, /blockquote$/, /code$/, /pre$/, /table$/, /table-$/]
                },
                presetEnvConfig: {},
                shouldPurge: false,
                shouldImport: true,
                shouldTimeTravel: true,
                shouldPurgeUnusedKeyframes: true,
            }
        },

        // Full Text search
        {
            use: 'gridsome-plugin-flexsearch',
            options: {
                searchFields: ['title', 'name', 'content', 'status', 'linkedin', 'excerpt', 'cities', 'countries', 'websites'],
                collections: [{
                        typeName: 'Blog',
                        indexName: 'Blog',
                        fields: ['path']
                    },

                    {
                        typeName: 'Project',
                        indexName: 'Project',
                        fields: ['path']
                    },

                    {
                        typeName: 'Person',
                        indexName: 'Person',
                        fields: ['path']
                    },

                    {
                        typeName: 'News',
                        indexName: 'News',
                        fields: ['path']
                    },

                    {
                        typeName: 'MarkdownPage',
                        indexName: 'MarkdownPage',
                        fields: ['path']
                    },

                ]
            }
        },
    ],
    templates: {
        MarkdownPage: [{
            path: '/:id',
            component: '~/templates/MarkdownPage.vue',

        }],

        BlogTag: [{
            path: '/blog/tags/:id',
            component: '~/templates/Tag.vue'
        }],



        NewsTag: [{
            path: '/news/tags/:id',
            component: '~/templates/Tag.vue'
        }],

        ProjectTag: [{
            path: '/partners/tags/:id',
            component: '~/templates/Tag.vue'
        }],

        Membership: [{
            path: '/team/memberships/:id',
            component: '~/templates/Membership.vue'
        }],

        Blog: [{
            path: '/blog/post/:id',
            component: '~/templates/BlogPost.vue'
        }],

        News: [{
            path: '/news/post/:id',
            component: '~/templates/NewsPost.vue'
        }],

        Person: [{
            path: '/team/:id',
            component: '~/templates/Person.vue'
        }],
        PersonTag: [{
            path: '/team/tags/:id',
            component: '~/templates/Tag.vue'
        }],

        Project: [{
            path: '/partners/:id',
            component: '~/templates/Project.vue'
        }],
    },

    transformers: {
        //Add markdown support to all file-system sources
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icon icon-link',
            plugins: [
                ['gridsome-plugin-remark-prismjs-all', {
                        highlightClassName: "gridsome-highlight",
                        codeTitleClassName: "gridsome-code-title",
                        classPrefix: 'language-',
                        aliases: {},
                        noInlineHighlight: false,
                        showLineNumbers: false, //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
                        languageExtensions: [],
                        prompt: { //  `require("prismjs/plugins/command-line/prism-command-line.css");`
                            user: `root`,
                            host: `localhost`,
                            global: false,
                        }
                    },
                    // '@noxify/gridsome-remark-table-align', ['@noxify/gridsome-remark-classes', {
                    //     'table': 'table table-striped',
                    //     'tableCell[align=center]': 'text-center',
                    //     'tableCell[align=right]': 'text-right'
                    // }
                ]
            ]
        }
    }
}