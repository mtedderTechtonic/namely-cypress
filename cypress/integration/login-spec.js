require('dotenv').config()

describe('Logs in to Namely', () => {
    it('Navigates to Namely page and logs in the user', () => {
        cy.visit('/')
        cy.get('#user_email').type('matthew.tedder@techtonic.com')
        cy.get('#user_password').type('')
        cy.get('button.btn').click()
    })
})