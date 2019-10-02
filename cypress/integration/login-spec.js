
describe('Logs in to Namely', () => {
    it('Navigates to Namely page and logs in the user', () => {
        cy.visit('/')
        cy.get('#user_email').type(Cypress.env('email'))
        cy.get('#user_password').type(Cypress.env('password'))
        cy.get('button.btn').click()
    })
})