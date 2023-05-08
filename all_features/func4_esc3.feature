Feature:  editar el primer post de la lista

@user1 @web
Scenario: Con mi usuario de ghost edito el primer post de la lista
  Given I navigate to page "http://localhost:8081/ghost/"
  And I wait for 2 seconds
  When I enter login email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter login password "<PASSWORD1>"
  And I wait for 1 seconds
  And I submit login  
  Then I wait for 2 seconds
  And I navigate to page "http://localhost:8081/ghost/#/posts/" 
  And I wait for 1 seconds
  And I click post
  And I wait for 2 seconds
  And I enter title post edit "<TITLEPOSTEDIT>"
  And I wait for 2 seconds
  And I enter detail post edit "<DETAILPOSTEDIT>"
  And I wait for 7 seconds
