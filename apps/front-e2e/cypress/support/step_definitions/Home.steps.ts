import { Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given(/I visit the home page/, () => {
  cy.visit("/");
});

Then(/I should see a message "(.*)"/, (msg: string) => {
  cy.get("h1").contains(msg);
});

Then(/I should see a list of "Languages"/, () => {
  cy.get("[aria-label='Languages']").should('be.visible');
});
