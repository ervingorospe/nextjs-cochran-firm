/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: 'https://cochrantexas.com/',
  generateRobotsTxt: true, // (optional)
  changefreq: 'daily',
  generateIndexSitemap: false,
  exclude: ['/home', '/about-us', '/resources', '/cases-we-handle']
  // ...other options
}

module.exports = config