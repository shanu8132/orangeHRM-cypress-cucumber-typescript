/// <reference types="cypress" />

class ListEmployee
{
    getTxtEmployeeName(){
        return cy.get('#empsearch_employee_name_empName')
    }

    getDynamicDrpDwn_EmployeeName(){
        return cy.get('.ac_results li')
    }

    getBtnSearch(){
        return cy.get('#searchBtn')
    }

    getBtnDelete(){
        return cy.get('#btnDelete')
    }

    getSuccessMsg(){
        return cy.get('.message')
    }

    getWebTable_NameColumn(){
        return cy.get('tr td:nth-child(3)')
    }

    getWebTable_LastNameColumn(){
        return cy.get('tr td:nth-child(4)')
    }

    getWebTable_CheckBoxColumn(){
        return cy.get('tr td:nth-child(1)')
    }

    getAlertBtnOk(){
        return cy.get('#dialogDeleteBtn')
    }
}

export default ListEmployee;