Feature: Despublicar primer post de la lista publicado

@user1 @web
Scenario: Despublicar Primer Post
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