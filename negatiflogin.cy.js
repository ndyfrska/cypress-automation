describe('negatif login day 18', () => {
  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('#username')
    .type('admin')
    .should('be.visible')

    cy.get('#password')
    .type('SuperSecretPassword!')
  
    cy.get('.radius')
    .click()

    cy.wait(100)
  })
})