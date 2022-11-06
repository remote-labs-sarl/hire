Feature: Profile

  @todo
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

  @todo
  Scenario: developers profile list's link should open the profile's details
    Given I am on the profile list page
    When clicking on the profile link
    Then I am shown the profile details

  @todo
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

  @todo
  Scenario: developers profile "attributes section" contains the following elements
    Given I am on the profile details page
    Then I should see the "<Section>" section

    Examples:
      | Section                 |
      | Java                    |
      | JavaScript              |
      | C/C++                   |
      | C#                      |
      | .Net                    |
      | HTML 5                  |
      | CSS                     |
      | PHP                     |
      | Ruby                    |
      | Ruby on Rails           |
      | Python                  |
      | Scala                   |
      | Go                      |
      | Kotlin                  |
      | Swift                   |
      | R                       |
      | TypeScript              |
      | SQL                     |
      | NoSQL                   |
      | Objective-C             |
      | Dart                    |
      | React                   |
      | Angular                 |
      | Node.js                 |
      | Vue.js                  |
      | Ember.js                |
      | Meteor.js               |
      | Backbone.js             |
      | Polymer                 |
      | Next.js                 |
      | Express.js              |
      | React Native            |
      | Flutter                 |
      | Xamarin                 |
      | Unity                   |
      | Rust                    |
      | Action Script           |
      | Dart                    |
      | Testing Automation      |
      | Manual Testing          |
      | Selenium                |
      | Cucumber                |
      | Gherkin                 |
      | Cypress                 |
      | Puppeteer               |
      | Apache JMeter           |
      | SoapUI                  |
      | Scrum                   |
      | Agile                   |
      | DevOps                  |
      | Git                     |
      | Bitbucker               |
      | GitLab                  |
      | Maven                   |
      | Jenkins                 |
      | Puppet                  |
      | Ansible                 |
      | Docker                  |
      | Kubernetes              |
      | AWS                     |
      | Azure                   |
      | Splunk                  |
      | ServiceNow              |
      | Elasticsearch           |
      | Kibana                  |
      | CI/CD                   |
      | Scripting               |
      | Terraform               |
      | Teradata                |
      | Datastage               |
      | Informatica Powercenter |
      | Murex MLC               |
      | Calypso                 |
      | Kondor+                 |
      | Gradle                  |
      | Admin                   |
      | UI/UX                   |
      | Architecture            |
      | Business Analysis       |
      | Business Strategy       |
      | Project Management      |
      | Account Management      |
      | Technical Lead          |
      | Enterprise software     |
      | Start-ups               |

  @todo
  Scenario: developers profile "studies section" contains the following elements
    Given I am on the profile details page
    Then I should see the "<Section>" section

    Examples:
      | Section           |
      | Studies           |
      | Bachelor's Degree |
      | Masters Degree    |
      | MBA               |
      | PhD               |

  @todo
  Scenario: developers profile "contact section" contains the following elements
    Given I am on the profile details page
    Then I should see the "<Section>" section

    Examples:
      | Section            |
      | Ask a question     |
      | Schedule a meeting |
      | Make an offer      |









