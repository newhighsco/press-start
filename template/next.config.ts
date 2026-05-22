import withSvgr from '@newhighsco/next-plugin-svgr'
import type { NextConfig } from 'next'
import withPlugins from 'next-compose-plugins'
// @ts-expect-error replace
import withVideos from 'next-videos'

const nextConfig: NextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  i18n: { locales: ['en'], defaultLocale: 'en' },
  poweredByHeader: false,
  transpilePackages: ['@newhighsco/chipset', '@newhighsco/press-start'],
  webpack: config => {
    config.module.rules.push({
      test: /\.(txt|xml|woff(2)?)$/,
      use: 'file-loader'
    })

    return config
  }
}

export default withPlugins(
  [[withSvgr, { inlineImageLimit: -1 }], [withVideos]],
  nextConfig
)
