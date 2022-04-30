/// <reference types="cypress" />

class AddVacancy
{
    getBtnAdd(){
        return cy.get('#btnAdd')
    }

    getDrpDwnJobTitle(){
        return cy.get('#addJobVacancy_jobTitle')
    }

    getTxtVacancyName(){
        return cy.get('#addJobVacancy_name')
    }

    getDynamicDrpDwnHiringManager(){
        return cy.get('#addJobVacancy_hiringManager')
    }

    getDynamicDrpDwnList(){
        return cy.get('.ac_results li')
    }

    getTxtPositions(){
        return cy.get('#addJobVacancy_noOfPositions')
    }

    getTxtAreaDescription(){
        return cy.get('#addJobVacancy_description')
    }

    getBtnSave(){
        return cy.get('#btnSave')
    }

    getSuccessMsg(){
        return cy.get('.message')
    }

    getDrpDwnVacancySearch(){
        return cy.get('#vacancySearch_jobVacancy')
    }

    getBtnSearch(){
        return cy.get('#btnSrch')
    }

    getWebTable_VacancyColumn(){
        return cy.get('tr td:nth-child(2)')
    }

    getWebTable_StatusColumn(){
        return cy.get('tr td:nth-child(5)')
    }

    getWebTable_CheckBoxColumn(){
        return cy.get('tr td:nth-child(1)')
    }

    getBtnDelete(){
        return cy.get('#btnDelete')
    }

    getAlertBtnOk(){
        return cy.get('#dialogDeleteBtn')
    }



}

export default AddVacancy;