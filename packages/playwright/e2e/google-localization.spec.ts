import { test } from '@playwright/test';
import { locales } from '../../../libs/fixtures/locations';
import { handleCookieConsent } from '../helpers/modalHelpers';
import {
  checkButtonTranslation,
  clickOnSearchButton,
  fillSearchField,
} from '../helpers/homepageHelpers';
import { malta, slovenia } from '../../../libs/fixtures/translations';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await handleCookieConsent(page, false);
});

test.describe(`Google localization tests - Slovenia`, () => {
  test.use({
    locale: locales.slovenia,
  });

  test(`Should verify localization is set to Slovenia when searching for "Malta"`, async ({
    page,
  }) => {
    await fillSearchField(page, 'Malta');
    await checkButtonTranslation(page, slovenia.searchButton);
    await clickOnSearchButton(page);
  });

  test(`Should verify localization is set to Slovenia when searching for "The Multiple"`, async ({
    page,
  }) => {
    await fillSearchField(page, 'The Multiple');
    await checkButtonTranslation(page, slovenia.searchButton);
    await clickOnSearchButton(page);
  });

  test(`Should verify localization is set to Slovenia when searching for "Valletta"`, async ({
    page,
  }) => {
    await fillSearchField(page, 'Valletta');
    await checkButtonTranslation(page, slovenia.searchButton);
    await clickOnSearchButton(page);
  });
});

test.describe(`Google localization tests - Malta`, () => {
  test.use({
    locale: locales.malta,
  });

  test(`Should verify localization is set to Malta when searching for "Malta"`, async ({
    page,
  }) => {
    await fillSearchField(page, 'Malta');
    await checkButtonTranslation(page, malta.searchButton);
    await clickOnSearchButton(page);
  });

  test(`Should verify localization is set to Malta when searching for "The Multiple"`, async ({
    page,
  }) => {
    await fillSearchField(page, 'The Multiple');
    await checkButtonTranslation(page, malta.searchButton);
    await clickOnSearchButton(page);
  });

  test(`Should verify localization is set to Malta when searching for "Valletta"`, async ({
    page,
  }) => {
    await fillSearchField(page, 'Valletta');
    await checkButtonTranslation(page, malta.searchButton);
    await clickOnSearchButton(page);
  });
});
