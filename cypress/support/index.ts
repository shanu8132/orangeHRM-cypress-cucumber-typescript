// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import '@shelex/cypress-allure-plugin';
import './commands'

declare global {
  namespace Cypress {
  interface Chainable {
    searchVacancy(vacancy_name: string): Chainable<Element>;
  }
}}

// Alternatively you can use CommonJS syntax:
// require('./commands')

require('@shelex/cypress-allure-plugin');

// Cypress.Cookies.defaults({
//     preserve: ['Loggedin','orangehrm'],
//   })

  beforeEach(function(){
    cy.fixture('testData').then(function(data){
        this.data = data
    })

    Cypress.Cookies.defaults({
      preserve: ['Loggedin','orangehrm'],
    })
})

