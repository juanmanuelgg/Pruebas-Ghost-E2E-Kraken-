Feature: Crear miembro

@user1 @web
Scenario: Crear un nuevo miembro con data aleatoria con feker
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I enter login email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter login password "<PASSWORD1>"
  And I wait for 1 seconds
  And I submit login  
  And I wait for 5 seconds
  Then  I create new member 
  And I wait for 7 seconds
