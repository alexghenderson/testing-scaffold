const path = require('path');

const resolver = (name, details) => {
  console.log(name, details);
};

module.exports = {
  rootDir: path.join(__dirname, '../src'),
  /*
  moduleNameMapper: {
    '/(.*)$': '<rootDir>/src/$1',
  },
  */
  displayName: 'test',
  moduleFileExtensions: ['js'],
  testMatch: ['<rootDir>/**/__tests__/*.js'],
  setupFilesAfterEnv: [require.resolve('./setup-tests.js')],
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 50,
    },
  },
  resolver: require.resolve('./parcel-resolver.js'),
  "transform": {
    "^.+\\.js?$": "babel-jest"
  },
};
