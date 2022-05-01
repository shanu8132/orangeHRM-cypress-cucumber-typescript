Feature: Create a Vacancy,Validate and Delete it

    Creating a Vacancy,Validate and Delete it

    Scenario: Login into orangeHRM
    Given I open the orangeHRM Login Page
    When I see "OrangeHRM" in the title
    When I enter username and password
    When I click on Login
    Then I should be navigated to Application HomePage

    Scenario: Create a Vacancy
    Given Navigate to Recruitment and select Vacancies
    When I click Add and fill Vacancy details
    When I click Save Button
    Then I see success message

    Scenario: Validate Vacancy in the Vacancy List
    Given Navigate to Vacancy List Page
    When Select the Vacancy Name and Search
    Then Check the Vacancy in the WebTable

    Scenario: Delete the Vacancy
    Given Check the Vacancy in the WebTable
    When Delete the Vacancy
    Then Check the Success Message

    Scenario: Logout from the Application
    Given I navigate to Logout Button
    When I click on Logout
    Then I should be navigated to Login Page
