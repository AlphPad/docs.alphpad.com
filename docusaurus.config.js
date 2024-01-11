import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AlphPad',
  tagline: 'AlphaPad: The Premier Launchpad on Alephium - Elevating Projects to New Heights!',
  favicon: 'img/favicon.ico',

  url: 'https://docs.alphpad.com',
  baseUrl: '/',


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'AlphPad Docs',
        logo: {
          alt: 'AlphPad Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://alphpad.com',
            label: 'Website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/alphpad',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/yYbBUvS2',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/alphpad',
              },
            ],
          },
          {
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/AlphPad',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@AlphPad',
              },
              {
                label: 'Email',
                href: 'mailto:admin@alphpad.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AlphPad.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
