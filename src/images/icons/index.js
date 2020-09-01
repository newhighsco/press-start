import { paramCase } from 'param-case'

const svgs = require.context('.', false, /\.svg$/)

const icon = name => {
  if (!name) return null

  const key = paramCase(name)
  const logoKey = `./${key}.svg`
  const Svg = svgs.keys().find(key => key === logoKey)
    ? svgs(logoKey).ReactComponent
    : null

  return Svg
}

export default icon
