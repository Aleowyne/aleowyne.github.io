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
        alt: 'My Site Logo',
        src: 'img/logo.jpg',
      },
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
      copyright: `Copyright © ${new Date().getFullYear()} Aleowyne, Inc. Built with <a href="https://v2.docusaurus.io">Docusaurus</a>.`,
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
          editUrl:
            'https://github.com/Aleowyne/aleowyne.github.io/edit/master/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
