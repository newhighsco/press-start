import urlJoin from 'url-join'
import colors from './src/theme/settings/_colors.module.scss'

export const config = {
  lang: 'en',
  url: process.env.SITE_URL,
  name: 'PRESS START',
  shortName: null,
  title: 'Chipset + Next.js site starter by New High Score',
  description:
    'Get a theme-able Next.js site up and running quickly with PRESS START',
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
    images: [{ url: urlJoin(config.url, 'images/meta/sharing.jpg') }]
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
