/// <reference types="Cypress" />
import { Given,Then, When } from 'cypress-cucumber-preprocessor/steps';
import orangeHRM_HeaderMenu from "../../page-objects/orangeHRM_HeaderMenu";
import orangeHRM_AddEmployee from "../../page-objects/orangeHRM_AddEmployeePage"
import orangeHRM_ListEmployee from "../../page-objects/orangeHRM_ListEmployeePage"

const headerMenu = new orangeHRM_HeaderMenu()
const addEmployee = new orangeHRM_AddEmployee()
const listEmployee = new orangeHRM_ListEmployee()

Given('Navigate to PIM and select Add Employee',function(){
    headerMenu.getLinkPIM().click()
    headerMenu.getLinkAddEmployee().click({force:true})
})

When('I enter employee details',function(){
    addEmployee.getTxtFirstName().type(this.data.firstname)
    addEmployee.getTxtLastName().type(this.data.lastname)
    addEmployee.getTxtEmpID().type(this.data.empid)
    addEmployee.getCheckLoginDetails().check()
    addEmployee.getTxtUsername().type(this.data.new_username)
    addEmployee.getTxtPassword().type(this.data.new_password, {log:false})
    addEmployee.getTxtConfirmPassword().type(this.data.new_password, {log:false})
    addEmployee.getDrpDwnStatus().should('have.value','Enabled')
})

Then('I click on Save Button',function(){
    addEmployee.getBtnSave().click()
    addEmployee.getLblProfileName().contains(this.data.firstname)
})

Given('Click on Employee List Link',function(){
    headerMenu.getLinkEmployeeList().click({force:true})
})

When('Search Employee with Name',function(){
    cy.wait(1000)
    listEmployee.getTxtEmployeeName().clear().type(this.data.firstname)
    listEmployee.getDynamicDrpDwn_EmployeeName().contains(this.data.firstname).click()
    listEmployee.getBtnSearch().click()
})

Then('Check the Employee details in WebTable',function(){
    listEmployee.getWebTable_NameColumn().each(($el,index)=>{
        if($el.text().includes(this.data.firstname)){
            listEmployee.getWebTable_LastNameColumn().eq(index).then(function(lastname)
            {
                const lname = lastname.text()
                expect(lname).to.equal(this.data.lastname)

            })
        }
    })
    

})

When('Delete the Employee',function(){
    listEmployee.getWebTable_NameColumn().each(($el,index)=>{
        if($el.text().includes(this.data.firstname)){
            listEmployee.getWebTable_CheckBoxColumn().eq(index).click()
            listEmployee.getBtnDelete().click()
           
        }
        listEmployee.getAlertBtnOk().click({force:true})
    })
     
})

Then('Check the Success Message',function(){
    listEmployee.getSuccessMsg().should('include.text','Successfully Deleted')
})