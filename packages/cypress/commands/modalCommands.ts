import { modal } from '../../../libs/selectors/modalSelectors';

declare global {
  namespace Cypress {
    interface Chainable {
      handleCookieConsent(shouldAccept: boolean): Chainable<void>;
    }
  }
}

Cypress.Commands.add('handleCookieConsent', (shouldAccept) => {
  if (shouldAccept) {
    cy.get(modal.acceptCookiesButton).click();
  } else {
    cy.get(modal.closeCookiesButton).click();
  }
});
