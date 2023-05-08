Feature: Filtrar des publicar primer post

@user1 @web
Scenario: Con mi usuario de ghost deseo despublicar primer post
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
  And I click filter
  And I wait for 2 seconds
  And I click filter for publish
  And I wait for 2 seconds
  And I click post
  And I wait for 2 seconds  
  And I click publish
  And I wait for 2 seconds
  And I clic post unpublished
  And I wait for 2 seconds
  And I save post unpublished
  And I wait for 7 seconds