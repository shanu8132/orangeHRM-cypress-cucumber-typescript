/// <reference types="cypress" />

class AddEmployee
{
    getTxtFirstName(){
        return cy.get('#firstName')
    }

    getTxtLastName(){
        return cy.get('#lastName')
    }

    getTxtEmpID(){
        return cy.get('#employeeId').clear()
    }

    getCheckLoginDetails(){
        return cy.get('#chkLogin')
    }

    getTxtUsername(){
        return cy.get('#user_name')
    }

    getTxtPassword(){
        return cy.get('#user_password')
    }

    getTxtConfirmPassword(){
        return cy.get('#re_password')
    }

    getDrpDwnStatus(){
        return cy.get('#status')
    }

    getBtnSave(){
        return cy.get('#btnSave')
    }

    getLblProfileName(){
        return cy.get('#profile-pic h1')
    }
}

export default AddEmployee;