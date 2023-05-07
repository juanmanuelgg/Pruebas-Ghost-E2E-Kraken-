Feature: 

@user1 @web
Scenario: Con mi usuario de ghost creo un Tag con un nombre que ya exista
  Given I navigate to page "http://localhost:3001/ghost/"
  And I wait for 2 seconds
  When I enter login email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter login password "<PASSWORD1>"
  And I wait for 1 seconds
  And I submit login
  And I wait for 3 seconds
  Then I should have a nav-bar with functions
