module.exports = {
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
    "setupFilesAfterEnv": ["<rootDir>/src/setupTests.js"],
  };
  