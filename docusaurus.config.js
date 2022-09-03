// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NUIST Craft',
  tagline: '嘿嘿，百群，嘿嘿',
  url: 'https://nuistcraft.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'NUISTCRAFT', // Usually your GitHub org/user name.
  projectName: 'NUISTCRAFT', // Usually your repo name.
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'about',
        routeBasePath: 'about',
        path: './about',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'NUIST Craft',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '怎么玩',
          },
          { to: '/about', label: '关于我们', position: 'left' },
          {
            to: '/map',
            label: '网页地图',
            position: 'left',
          },
          {
            href: 'https://github.com/lixiang810/nuist-craft',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            label: '加入QQ群',
            href: 'https://jq.qq.com/?_wv=1027&k=5EgjjUQV',
          },
          {
            label: '网页地图',
            href: 'https://ncmap.dustella.net',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
