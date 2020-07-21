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
        ['go/', 'Go'],
        {
          title: 'JavaScript',
          children: [
            ['javascript/angular/', 'Angular'],
            ['javascript/nodejs/', 'Nodejs'],
            ['javascript/nuxtjs/', 'Nuxtjs'],
            ['javascript/react/', 'React'],
            ['javascript/svelte/', 'Svelte'],
            ['javascript/', 'VanillaJS'],
            ['javascript/vuejs/', 'Vue.js']
          ]
        },
        ['macos/', 'MacOS'],
        ['mysql/', 'MySQL'],
        {
          title: 'PHP',
          link: '/php',
          children: [
            ['php/api-platform/', 'API Platform'],
            ['php/codesniffer/', 'CodeSniffer'],
            ['php/coding-standards-fixer/', 'Coding Standards Fixer'],
            ['php/docblocks/', 'DocBlocks'],
            ['php/laravel/', 'Laravel'],
            ['php/slim/', 'Slim'],
            ['php/symfony/', 'Symfony'],
            ['php/versions/', 'Versions']
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
        ['api-gateway/', 'API Gateway'],
        ['ddd/', 'DDD'],
        ['deno/', 'Deno'],
        ['graphql/', 'GraphQL'],
        ['jwt/', 'JWT'],
        ['microservices/', 'Microservices'],
        ['mvvm/', 'MVVM'],
        ['sanctum/', 'Sanctum'],
        ['solid/', 'SOLID'],
        ['tdd/', 'TDD'],
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
