  Scenario: filtering page should contain filters
    Given I am on filtering page
    Then I should see "<Section>" section

    Examples:
      | Section           |
      | Function          |
      | Price             |
      | Country           |
      | Experience        |
      | Additional Skills |

  Scenario: filtering page should show a list of developers profiles on "Show Results"
    Given I am on filtering page
    When I Select filters
    And I click on Show Results
    Then I am shown a list of profiles
