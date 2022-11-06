import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(/I visit the home page/, () => {
  cy.visit("/");
});

Then(/I should see a message "(.*)"/, (msg: string) => {
  cy.get("h1").contains(msg);
});
