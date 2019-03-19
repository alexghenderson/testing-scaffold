describe('Application', () => {
  it('can load', () => {
    cy.visit('/')
      .getByText(/^Hello/)
      .should('have.text', 'Hello world');
  });
});
