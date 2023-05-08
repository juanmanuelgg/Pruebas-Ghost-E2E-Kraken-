Feature: crear post

@user1 @web
Scenario: Con mi usuario de ghost creo un post con titulo
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
  And I navigate to page "http://localhost:8081/ghost/#/editor/post/" 
  And I wait for 2 seconds
  And I enter title post "<TITLEPOST>"
  And I wait for 1 seconds
  And I enter detail post "<DETAILPOST>"
  And I wait for 7 seconds
