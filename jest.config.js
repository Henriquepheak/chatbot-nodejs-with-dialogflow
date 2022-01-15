module.exports = {
  testEnvironment: 'node',
  testTimeout: 30000,
  moduleFileExtensions: ['js'],
  transformIgnorePatterns: ['/node_modules/'],
  testMatch: [
    '<rootDir>/**/__tests__/**/*.js',
    '<rootDir>/**/*.{spec,test}.js',
  ],
};
