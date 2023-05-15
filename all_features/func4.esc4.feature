Feature: Filtrar post publicados

@user1 @web
Scenario: Filtrar Post Publicados
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
  And I wait for 7 seconds
