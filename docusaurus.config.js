module.exports = {
  title: "Blog-Notes d'Aleowyne",
  tagline: "Le blog-notes d'une développeuse",
  url: 'https://aleowyne.github.io',
  baseUrl: '/',
  favicon: 'img/logo.jpg',
  organizationName: 'aleowyne', // Usually your GitHub org/user name.
  projectName: 'aleowyne.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: "Blog-Notes d'Aleowyne",
      logo: {
        alt: 'Logo',
        src: 'img/logo.jpg',
      }
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
              label: 'Grafikart',
              href: 'https://www.twitch.tv/grafikart',
            },
            {
              label: 'CodingGarden',
              href: 'https://www.twitch.tv/codinggarden',
            }
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
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        docsRouteBasePath: "/",
        hashed: true,
        language: ["fr"],
      }),
    ],
  ],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
    localeConfigs: {
      fr: {
        label: 'Français',
        direction: 'ltr',
      },
    },
  },
};
