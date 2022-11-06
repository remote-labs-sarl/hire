Feature: Contact page

  @todo
  Scenario: contact links should open the contact page
    Given I am on the profile details page
    When clicking on the contact buttons
    Then I am shown the contact page

  @todo
  Scenario: contact page contains a space for text
    Given I am on the contact page
    Then I should see the "space for text" section

  @todo
  Scenario: contact page contains a send button
    Given I am on the contact page
    Then I should see the send button

