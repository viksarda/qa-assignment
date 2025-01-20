import { homepage } from '../../../libs/selectors/homepageSelectors';

declare global {
  namespace Cypress {
    interface Chainable {
      fillSearchField(value: string): Chainable<void>;
      clickOnSearchButton(): Chainable<void>;
      checkButtonTranslation(value: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add('fillSearchField', (value) => {
  cy.get(homepage.searchInput).type(value);
});

Cypress.Commands.add('clickOnSearchButton', () => {
  cy.get(homepage.searchButton).first().click();
});

Cypress.Commands.add('checkButtonTranslation', (value) => {
  cy.get(homepage.searchButton)
    .first()
    .should('have.attr', 'aria-label', value);
});
