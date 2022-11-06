Feature: Home page

  Scenario: visiting the home page
    Given I visit the home page
    Then I should see a message "Welcome to the front!"

  @todo
  Scenario: home page should contain categories for programming languages and frameworks.
    Given I visit the home page
    Then I should see a list of "languages"

  @todo
  Scenario: home page category link should redirect to the filtering page.
    Given I visit the home page
    When I click on the first language category
    Then I am shown the filtering page
