describe('Diagram tests', () => {
  it('timeline component should be visible', () => {
    cy.visit('http://localhost:5000');

    cy.get('[data-testid=timeline-route]').click();
    cy.get('[data-testid=timeline]').should('be.visible');
  });

  it('should create the diagram only after providing a correct data', () => {
    cy.get('[data-testid=timeline-currency]').as('title');
    cy.get('[data-testid=timeline-select]').as('select');

    cy.get('@select').click();
    cy.get('[data-testid=timeline-select-option]').as('options');

    cy.get('@options').should('have.length', 10);
    cy.get('@options').contains('US Dollar').click();
    cy.get('@title').should('contain', 'US Dollar');

    cy.get('@select').click();
    cy.get('@options').contains('Euro').click();
    cy.get('@title').should('contain', 'Euro');

    cy.get('[data-testid=timeline-input]').as('inputs');
    cy.get('@inputs').should('have.length', 30);
    cy.get('@inputs').each(($input, index) => {
      cy.wrap($input).type(`${index + 1}`);
    });

    cy.get('[data-testid=timeline-button]').as('button');
    cy.get('@button').should('be.visible');
  });

  it('should show the currencies costs diagram when the button is avavible', () => {
    cy.get('[data-testid=timeline-button]').as('button');
    cy.get('@button').click();

    cy.get('[data-testid=diagram]').as('diagram');
    cy.get('@diagram').should('be.visible');
  });
});
