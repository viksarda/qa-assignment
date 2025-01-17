import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import { baseURL } from './packages/playwright/fixtures/urls';
dotenv.config({ path: path.resolve(__dirname, '.env') });

const isHeadless = process.env.HEADLESS === 'true';
const isParallel = process.env.PARRALEL === 'true';

export default defineConfig({
  testDir: './packages/playwright/e2e',
  outputDir: './packages/playwright/results',
  fullyParallel: isParallel,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: './packages/playwright/results', open: 'never' }],
  ],
  //timeout: 30000,
  use: {
    baseURL: baseURL,
    headless: isHeadless,
    viewport: { width: 1280, height: 720 },
    //locale: 'en-US',
    //timezoneId: 'America/Los_Angeles',
    screenshot: 'on',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
