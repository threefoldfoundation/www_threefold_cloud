// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'ThreeFold Cloud',
    plugins: [

        // Local models
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Product',
                path: './content/page/**/productData/**/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'ProductTitle',
                path: './content/page/**/productData/**/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Features',
                path: './content/page/**/features/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Cta',
                path: './content/page/**/cta/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Cta2',
                path: './content/page/**/cta2/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Cta3',
                path: './content/page/**/cta3/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Cta4',
                path: './content/page/**/cta4/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'BrandPanel',
                path: './content/page/**/brandPanel/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Blogs',
                path: './content/page/**/blogs/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'BrandPanel',
                path: './content/page/**/brandPanel/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'BrandPanel2',
                path: './content/page/**/brandPanel2/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'BrandPanel3',
                path: './content/page/**/brandPanel3/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'BrandPanel4',
                path: './content/page/**/brandPanel4/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Features',
                path: './content/page/**/features/**/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'FeaturesMain',
                path: './content/page/**/features/main/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'WorkloadsMain',
                path: './content/page/**/workloads/main/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Workloads',
                path: './content/page/**/workloads/**/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Stats',
                path: './content/page/**/stats/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'AppsMain',
                path: './content/page/**/all_apps/main/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Applications',
                path: './content/page/**/all_apps/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Header',
                path: './content/page/**/header/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'SignUp',
                path: './content/page/**/signup/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Logos',
                path: './content/page/**/logos/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'MarkdownPage',
                path: './content/page/*/*.md',
                refs: {
                    productsMain: 'ProductTitle',
                    productData: 'Product',
                    featuresMain: 'FeaturesMain',
                    features: 'Features',
                    cta: 'Cta',
                    cta2: 'Cta2',
                    cta3: 'Cta3',
                    cta4: 'Cta4',
                    brandPanel: 'BrandPanel',
                    brandPanel2: 'BrandPanel2',
                    brandPanel3: 'BrandPanel3',
                    brandPanel4: 'BrandPanel4',
                    blogs: 'Blogs',
                    workloadsMain: 'WorkloadsMain',
                    workloads: 'Workloads',
                    stats: 'Stats',
                    appsMain: 'AppsMain',
                    apps: 'Applications',
                    header: 'Header',
                    signup: 'SignUp',
                    logos: 'Logos'
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
                    },

                    category: {
                        typeName: 'BlogCategory',
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
                    },

                    category: {
                        typeName: 'NewsCategory',
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
            use: "@gridsome/source-filesystem",
            options: {
                typeName: "App",
                path: './content/page/applications/all_apps/**/*.md',
                templates: {
                    App: '/apps/:id'
                },
                refs: {
                    // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
                    tags: {
                        typeName: "AppsTag",
                        create: true,
                    },
                },
            },
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
        {
            use: 'gridsome-plugin-matomo',
            options: {
                host: 'https://analytics.threefold.io/',
                siteId: 6
            }
        }
    ],
    chainWebpack: config => {
        config.resolve.alias.set('@images', '@/assets/images')
    },
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
            path: '/people/memberships/:id',
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
            path: '/people/:id',
            component: '~/templates/Person.vue'
        }],
        PersonTag: [{
            path: '/people/tags/:id',
            component: '~/templates/Tag.vue'
        }],

        Project: [{
            path: '/partners/:id',
            component: '~/templates/Project.vue'
        }],
        App: [{
            path: '/apps/:id',
            component: '~/templates/App.vue'
        }],

        AppsTag: [{
            path: '/apps/tags/:id',
            component: '~/templates/Tag.vue'
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