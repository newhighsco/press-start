module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      var rule, moduleRules, cssLoader
      const { cssOptions, cssModulesOptions } = nextConfig

      if (
        (rule = config.module.rules.find(rule =>
          Object.keys(rule).includes('oneOf')
        ))
      ) {
        if (
          (moduleRules = rule.oneOf.filter(
            r =>
              ('test.module.scss'.match(r.test) ||
                'test.module.css'.match(r.test)) &&
              Array.isArray(r.use)
          ))
        ) {
          for (const moduleRule of moduleRules) {
            if (
              (cssLoader = moduleRule.use.find(u =>
                u.loader.match('css-loader')
              ))
            ) {
              cssLoader.options = {
                ...cssLoader.options,
                ...cssOptions,
                modules: {
                  ...cssLoader.options.modules,
                  ...cssModulesOptions
                }
              }
            }
          }
        }
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
