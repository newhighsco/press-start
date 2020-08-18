import urlJoin from 'url-join'
import colors from './src/styles/_colors.module.scss'
import logoUrl from './src/images/logo.png'
import openGraphImageUrl from './src/images/sharing.jpg'

const url = process.env.SITE_URL

export const config = {
  lang: 'en',
  url,
  name: 'Press Start',
  shortName: null,
  title: 'Press Start - Chipset + Next.js site starter by New High Score',
  description: 'Get a theme-able Next.js site up and running quickly',
  logo: urlJoin(url, logoUrl),
  openGraphImage: urlJoin(url, openGraphImageUrl),
  themeColor: colors.black,
  twitterHandle: 'newhighsco',
  googleTrackingId: null,
  disallowRobots: process.env.DISALLOW_ROBOTS
}

export const meta = {
  dangerouslySetAllPagesToNoFollow: config.disallowRobots,
  dangerouslySetAllPagesToNoIndex: config.disallowRobots,
  titleTemplate: `%s | ${config.name}`,
  description: config.description,
  openGraph: {
    site_name: config.name,
    type: 'website',
    images: [{ url: config.openGraphImage }]
  },
  twitter: {
    cardType: 'summary',
    site: `@${config.twitterHandle}`,
    handle: `@${config.twitterHandle}`
  },
  additionalMetaTags: [{ name: 'theme-color', content: config.themeColor }]
}

export const socialLinks = {
  twitter: `https://twitter.com/newhighsco`
}
