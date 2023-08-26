describe('Theme test', () => {
  it('should be set the dark mode', () => {
    cy.visit('http://localhost:5000');
    cy.get('[data-testid=app]').should('have.class', 'dark');
  });

  it('theme button should be on the screen', () => {
    cy.get('[data-testid=theme-button]').should('be.visible');
  });

  it('theme button should toggle the app theme', () => {
    cy.get('[data-testid=theme-button]').as('theme-button');

    cy.get('@theme-button').click();

    cy.get('[data-testid=app]').should('have.class', 'light');

    cy.get('@theme-button').click();

    cy.get('[data-testid=app]').should('have.class', 'dark');

    cy.get('@theme-button').click();

    cy.get('[data-testid=app]').should('have.class', 'light');
  });
});
