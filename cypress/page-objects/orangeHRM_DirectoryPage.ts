/// <reference types="cypress" />

class DirectoryPage
{
    getDrpDwn_jobTitle(){
        return cy.get('#searchDirectory_job_title')
    }

    getBtnSearch(){
        return cy.get('#searchBtn')
    }

    getWebTable_DirectoryNameList(){
        return cy.get('tr td ul li:nth-child(1)')
    }
    
}

export default DirectoryPage;