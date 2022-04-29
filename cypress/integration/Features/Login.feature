Feature: Login and Add New Employee
    
    Opening orangeHRM Login Page

    Scenario: Login into orangeHRM
    Given I open the orangeHRM Login Page
    When I see "OrangeHRM" in the title
    When I enter username and password
    When I click on Login
    Then I should be navigated to Application HomePage

    Scenario: Add new Employee
    Given Navigate to PIM and select Add Employee
    When I enter employee details
    Then I click on Save Button
