// .vuepress/config.js
module.exports = {
  title: 'Dev Notes',
  description: 'Description of dev notes',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Development', link: '/development/' },
      { text: 'Server', link: '/server/' },
      { text: 'Misc', link: '/misc/' }
    ],
    sidebar: {
      '/development/': [
        ['git/', 'Git'],
        {
          title: 'JavaScript',
          children: [
            ['javascript/angular/', 'Angular'],
            ['javascript/nodejs/', 'Nodejs'],
            ['javascript/react/', 'React'],
            ['javascript/svelte/', 'Svelte'],
            ['javascript/', 'VanillaJS']
          ]
        },
        {
          title: 'PHP',
          link: '/php',
          children: [
            ['php/api-platform/', 'API Platform'],
            ['php/codesniffer/', 'CodeSniffer'],
            ['php/coding-standards-fixer/', 'Coding Standards Fixer'],
            ['php/laravel/', 'Laravel'],
            ['php/symfony/', 'Symfony']
          ]
        }
      ],
      '/server/': [
        ['dotnetcore/', 'Dot Net Core'],
        ['jenkins/', 'Jenkins'],
        ['mongodb/', 'MongoDB'],
      	['mysql/', 'MySQL'],
        ['nginx/', 'Nginx'],
        ['nodejs/', 'NodeJS'],
        ['php/', 'PHP'],
        ['pm2/', 'PM2'],
        ['sql-server/', 'SQL Server'],
        ['ssh/', 'SSH'],
        ['ssl/', 'SSL'],
        ['systemd/', 'Systemd']
      ],
      '/misc/': [
        ['ddd/', 'DDD'],
        ['graphql/', 'GraphQL'],
        ['jwt/', 'JWT'],
        ['tdd/', 'TDD'],
        ['deno/', 'Deno'],
        {
          title: 'Tutorials',
          link: '/tutorials',
          children: [
            ['tutorials/svelte/', 'Svelte']
          ]
        }
      ]
    },
    editLinks: true,
    editLinkText: 'Help us improve this page!'
  }
}
