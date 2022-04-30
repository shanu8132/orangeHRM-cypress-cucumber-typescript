Feature: Add New Employee
    
    Add New Employee,Validate and Delete

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

    Scenario: Validate Employee in the Employee List
    Given Click on Employee List Link
    When Search Employee with Name
    Then Check the Employee details in WebTable

    Scenario: Delete the Employee
    Given Check the Employee details in WebTable
    When Delete the Employee
    Then Check the Success Message

    Scenario: Logout from the Application
    Given I navigate to Logout Button
    When I click on Logout
    Then I should be navigated to Login Page
