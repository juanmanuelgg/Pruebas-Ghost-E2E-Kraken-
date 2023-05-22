Feature: crear post

@user1 @web
Scenario: Crear Post
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I enter login email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter login password "<PASSWORD1>"
  And I wait for 1 seconds
  And I submit login  
  Then I wait for 2 seconds
  And I navigate to page "<PAGE>" 
  And I wait for 1 seconds
  And I navigate to page "<EDITORPAGE>" 
  And I wait for 2 seconds
  And I enter title page
  And I wait for 1 seconds
  And I enter detail page
  And I wait for 7 seconds
