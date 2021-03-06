// see https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md
module.exports = {
  extends: 'lighthouse:default',
  settings: {
    // audits can be found here:
    // https://github.com/GoogleChrome/lighthouse/blob/eba2a4d19c5786dc37e993858ff4b663181f81e5/lighthouse-core/config/default-config.js#L174
    skipAudits: [
      'canonical', // for staging sites this will always be incorrect
      'maskable-icon',
      'valid-source-maps',
      'unsized-images',
      'offline-start-url'
    ],
    onlyCategories: ['accessibility', 'best-practices', 'performance', 'seo', 'pwa'],
    budgets: [
      {
        path: '/*',
        timings: [
          {
            metric: 'interactive',
            budget: 5000
          },
          {
            metric: 'first-contentful-paint',
            budget: 1000
          },
          {
            metric: 'speed-index',
            budget: 1500
          }
        ],
        resourceSizes: [
          {
            resourceType: 'script',
            budget: 200
          },
          {
            resourceType: 'total',
            budget: 15000
          }
        ],
        resourceCounts: [
          {
            resourceType: 'third-party',
            budget: 30
          }
        ]
      }
    ]
  }
};
