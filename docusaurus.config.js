// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "dcSpark Blog",
  tagline: "An ecosystem builder company",
  favicon: "img/favicon.ico",
  url: "https://blog.dcspark.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dcSpark", // Usually your GitHub org/user name.
  projectName: "dcspark-blog", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    localeConfigs: {
      en: {
        label: "EN",
      },
      ja: {
        label: "JP",
      },
    },
  },
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        blogRouteBasePath: '/',
        hashed: true,
        indexDocs: false,
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          routeBasePath: "/",
          // path: "blog",
          blogSidebarCount: 0,
          editUrl: "https://github.com/dcSpark/dcspark-blog/tree/main/",
        },
        docs: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/banner.jpeg",
      navbar: {
        title: "",
        logo: {
          alt: "dcSpark Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            label: "dcSpark Website",
            to: "https://dcSpark.io",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: "light",
        copyright: `Copyright © ${new Date().getFullYear()} dcSpark. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
