// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Threefold Webstack',
  plugins: [
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
    use: '@gridsome/source-filesystem',
    options: {
        typeName: 'Card',
        path: './content/page/**/cards/**/*.md',
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
        typeName: 'MarkdownPage',
        path: './content/page/*/*.md',
        refs: {
          cards: {
              typeName: 'Card',
          }
      }       
    }
  },
  ],
  templates: {
    MarkdownPage: [{
      path: '/:id',
      component: '~/templates/MarkdownPage.vue',
      
    }],
  }
}
