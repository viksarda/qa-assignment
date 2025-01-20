import { locales } from '../../../libs/fixtures/locations';
import { translations } from '../../../libs/fixtures/translations';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

Object.entries(locales).forEach(([localeName, localeCode]) => {
  describe(`Google localization tests - ${localeName}`, () => {
    beforeEach(() => {
      cy.intercept('GET', '**', (req) => {
        req.headers['Accept-Language'] = localeCode;
      }).as('setLocale');

      cy.visit('/', {
        onBeforeLoad(win) {
          win.localStorage.setItem('locale', localeCode);
        },
      });
      cy.handleCookieConsent(false);
    });

    it(`Should verify localization is set to ${localeName} when searching for "Malta"`, () => {
      cy.fillSearchField('Malta');
      cy.checkButtonTranslation(translations[localeCode].searchButton);
      cy.clickOnSearchButton();
    });

    it(`Should verify localization is set to ${localeName} when searching for "The Multiple"`, () => {
      cy.fillSearchField('The Multiple');
      cy.checkButtonTranslation(translations[localeCode].searchButton);
      cy.clickOnSearchButton();
    });

    it(`Should verify localization is set to ${localeName} when searching for "Valletta"`, () => {
      cy.fillSearchField('Valletta');
      cy.checkButtonTranslation(translations[localeCode].searchButton);
      cy.clickOnSearchButton();
    });
  });
});
