import colors from '@styles/_colors.module.scss'
import logoBitmap from '@images/logo.png'
import logoVector from '@images/logo.svg'
import openGraphImage from '@images/sharing.jpg'

const config = {
  name: 'Press Start',
  shortName: null,
  title: 'Press Start - Chipset + Next.js site starter by New High Score',
  description: 'Get a theme-able Next.js site up and running quickly',
  logo: {
    bitmap: logoBitmap,
    vector: logoVector
  },
  openGraphImage,
  themeColor: colors.black,
  twitterHandle: 'newhighsco',
  socialLinks: {
    github: 'https://github.com/newhighsco/press-start',
    twitter: 'https://twitter.com/newhighsco'
  }
}

export default config
