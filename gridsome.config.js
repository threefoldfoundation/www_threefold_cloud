// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Threefold Farming',
    plugins: [

        // Remote models

        {
            use: 'gridsome-source-graphql',
            options: {
                url: 'https://data.threefold.io/___graphql',
                fieldName: 'Threefold',
                typeName: '',
            },
        },

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
                typeName: 'MarkdownPage',
                path: './content/page/*/*.md',
                refs: {
                    cards: 'Card',
                    slides: 'Slide',
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
                compress: true,
                searchFields: ['title', 'name', 'content', 'tags[title]', 'status', 'members[name]', 'linkedin', 'excerpt', 'cities', 'countries', 'websites', ],
                collections: [{
                        query: `
            {
              allBlog{edges{
                  node{
                    id
                    path
                    content
                    excerpt
                    title
                    tags{
                      title
                    }
                  }
                }
              }
            }
            `,
                        path: 'allBlog.edges',
                        indexName: 'Blog',
                        fields: ['path'],
                    },
                    {
                        query: `
            {
              allProject{
                 edges {
                  node {
                    title
                    content
                    status
                    path  
                    members {
                      name
                    },
                    linkedin
                  }
                }
              }
            }
            `,
                        path: 'allProject.edges',
                        fields: ['path'],
                        indexName: 'Project'
                    },
                    {
                        query: `
            {
              allPerson{
                edges{
                  node{
                    content
                    path
                    excerpt
                    name
                    memberships{
                      title
                    }
                    tags{
                      title
                    }
                    cities
                    countries
                    websites
                  }      
                }
              }
            }
            `,
                        path: 'allPerson.edges',
                        fields: ['path'],
                        indexName: 'Person'
                    }
                ]
            }
        }
    ],
    templates: {
        MarkdownPage: [{
            path: '/:id',
            component: '~/templates/MarkdownPage.vue',

        }],
    }
}