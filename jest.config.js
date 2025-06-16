import '@testing-library/jest-dom';

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    // "^react-router-dom$":"<rootDir>/node-modules/react-router-dom"
  },
};
