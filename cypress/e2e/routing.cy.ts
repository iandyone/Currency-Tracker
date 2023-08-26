describe('Routing test', () => {
  const routes = ['timeline', 'card', 'contacts'];

  it('should open a home page fisrt', () => {
    cy.visit('http://localhost:5000');

    cy.get('[data-testid=home-page]').should('be.visible');
    cy.url().should('include', '/');

    routes.forEach((route) => {
      cy.url().should('not.include', route);
    });
  });

  it('should redirect to the pages', () => {
    routes.forEach((route) => {
      cy.get(`[data-testid=${route}-route]`).click();
      cy.get(`[data-testid=${route}-page]`).should('be.visible');
      cy.url().should('include', route);
    });
  });
});
