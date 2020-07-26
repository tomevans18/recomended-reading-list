const moduleNameMapper = {
  '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/file-mock.ts',
  '@components/(.*)': '<rootDir>/src/components/$1',
  '@pages/(.*)': '<rootDir>/src/pages/$1',
  '@styles/(.*)': '<rootDir>/src/styles/$1',
  '@lib/(.*)': '<rootDir>/src/lib/$1',
  '@test/(.*)': '<rootDir>/test/$1',
  'styled-components': '<rootDir>/node_modules/styled-components'
};

module.exports = {
  roots: ['<rootDir>'],
  collectCoverage: true,
  collectCoverageFrom: ['src/*.{ts,tsx}'],
  coverageReporters: ['lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: -10
    }
  },
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest'
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  projects: [
    {
      name: 'client',
      displayName: 'client',
      testEnvironment: 'jsdom',
      testMatch: [
        '**/__tests__/**/!(!*.node).(spec|test).ts?(x)',
        '**/!(*.node).(spec|test).ts?(x)'
      ],
      // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
      modulePaths: ['<rootDir>'],
      moduleNameMapper
    },
    {
      name: 'node',
      displayName: 'node',
      testEnvironment: 'node',
      testMatch: ['**/__tests__/**/*.node.(spec|test).ts?(x)', '**/*.node.(spec|test).ts?(x)'],
      // setupFilesAfterEnv: ['<rootDir>/jest.setup.node.ts'],
      moduleNameMapper
    }
  ]
};
