const path = require('path');

const globalLibDir = path.resolve(process.execPath, '../../lib/node_modules');

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
  ],
  coverageDirectory: '__coverage__',
  moduleDirectories: [
    'node_modules',
    globalLibDir,
  ],
  moduleNameMapper: {
    '\\.(scss|css)$': 'identity-obj-proxy',
  },
  rootDir: '../..',
  testMatch: ['**/__tests__/**/*.js?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  testURL: 'http://localhost',
  transformIgnorePatterns: [
    '/node_modules/(?!topcoder-react-utils)',
  ],
  setupTestFrameworkScriptFile: '<rootDir>/config/jest/setup.js',
};
