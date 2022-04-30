/// <reference types="Cypress" />
import { Given,Then, When } from 'cypress-cucumber-preprocessor/steps';
import orangeHRM_HeaderMenu from "../../page-objects/orangeHRM_HeaderMenu";
import orangeHRM_DirectoryPage from "../../page-objects/orangeHRM_DirectoryPage";

const headerMenu = new orangeHRM_HeaderMenu();
const directoryPage = new orangeHRM_DirectoryPage();

Given('Navigate to the Directory Page',function(){
    headerMenu.getLinkDirectory().click()
})

When('Filter with Job Title {string} and Search',function(jobTitle){
    directoryPage.getDrpDwn_jobTitle().select(jobTitle)
    directoryPage.getBtnSearch().click()
})

Then('Check the name of the employee',function(){
    expect(directoryPage.getWebTable_DirectoryNameList().contains(this.data.EngineerName))
})