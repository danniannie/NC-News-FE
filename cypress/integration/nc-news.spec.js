describe('/', () => {
  it('Loads the page', () => {
    cy.visit('http://localhost:3000/')
    expect(true).to.be.true
  });
  it('Loads the articles', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=articles]')
    expect(true).to.be.true
  });
  it('Loads the Header', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=header]')
    expect(true).to.be.true
  });
  it('Loads the Nav', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=nav]')
    expect(true).to.be.true
  });
  it('Loads the sort', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=sort]')
    expect(true).to.be.true
  });
});
