/// <reference types="cypress" />

class HeaderMenu
{
    getLinkPIM(){
        return cy.get('#menu_pim_viewPimModule')
    }

    getLinkAddEmployee(){
        return cy.get('#menu_pim_addEmployee')
    }

    getLinkRecruitment(){
        return cy.get('#menu_recruitment_viewRecruitmentModule')
    }

    getLinkVacancies(){
        return cy.get('#menu_recruitment_viewJobVacancy')
    }
}

export default HeaderMenu;