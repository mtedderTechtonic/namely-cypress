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
Cypress.Commands.add("login", (email=(Cypress.env('email')), password=(Cypress.env('password'))) => {
    cy.get('#user_email').type(email)
    cy.get('#user_password').type(`${password}{enter}`)
    // cy.get('button.btn').click()
})

Cypress.Commands.add('visitUrl', () => {
    cy.visit('/')
})

Cypress.Commands.add('dismiss', () => {
    cy.on('uncaught:exception', () => {
        done()
        return false
    }) // bypasses single uncaught exception error
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
