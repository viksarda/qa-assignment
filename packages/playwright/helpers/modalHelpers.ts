import { Page } from '@playwright/test';
import { modal } from '../selectors/modalSelectors';

export async function handleCookieConsent(
  page: Page,
  shouldAccept: boolean = false
) {
  const closeCookiesModalButton = page.locator(modal.closeCookiesButton);
  const acceptCookiesModal = page.locator(modal.acceptCookiesButton);

  if (shouldAccept) {
    await acceptCookiesModal.click();
  } else {
    await closeCookiesModalButton.click();
  }
}
