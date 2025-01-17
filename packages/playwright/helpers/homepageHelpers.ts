import { expect, Page } from 'playwright/test';
import { homepage } from '../selectors/homepageSelectors';

export async function fillSearchField(page: Page, value: string) {
  const searchInputSelector = page.locator(homepage.searchInput);
  await searchInputSelector.fill(value);
}

export async function clickOnSearchButton(page: Page) {
  const searchButtonSelector = page.locator(homepage.searchButton).first();
  await searchButtonSelector.click();
}

export async function checkButtonTranslation(page: Page, value: string) {
  const searchButtonSelector = page.locator(homepage.searchButton).first();
  await expect(searchButtonSelector).toHaveAttribute('aria-label', value);
}
