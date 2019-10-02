describe('Logs in to Namely', () => {
	it('Navigates to Namely page and logs in the user', () => {
		cy.visitUrl()
		cy.login()
	})
})
