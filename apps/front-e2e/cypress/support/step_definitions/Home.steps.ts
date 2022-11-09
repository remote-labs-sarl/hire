import { Then, Given, When } from "@badeball/cypress-cucumber-preprocessor";

Given(/I visit the home page/, () => {
  cy.visit("/");
});

Then(/I should see a message "(.*)"/, (msg: string) => {
  cy.get("h1").contains(msg);
});

Then(/I should see a list of "Languages"/, () => {
  cy.get("[aria-label='Languages']").should('be.visible');
});

When(/I click on the first language category/, () => {
  cy.get("[aria-label='Languages'] a:first-child()").click();
});
