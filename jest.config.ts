// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
import { pathsToModuleNameMapper } from 'ts-jest';

const config = {
  // Stop running tests after `n` failures
  bail: 1,
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['<rootDir>/src/modules/**/services/*.ts'],
  // The directory where Jest should output its coverage files
  coverageDirectory: 'src/__tests__/coverage',
  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['text', 'text-summary', 'lcov'],
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: pathsToModuleNameMapper({
    "@modules/*": ["modules/*"],
    "@config/*": ["config/*"],
    "@shared/*": ["shared/*"]
  }, { prefix: '<rootDir>/src/' }),
  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',
  // The test environment that will be used for testing
  testEnvironment: 'node',
  // The glob patterns Jest uses to detect test files
  testMatch: ['**/src/__tests__/**/*.test.ts'],
  // Indicates whether each individual test should be reported during the run
  verbose: true,
};

export default config;
