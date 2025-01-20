# QA Assignment

Welcome to the testing automation solution for Google Localization.

This repository is an Nx monorepo that consists of two packages: `Playwright` and `Cypress`.

Each package includes a spec that contains tests, however with different approaches.

## Getting Started

1. Clone the repo
   ```sh
   git clone https://github.com/viksarda/qa-assignment.git
   ```
2. Copy the `.env.example` file
   ```sh
   cp .env.example .env
   ```
3. Update the `.env` file by adding:
   ```sh
   BASE_URL="https://www.google.com"
   ```   
4. Run the tests (both playwright and cypress)
   ```sh
   npm run test
   ```

### Additional scripts

Execute only `Cypresss` tests
   ```sh
   npm run cypress:test
   ```
Execute only `Playwright` tests
   ```sh
   npm run playwright:test
   ```
Execute `prettier` to format your code
   ```sh
   npm run prettier
   ```

To list all of the available scripts run:
   ```sh
   npm run-script
   ```
## Problems and Solutions

During this development process, there have been multiple challenges and obstacles. I will list most of them as well as the according sollution.

### How to check for localization

The only reason why this was tricky is because of google's reCAPTCHA. After spending some time to make the tests as humanoid as possible, in order to bypass the validation, this could not be done.

The most reliable results turned out to be when runnning in headless mode, but even then, the test results were not consistent. In order to keep the stability and integrity of the tests, `I solved this by checking the translation of the site before rendering the reCAPTCHA`.

At the end of every test, I targeted the main search button as an identifier that the localization was set correctly according to the translation. (alternative was to send a GET request of the locale in the browser context, but proved to be less reliable)

### How to categorize the tests

There were 2 approaches to this:

1. `Static tests` (Playwright)

2. `Dynamic tests` (Cypress)

In this perticular case, I only used 2 different locales which means that writing the tests statically is better for stability, CICD and avoiding loops to generate new unexpected tests and mess with report history. (`google-localization.spec.ts`)

However in the case where this needs to be tested with more locales, to avoid code repetition, I implemented a dynamic solution in Cypress. This will generate the same amount of test suites as there are locales to test. (`google-localization.cy.ts`)

For this particular scenario I would use `Static Tests`