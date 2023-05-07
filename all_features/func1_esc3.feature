Feature: Hacer Login 

@user1 @web
Scenario: Con mi usuario y contraseña de ghost quiero hacer login en la pagina haciendo inyeccion de codigo
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 2 seconds
  When I enter login email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter login incorrect password "' or 1=1"
  And I wait for 1 seconds
  And I submit login
  And I wait for 3 seconds
  Then I should have a nav-bar with functions