Feature: Hacer Login 

@user1 @web
Scenario Outline: Hacer Login
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  Given I read file CSV "<FILEPATH>"
  And I wait for 2 seconds
  When I enter login email "<email>"
  And I wait for 2 seconds
  And I enter login password "<password>"
  And I wait for 1 seconds
  And I submit login
  And I wait for 5 seconds
  Then I should have a nav-bar with functions

   Examples:
      | id | email | password |
      |<CSV:aprioriLogin.csv>|||
