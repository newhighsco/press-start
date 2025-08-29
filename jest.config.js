module.exports = {
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
