describe('Rendering and navigation', () => {
  it('should navigate between pages without crashing', () => {
    cy.visit('http://localhost:3000/about/');
    cy.findAllByText(/framework/i).should('exist');
  });
});
