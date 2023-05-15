Feature:  publicar el primer post de la lista

@user1 @web
Scenario: Publicar Primer Post
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I enter login email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter login password "<PASSWORD1>"
  And I wait for 1 seconds
  And I submit login  
  Then I wait for 2 seconds
  And I navigate to page "<POST>" 
  And I wait for 1 seconds
  And I click post
  And I wait for 2 seconds
  And I click publish
  And I wait for 2 seconds
  And I click opcion publish
  And I wait for 2 seconds
  And I confirm post publication
  And I wait for 5 seconds

 
  
  