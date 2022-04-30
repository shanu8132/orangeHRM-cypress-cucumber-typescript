Feature: Search Employee in Directory
    
    Search an Employee in the Directory by JobTitle and Validate the Name

    Scenario: Login into orangeHRM
    Given I open the orangeHRM Login Page
    When I see "OrangeHRM" in the title
    When I enter username and password
    When I click on Login
    Then I should be navigated to Application HomePage

    Scenario: Filter Employee with Job Title and Validate the name
    Given Navigate to the Directory Page
    When Filter with Job Title "Engineer" and Search
    Then Check the name of the employee

    Scenario: Logout from the Application
    Given I navigate to Logout Button
    When I click on Logout
    Then I should be navigated to Login Page