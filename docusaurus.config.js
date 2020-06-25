module.exports = {
  title: "Blog-Notes d'Aleowyne",
  tagline: "Le blog-notes d'une développeuse",
  url: 'https://aleowyne.github.io/',
  baseUrl: '/',
  favicon: 'img/logo.jpg',
  organizationName: 'aleowyne', // Usually your GitHub org/user name.
  projectName: 'aleowyne.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Blog-Notes d'Aleowyne",
      logo: {
        alt: 'Logo',
        src: 'img/logo.jpg',
      },
      links: [
        //{to: '/', label: 'Notes', position: 'left'},
        //{to: '/code/intro', label: 'Bouts de code', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Liens utiles',
          items: [
            {
              label: 'dev.to',
              href: 'https://dev.to/',
            },
            {
              label: 'FreeCodeCamp',
              href: 'https://www.freecodecamp.org/',
            },
          ],
        },
        {
          title: 'Liens Aleowyne',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Aleowyne',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/AleoCeline',
            },
          ],
        },
        {
          title: 'Streams à suivre',
          items: [
            {
              label: 'Les Moulins du Dev',
              href: 'https://www.twitch.tv/lesmoulinsdudev',
            },
            {
              label: 'JaChampagne',
              href: 'https://www.twitch.tv/jachampagne',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aleowyne. Built with <a href="https://v2.docusaurus.io">Docusaurus 2</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          homePageId: 'index',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

