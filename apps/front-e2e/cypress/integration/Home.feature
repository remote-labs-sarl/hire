Feature: Home page
  Scenario: visting the home page
    When I visit home page
    Then I should see a message "Welcome to front!"

  Scenario: home page should contain categories for programming languages and frameworks.
    Given I am on home page
    Then I should see a list of "languages"

  Scenario: home page category link should redirect to filtering page.
    Given I am on home page
    When I click on first language category
    Then I am shown the filtering page
