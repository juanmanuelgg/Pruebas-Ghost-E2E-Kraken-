Feature: crear post

@user1 @web
Scenario Outline: Crear Post
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
  And I navigate to page "<EDITORPOST>" 
  And I wait for 2 seconds
  And I consume API 
  And I wait for 10 seconds
