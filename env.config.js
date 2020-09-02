module.exports = {
  master: {
    SITE_URL: 'https://starter.newhighsco.re/',
    DISALLOW_ROBOTS: false
  },
  preview: {
    SITE_URL: process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000',
    DISALLOW_ROBOTS: true
  }
}
