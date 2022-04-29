/// <reference types="cypress" />

class LoginPage
{
    getOrangeHRMUrl(){
        return cy.visit('https://opensource-demo.orangehrmlive.com/')
    }

    getLoginPageTitle(){
        return cy.title()
    }

    getTxtUsername(){
        return cy.get('#txtUsername')
    }

    getTxtPassword(){
        return cy.get('#txtPassword')
    }

    getLoginBtn(){
        return cy.get('#btnLogin')
    }

    getCurrentURL(){
        return cy.url()
    }
}

export default LoginPage;