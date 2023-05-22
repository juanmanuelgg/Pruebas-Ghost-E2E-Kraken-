Feature: cambiar contraseña del perfil

@user1 @web
Scenario: Cambiar contrasena
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I enter login email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter login password "<PASSWORD1>"
  And I wait for 1 seconds
  And I submit login  
  Then I wait for 2 seconds
  And I clic avatar
  And I wait for 2 seconds
  And I clic img
  And I wait for 2 seconds
  And I enter old password "<PASSWORD1>"
  And I wait for 2 seconds
  And I enter new password ten
  And I wait for 3 seconds  
  And I clic save password
  And I wait for 7 seconds