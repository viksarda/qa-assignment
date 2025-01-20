const { defineConfig } = require('cypress');
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    specPattern: 'packages/cypress/e2e/**/*.cy.ts',
    supportFile: 'packages/cypress/support/index.ts',
    fixturesFolder: 'packages/cypress/fixtures',
    screenshotsFolder: 'packages/cypress/screenshots',
    downloadsFolder: 'packages/cypress/downloads',
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
});
