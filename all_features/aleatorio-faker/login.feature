Feature: Hacer Login 

@user1 @web
Scenario: Hacer Login
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I enter login email "$email_1"
  And I wait for 2 seconds
  And I enter login password "$password_1"
  And I wait for 1 seconds
  And I submit login
  And I wait for 5 seconds
  Then I should have a nav-bar with functions
