describe('Currency test', () => {
  it('currencies component should be visible', () => {
    cy.visit('http://localhost:5000');

    cy.get('[data-testid=currencies]').should('be.visible');
    cy.get('[data-testid=currency-card]').should('have.length', 10);
  });

  it('each card should open the modal with the card currency', () => {
    cy.get('[data-testid=currency-card]').as('cards');

    cy.get('@cards').contains('US Dollar').click();

    cy.get('[data-testid=modal-select]').as('modal');

    cy.get('@modal').should('be.visible');
    cy.get('[data-testid=modal-title]').should('contain', 'US Dollar');
    // cy.get('[data-testid=modal]').click();

    cy.get('@cards').contains('Euro').click({ force: true });

    cy.get('@modal').should('be.visible');
    cy.get('[data-testid=modal-title]').should('contain', 'Euro');
    cy.get('[data-testid=modal]').click();
  });

  it('should set a current currency', () => {
    cy.get('[data-testid=modal-select]').as('select');

    cy.get('@select').click();
    cy.get('[data-testid=modal-select-option]').contains('PLN').click();
    cy.get('[data-testid=modal-currency]').should('contain', 'PLN');

    cy.get('@select').click();
    cy.get('[data-testid=modal-select-option]').contains('BYN').click();
    cy.get('[data-testid=modal-currency]').should('contain', 'BYN');

    cy.get('@select').click();
    cy.get('[data-testid=modal-select-option]').contains('USD').click();
    cy.get('[data-testid=modal-currency]').should('contain', 'USD');
  });
});
