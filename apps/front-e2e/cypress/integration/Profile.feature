Feature: Profile

  Scenario: details of a profile link inside the profile list
    Given I am on profile list page
    Then I should see the "<Section>" section

    Examples:
      | Section          |
      | Profile image    |
      | Full name        |
      | Current position |
      | Current company  |
      | Country          |
      | Top skills       |
      | Good fit         |

  Scenario: developers profile list's link should open the profile's details
    Given I am on the profile list page
    When clicking on the profile link
    Then I am shown the profile details

  Scenario: developers profile "main section" contains the following elements
    Given I am on the profile details page
    Then I should see the "<Section>" section

    Examples:
      | Section             |
      | Price range         |
      | Profile image       |
      | Current position    |
      | Years of experience |
      | Functions           |
      | Company             |
      | Country             |
      | About me            |
      | CV                  |
      | Certifications      |
      | Endorsements        |
