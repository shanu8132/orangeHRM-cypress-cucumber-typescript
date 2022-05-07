import orangeHRM_AddVacancy from "../page-objects/orangeHRM_AddVacancyPage";
const addVacancy = new orangeHRM_AddVacancy();

Cypress.Commands.add('searchVacancy', (vacancy_name) => { 
    addVacancy.getWebTable_VacancyColumn().each(($el,index)=>{
        if($el.text().includes(vacancy_name)){
            addVacancy.getWebTable_StatusColumn().eq(index).then(function(status)
            {
                const actualStatus = status.text()
                expect(actualStatus).to.equal('Active')
                
    
            })
        }
        
    })
 })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
