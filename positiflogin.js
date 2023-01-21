describe('day18', () => {
  it('heroku login', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username')
    .type('tomsmith')
    .should('be.visible')

    cy.get('#password')
    .type('SuperSecretPassword!')
  
    cy.get('.fa')
    .click()

    cy.wait(100)

    cy.get('.button')
    .click()
  })

})