module.exports = {
  moduleNameMapper: {
    '\\.(scss)$': 'identity-obj-proxy',
    '\\.(svg)$': '<rootDir>/__mocks__/svg.js',
    '\\.(png|jpg|gif|eot|ttf|woff(2)?)$': '<rootDir>/__mocks__/file.js'
  },
  coverageReporters: ['json', 'text-summary'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        addFileAttribute: 'true',
        outputDirectory: 'reports',
        outputName: 'jest.xml'
      }
    ]
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[tj]sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: { syntax: 'typescript', tsx: true },
          transform: { react: { runtime: 'automatic' } }
        }
      }
    ]
  },
  transformIgnorePatterns: ['//node_modules/(?!(@newhighsco))']
}
