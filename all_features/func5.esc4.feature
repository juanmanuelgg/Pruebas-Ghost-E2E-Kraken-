Feature: Verificar cambio password

@user1 @web
Scenario: Con mi usuario y contraseña de ghost deseo verificar el cambio de contraseña
  Given I navigate to page "http://localhost:8081/ghost/#/signin"
  And I wait for 2 seconds
  When I enter login email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter login password "<PASSWORDNEW>"
  And I wait for 1 seconds
  And I submit login
  And I wait for 5 seconds
  Then I should have a nav-bar with functions