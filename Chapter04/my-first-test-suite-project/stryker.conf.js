/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutator: "typescript",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "mocha",
  transpilers: ["typescript"],
  testFramework: "mocha",
  coverageAnalysis: "off",
  tsconfigFile: "tsconfig.json",
  mutate: ["src/**/*.ts"],
};
