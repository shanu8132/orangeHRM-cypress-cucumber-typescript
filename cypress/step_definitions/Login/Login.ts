/// <reference types="Cypress" />
import { Given,Then, When } from 'cypress-cucumber-preprocessor/steps';
import orangeHRM_LoginPage from "../../page-objects/orangeHRM_LoginPage";
import orangeHRM_HeaderMenu from "../../page-objects/orangeHRM_HeaderMenu";
import orangeHRM_AddEmployee from "../../page-objects/orangeHRM_AddEmployee"

const loginPage = new orangeHRM_LoginPage()
const headerMenu = new orangeHRM_HeaderMenu()
const addEmployee = new orangeHRM_AddEmployee()

// beforeEach(function(){
//     cy.fixture('testData').then(function(data){
//         this.data = data
//     })
// })

Given('I open the orangeHRM Login Page',function()
{
    loginPage.getOrangeHRMUrl()
})

When('I see {string} in the title',function(title){
    loginPage.getLoginPageTitle().should('include',title)
})

When('I enter username and password',function(){
    loginPage.getTxtUsername().type(this.data.username)
    loginPage.getTxtPassword().type(this.data.password, {log:false})
})

When('I click on Login',function(){
    loginPage.getLoginBtn().click()
})

Then('I should be navigated to Application HomePage',function(){
    loginPage.getCurrentURL().should('include','dashboard')
})

Given('Navigate to PIM and select Add Employee',function(){
    headerMenu.getLinkPIM().click()
    headerMenu.getLinkAddEmployee().click({force:true})
})

When('I enter employee details',function(){
    addEmployee.getTxtFirstName().type(this.data.firstname)
    addEmployee.getTxtLastName().type(this.data.lastname)
    addEmployee.getTxtEmpID().type(this.data.empid)
    addEmployee.getCheckLoginDetails().check()
    addEmployee.getTxtUsername().type(this.data.new_username)
    addEmployee.getTxtPassword().type(this.data.new_password, {log:false})
    addEmployee.getTxtConfirmPassword().type(this.data.new_password, {log:false})
    addEmployee.getDrpDwnStatus().should('have.value','Enabled')
})

Then('I click on Save Button',function(){
    addEmployee.getBtnSave().click()
    addEmployee.getLblProfileName().contains(this.data.firstname)
})

