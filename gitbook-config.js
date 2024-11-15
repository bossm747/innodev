module.exports = {
  title: 'Innodev by BossMarc Documentation',
  description: 'Dynamic and automatic documentation for Innodev by BossMarc',
  plugins: [
    'perflexity',
    'search',
    'highlight',
    'theme-default',
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'GitHub', link: 'https://github.com/bossm747/innodev' },
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/getting-started',
          '/guide/configuration',
          '/guide/deployment',
        ],
      },
      {
        title: 'API',
        collapsable: false,
        children: [
          '/api/',
          '/api/endpoints',
          '/api/authentication',
          '/api/errors',
        ],
      },
    ],
  },
};
