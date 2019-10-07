describe('Webclock dashboard', () => {
	context('Automates clocking out with Namely', () => {
		it.only('Logs user in, handles clock-out operation', () => {
			cy.visitUrl()

			cy.login()

			cy.on('uncaught:exception', () => {
				done()
				return false
			})

			cy.get(
				'[href="https://techtonic.namely.com/api/v1/oauth2/authorize?approve=true&client_id=ntEFa396LFgtaRehp14fUzqhe7FpnGZTN4RdWn8H1EdssY05IMoLIkyMw1jUjQvV&redirect_uri=https%3A%2F%2F300026.namelytcp.com%2Fapp%2Fwebclock%2FEmployeeAutoLogOn.html&response_type=code&state=techtonic"]'
			)
				.invoke('removeAttr', 'target')
				.click()
			cy.get('.approve > #buttons > .btn').click()
			// Conditional check..
			cy.get('.ClockStatusContainer').then($clock => {
				if ($clock.text().includes('Clocked out')) {
					cy.get('.ClockStatusContainer').screenshot() // Takes a screenshot if user is clocked in..
				} else {
					// otherwise, clock them in!
					cy.get('#ClockOut > .RootMenuItem')
					cy.get('.BtnAction').click()
					cy.get('.ClockStatusContainer').screenshot()
					// cy.get('.approve > #buttons > .btn').click()
				}
			})
		})
	})
})
