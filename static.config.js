import ExtractCssChunks from 'extract-css-chunks-webpack-plugin'
import Html from './src/Html'

require('dotenv').config()

const path = require('path')
const fs = require('fs-extra')
const webpack = require('webpack')
const stylusLoaders = require('./src/utils/stylus-loaders')
const urlBuilder = require('./src/utils/url-builder')
const constants = require('./src/utils/constants')

const distPath = 'public'
const publicPath = 'static'
const redirects = []

export default {
  paths: {
    dist: distPath,
    devDist: distPath,
    public: publicPath
  },
  devServer: {
    port: 9000
  },
  siteRoot: process.env.SITE_URL,
  extractCssChunks: true,
  inlineCss: true,
  disableRouteInfoWarning: true,
  getRoutes: async () => {
    const routes = [
      {
        is404: true,
        component: 'src/containers/NotFound'
      },
      {
        path: urlBuilder.rootUrl,
        component: 'src/containers/Home'
      }
    ]

    return routes
  },
  webpack: (config, { defaultLoaders, stage }) => {
    var { cssLoader, jsLoader, fileLoader } = defaultLoaders

    if (stage !== 'dev') config.devtool = false

    config.entry = stage === 'dev'
      ? [ 'babel-polyfill', ...config.entry ]
      : [ 'babel-polyfill', config.entry ]

    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.styl$/,
            use: stage === 'dev'
              ? [ require.resolve('style-loader'), ...stylusLoaders() ]
              : ExtractCssChunks.extract({ use: stylusLoaders() })
          },
          {
            test: /\.svg$/,
            loader: require.resolve('svg-react-loader')
          },
          cssLoader,
          jsLoader,
          {
            exclude: fileLoader.exclude,
            use: [
              {
                loader: require.resolve('file-loader'),
                options: {
                  name: fileLoader.query.name
                }
              },
              {
                loader: require.resolve('image-webpack-loader'),
                options: {
                  disable: stage === 'dev',
                  mozjpeg: {
                    progressive: true,
                    quality: 90
                  },
                  optipng: {
                    optimizationLevel: 7
                  },
                  gifsicle: {
                    interlaced: true,
                    optimizationLevel: 3
                  },
                  svgo: {
                    multipass: true,
                    removeXMLNS: true,
                    removeTitle: true,
                    removeStyleElement: true
                  },
                  webp: {
                    quality: 90
                  }
                }
              }
            ]
          }
        ]
      }
    ]

    config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
    if (stage === 'node') config.plugins.push(new ExtractCssChunks())

    return config
  },
  Document: Html,
  onBuild: async () => {
    const robots = [ 'User-agent: *' ]
    const disallowRobots = JSON.parse(process.env.DISALLOW_ROBOTS || false)

    if (disallowRobots) robots.push('Disallow: /')
    robots.push(`Sitemap: ${process.env.SITE_URL}/sitemap.xml`)

    await fs.writeFile(path.join(distPath, 'robots.txt'), robots.join('\n'))
    await fs.writeFile(path.join(distPath, '_redirects'), redirects.map(redirect => `${redirect.from} ${redirect.to} ${redirect.code}`).join('\n'))

    const manifest = {
      name: constants.meta.name,
      short_name: constants.meta.shortName,
      start_url: `/`,
      background_color: constants.meta.themeColor,
      theme_color: constants.meta.themeColor,
      display: `minimal-ui`,
      icons: [
        {
          src: `/favicon-192x192.png`,
          sizes: `192x192`,
          type: `image/png`
        },
        {
          src: `/favicon-512x512.png`,
          sizes: `512x512`,
          type: `image/png`
        }
      ]
    }

    await fs.writeFile(path.join(distPath, 'manifest.webmanifest'), JSON.stringify(manifest))
  }
}
