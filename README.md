# orangeHRM-cypress-cucumber-typescript
Cypress BDD based Automation Framework using TypeScript with Allure Reporting

# Application Under Test
orangeHRM Demo Website
## url
https://opensource-demo.orangehrmlive.com/

## To run the project follow below steps
1) Clone the Repository
2) On Terminal run command: npm i
3) Let the packages and dependencies to install on your machine
4) To start the test use command: npm test

## Test Scenarios

### TC_01_AddEmployee_E2E
This TC verfies the End to End Addition/Validation/Deletion of Employee, functionality of the Application.
1) Login into the Application
2) Add Employee
3) Validate if the newly added employee name present in the Employee list or not.
4) Delete the Employee and Check the Success Message.

### TC_02_CreateVacancy_E2E
This TC verfies the End to End Addition/Validation/Deletion of new Vacancy, functionality of the Application.
1) Login into the Application
2) Create new Vacancy
3) Validate if the newly added Vacancy present in the Vacancy list or not.
4) Delete the Vacancy and Check the Success Message.

### TC_03_DirectorySearch
This TC verfies the Search Directory feature of the Application
1) Login into the Application
2) On Directory Page, Filter the Employees with 'Job Title'.
3) Check if a specfic employee is present in the list or not

#### Application Snapshots

<img width="960" alt="image" src="https://user-images.githubusercontent.com/11864554/166165293-a9d107d8-d45e-4708-84c2-c21e63596091.png">

<img width="960" alt="image" src="https://user-images.githubusercontent.com/11864554/166165313-acf6d135-e082-4b79-b171-7c9e39e03302.png">

<img width="959" alt="image" src="https://user-images.githubusercontent.com/11864554/166165336-7b618ec5-d281-4aea-b29f-915ad161b5cb.png">


# Report Snapshots

### Dashboard overview

<img width="959" alt="image" src="https://user-images.githubusercontent.com/11864554/166164021-4fdaaa47-ac0f-4d90-b85a-60387b7d127e.png">

### Suites

<img width="959" alt="image" src="https://user-images.githubusercontent.com/11864554/166164058-14ab0682-3678-4bfa-bece-94a6e084f63d.png">

### History with Failed Scenario

<img width="960" alt="image" src="https://user-images.githubusercontent.com/11864554/166164153-90cad03b-690e-4dae-96a3-d6afffc16edc.png">


### Graphs

<img width="959" alt="image" src="https://user-images.githubusercontent.com/11864554/166164085-57d2bc1e-dcec-4489-b287-a645d8973b7f.png">


