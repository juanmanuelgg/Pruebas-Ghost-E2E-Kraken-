Feature: Verificar cambio password

@user1 @web
Scenario: Verificar Cambio Contrasena
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I enter login email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter login password "<PASSWORDNEW>"
  And I wait for 2 seconds
  Then I submit login
  And I wait for 2 seconds
  Then I should have a nav-bar with functions
  And I wait for 5 seconds