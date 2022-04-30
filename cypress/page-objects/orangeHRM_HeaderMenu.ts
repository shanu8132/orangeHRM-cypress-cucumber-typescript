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

    getLinkLogoutMenu(){
        return cy.get('#welcome')
    }

    getLinkLogout(){
        return cy.contains('Logout')
    }

    getLinkEmployeeList(){
        return cy.get('#menu_pim_viewEmployeeList')
    }

    getLinkDirectory(){
        return cy.get('#menu_directory_viewDirectory')
    }
}

export default HeaderMenu;