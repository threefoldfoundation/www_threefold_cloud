// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Threefold Farming',
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
                typeName: 'Card2',
                path: './content/page/**/cards2/**/*.md',
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
                typeName: 'HowItWorks',
                path: './content/page/**/how_it_works/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'HowItWorks_2',
                path: './content/page/**/how_it_works_2/**/*.md',
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
                typeName: 'Product',
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
                typeName: 'Features2',
                path: './content/page/**/features2/**/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Features3',
                path: './content/page/**/features3/**/*.md',
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
                typeName: 'Cta',
                path: './content/page/**/cta/*.md',
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
                typeName: 'Comparison',
                path: './content/page/**/comparison/**/*.md',
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
                typeName: 'SplitWithImage',
                path: './content/page/**/splitWithImage/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'SolutionsHeader',
                path: './content/page/**/headerSolution/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'SolutionsHeader',
                path: './content/page/**/headerSolution2/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'SolutionsHeader',
                path: './content/page/**/headerSolution3/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'SolutionsHeader',
                path: './content/page/**/headerSolution4/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'InTheNews',
                path: './content/page/**/InTheNews/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'MarkdownPage',
                path: './content/page/*/*.md',
                refs: {
                    cards: 'Card',
                    cards2: 'Card2',
                    slides: 'Slide',
                    contactData: 'Contact',
                    header: 'Header',
                    howItWorks: 'HowItWorks',
                    howItWorksMain: 'HowItWorks',
                    productData: 'Product',
                    featuresMain: 'Features',
                    features: 'Features',
                    featuresMain2: 'Features2',
                    features2: 'Features2',
                    featuresMain3: 'Features3',
                    features3: 'Features3',
                    logos: 'Logos',
                    cta: 'Cta',
                    signup: 'SignUp',
                    comparisonMain: 'Comparison',
                    comparisonSecs: 'Comparison',
                    howItWorksMain_2: 'HowItWorks_2',
                    howItWorks_2: 'HowItWorks_2',
                    brandPanel: 'BrandPanel',
                    splitWithImage: 'SplitWithImage',
                    headerSolution: 'SolutionsHeader',
                    headerSolution2: 'SolutionsHeader',
                    headerSolution3: 'SolutionsHeader',
                    headerSolution4: 'SolutionsHeader',
                    inTheNews: 'InTheNews'
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