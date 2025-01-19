import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'packages/cypress/e2e/**/*.cy.ts',
    supportFile: 'packages/cypress/support/index.ts',
    fixturesFolder: 'packages/cypress/fixtures',
    screenshotsFolder: 'packages/cypress/screenshots',
    retries: {
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      // You can add custom node event listeners here
    },
  },
});
