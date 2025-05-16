import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Rocket Mobile',
  tagline: 'Dokumentasi Publishing Mobile Apps',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rocket-mobile.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yusriltakeuchi', // Usually your GitHub org/user name.
  projectName: 'rocket-mobile', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/yusriltakeuchi/rocket-mobile/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/header_cover.png',
    navbar: {
      title: 'Rocket Mobile',
      logo: {
        alt: 'Rocket Mobile Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Dokumentasi',
        },
        {
          href: 'https://github.com/yusriltakeuchi/rocket-mobile',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Dokumentasi',
              to: 'docs/category/general',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinekdIn',
              href: 'https://www.linkedin.com/in/yusril-rapsanjani/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/yusriltakeuchi/rocket-mobile',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rocket Mobile`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
