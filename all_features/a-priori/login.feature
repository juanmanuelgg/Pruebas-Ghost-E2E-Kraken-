Feature: Hacer Login outline con datos CSV

@user1 @web
Scenario Outline: Hacer Login
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  And I have data from "./generate-data/aprioriLogin.csv"
  And I wait for 2 seconds
  When I enter login email CSV "<email>"
  And I wait for 3 seconds
  And I enter login password CSV "<password>"
  And I wait for 3 seconds
  And I submit login
  And I wait for 5 seconds
  Then I should have a nav-bar with functions

  Examples: Datos del CSV
      | id       | email    | password |
      | <valor1> | <valor2> | <valor3>  |
