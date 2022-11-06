Feature: Filtering profiles

  Scenario: filtering page should contain filters
    Given I am on the filtering page
    Then I should see the "<Section>" section

    Examples:
      | Section           |
      | Functions         |
      | Price             |
      | Country           |
      | Experience        |
      | Additional Skills |

  Scenario: filtering page should show a list of developers' profiles on "Show Results"
    Given I am on the filtering page
    When I select filters
    And I click on Show Results
    Then I am shown a list of profiles
