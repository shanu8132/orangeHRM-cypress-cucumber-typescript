/// <reference types="Cypress" />
import { Given,Then, When } from 'cypress-cucumber-preprocessor/steps';
import orangeHRM_HeaderMenu from "../../page-objects/orangeHRM_HeaderMenu";
import orangeHRM_AddVacancy from "../../page-objects/orangeHRM_AddVacancyPage";

const headerMenu = new orangeHRM_HeaderMenu();
const addVacancy = new orangeHRM_AddVacancy();

Given('Navigate to Recruitment and select Vacancies',function(){
    headerMenu.getLinkRecruitment().click()
    headerMenu.getLinkVacancies().click({force:true})
})

When('I click Add and fill Vacancy details',function(){
    addVacancy.getBtnAdd().click()
    addVacancy.getDrpDwnJobTitle().select(this.data.job_title)
    addVacancy.getTxtVacancyName().type(this.data.vacancy_name)
    addVacancy.getDynamicDrpDwnHiringManager().type('A')
    addVacancy.getDynamicDrpDwnList().eq(4).click()
    addVacancy.getTxtPositions().type(this.data.positions)
    addVacancy.getTxtAreaDescription().type(this.data.vacancy_description)
})

When('I click Save Button',function(){
    addVacancy.getBtnSave().click()
})

Then('I see success message',function(){
    addVacancy.getSuccessMsg().should('include.text','Successfully Saved')
})

Given('Navigate to Vacancy List Page',function(){
    headerMenu.getLinkVacancies().click({force:true})
})

When('Select the Vacancy Name and Search',function(){
    addVacancy.getDrpDwnVacancySearch().select(this.data.vacancy_name)
    addVacancy.getBtnSearch().click()
})

Then('Check the Vacancy in the WebTable',function(){
    //Used the Custom Command Functionalty Here
    //Actual Implementation is in /support/commands.ts and declaration is in /support/index.ts
     cy.searchVacancy(this.data.vacancy_name)
})

When('Delete the Vacancy',function(){
    addVacancy.getWebTable_VacancyColumn().each(($el,index)=>{
        if($el.text().includes(this.data.vacancy_name)){
            addVacancy.getWebTable_CheckBoxColumn().eq(index).click()
            addVacancy.getBtnDelete().click()
           
        }
        addVacancy.getAlertBtnOk().click({force:true})
    })
     
})

Then('Check the Success Message',function(){
    addVacancy.getSuccessMsg().should('include.text','Successfully Deleted')
})