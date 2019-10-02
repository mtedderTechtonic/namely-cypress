describe('Webclock dashboard', () => {
	context('Automates clocking in with Namely', () => {
		it('Navigates Namely page, logs user in', () => {
			cy.visitUrl() // using custom command
			cy.login()
			cy.dismiss()
			cy.url().should('eq', 'https://techtonic.namely.com/') // assertion for this step of the automated process
		})

		it.only('Hits user dashboard, clicks link to redirect to Timesheet', () => {
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
				if ($clock.text().includes('Clocked in')) {
					cy.get('.ClockStatusContainer').screenshot() // Takes a screenshot if user is clocked in..
				} else {
                    // otherwise, clock them in!
					cy.get('#ClockIn > .RootMenuItem').click()
					cy.get('.WorkflowStepTitle').should(
						'contain',
						'Confirmation (Missed Clock Out)'
					)
				}
			})
		})

		it('On user dashboard page, clicks the clock in button', () => {
			cy.get('#ClockIn > .RootMenuItem').click()
			// Asserts that user is already clocked in
			if (
				cy
					.get('.WorkflowStepTitle')
					.should('contain', 'Confirmation (Missed Clock Out)')
			) {
			}
		})
	})
})
