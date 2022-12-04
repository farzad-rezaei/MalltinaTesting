// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
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

//start load
Cypress.Commands.add('startLoad', (username, password) => {
  localStorage.setItem("socialPromotNotice", "false")
  cy.visit('/')
  // cy.get('body').click(0,0);  //old way to disable telegram noti
 
})

//log in
Cypress.Commands.add('login', (username, password) => {
  cy.startLoad();
  cy.get('.user-menu-wrap.d-lmd-flex').click()
  cy.get('.user-menu-wrap.d-lmd-flex > .supertips-box > .signin-popup > .signin').click()
  
  cy.get('.signin-form > :nth-child(1) > .form-control').type(username)
  cy.get(':nth-child(2) > .form-control').type(password)
  cy.get('.pl-lsm-2 > .btn').click()
})
