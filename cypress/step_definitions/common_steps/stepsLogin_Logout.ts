/// <reference types="Cypress" />
import { Given,Then, When } from 'cypress-cucumber-preprocessor/steps';
import orangeHRM_LoginPage from "../../page-objects/orangeHRM_LoginPage";
import orangeHRM_HeaderMenu from "../../page-objects/orangeHRM_HeaderMenu";

const loginPage = new orangeHRM_LoginPage()
const headerMenu = new orangeHRM_HeaderMenu()

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


Given('I navigate to Logout Button',function(){
    headerMenu.getLinkLogoutMenu().click()
})

When('I click on Logout',function(){
    headerMenu.getLinkLogout().click()
})

Then('I should be navigated to Login Page',function(){
    loginPage.getCurrentURL().should('include','/auth/login')

})

