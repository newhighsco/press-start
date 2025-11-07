import logoBitmap from '~images/logo.png'
import logoVector from '~images/logo.svg'
import openGraphImage from '~images/sharing.jpg'
import colors from '~styles/colors.module'

const config = {
  url: process.env.NEXT_PUBLIC_SITE_URL,
  name: 'Press Start',
  shortName: null,
  title: 'Press Start - Chipset + Next.js site starter by New High Score',
  description: 'Get a theme-able Next.js site up and running quickly',
  logo: { bitmap: logoBitmap.src, vector: logoVector },
  openGraphImage: openGraphImage.src,
  themeColor: colors.black,
  twitterHandle: 'newhighsco',
  socialLinks: {
    github: 'https://github.com/newhighsco/press-start',
    twitter: 'https://twitter.com/newhighsco'
  }
}

export default config
