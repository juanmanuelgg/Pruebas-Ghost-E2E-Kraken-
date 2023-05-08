Feature:Enviar e-mail de invitacion al staff 

@user1 @web
Scenario: Con mi usuario de ghost quiero enviar una invitacion a un email con un rol no existente
  Given I navigate to page "http://localhost:3001/ghost/"
  And I wait for 2 seconds
  When I enter login email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter login password "<PASSWORD1>"
  And I wait for 1 seconds
  And I submit login
  And I wait for 3 seconds
  Then I should have a nav-bar with functions

  When I click on the "staff" function
  And I wait for 1 seconds
  Then I should have this "gh-btn gh-btn-green" button 
  Then I save existing email

  When I click invite people
  And I wait for 1 seconds
  And I enter email Adress  
  And I wait for 1 seconds
  And I change the role
  And I wait for 1 seconds
  And I send invitation 
  And I wait for 6 seconds
  Then I should have email error message "Please select a role."

