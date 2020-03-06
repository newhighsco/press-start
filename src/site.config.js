import colors from './scss/settings/_colors.scss'

export const config = {
  name: 'Static starter',
  shortName: null,
  title: 'Static site starter by New High Score',
  description: 'Get a static site up and running quickly with Static starter',
  themeColor: colors.black,
  twitterHandle: 'newhighsco',
  googleTrackingId: null,
  disallowRobots: JSON.parse(process.env.DISALLOW_ROBOTS || false)
}

export const meta = {
  dangerouslySetAllPagesToNoFollow: config.disallowRobots,
  titleTemplate: `%s | ${config.name}`,
  description: config.description,
  openGraph: {
    site_name: config.name,
    type: 'website',
    // TODO:
    images: [{ url: 'https://TODO/image.jpg' }]
  },
  twitter: {
    cardType: 'summary',
    site: `@${config.twitterHandle}`,
    handle: `@${config.twitterHandle}`
  },
  additionalMetaTags: [{ name: 'theme-color', content: config.themeColor }]
}

export const socialLinks = {
  twitter: `https://twitter.com/${config.twitterHandle}`
}
