/** @type {import('ts-jest').JestConfigWithTsJest} **/
require('dotenv').config({ path: '.env.test' });
module.exports = {
  testEnvironment: "node",
  clearMocks: true,
  // rootDir: 'src',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  moduleNameMapper: {
    '^config/(.*)$': '<rootDir>/src/config/$1',
    '^controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '^middlewares/(.*)$': '<rootDir>/src/middlewares/$1',
    '^models/(.*)$': '<rootDir>/src/models/$1',
    '^routes/(.*)$': '<rootDir>/src/routes/$1',
    '^routes$': '<rootDir>/src/routes',
    '^services/(.*)$': '<rootDir>/src/services/$1',
    '^types/(.*)$': '<rootDir>/src/types/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^utils$': '<rootDir>/src/utils',
    '^validation/(.*)$': '<rootDir>/src/validation/$1',
  },
};