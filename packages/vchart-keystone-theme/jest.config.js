const baseJestConfig = require('@internal/jest-config/jest.base');

module.exports = {
  ...baseJestConfig,
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    ...baseJestConfig.moduleNameMapper,
    '^\\./getCSSVariableValue\\.js$': '<rootDir>/src/design-tokens/getCSSVariableValue.ts'
  }
};
