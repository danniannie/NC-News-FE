describe('/', () => {



  it('Loads the page', () => {
    cy.visit('http://localhost:3000/')
  });

  describe('Navigation Bar', () => {
    it('Loads the Nav', () => {
      cy.visit('http://localhost:3000/')
      cy.get('[data-cy=nav]')
    });
    it('Nav links to the coding', () => {
      cy.visit('http://localhost:3000/')
      cy.get('[data-cy=coding]').click()
      cy.url().should("equal", 'http://localhost:3000/topics/coding')
    });
  });

  describe('Articles Component', () => {

  });
  it('Loads the articles', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=articles]')
  });
  it('Article card includes article title', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=articleCard]')
      .children()
      .contains('Express')
  });
  it('Loads the votes component', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=votes]')
      .contains('Votes')
  });
  it('Article card links to Article Page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=8]').click()
    cy.url().should("equal", 'http://localhost:3000/articles/8')
  });
});

describe('Header component', () => {
  it('Loads the Header', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=header]')
      .children()
      .children()
      .contains('NC News')
  });
  it('Header links to the home page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=header]').click()
    cy.url().should("equal", 'http://localhost:3000/')
  });
});

describe('Sort Block', () => {
  it('Loads the sort', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=sort]')
  });
});

describe('/articles/*', () => {
  beforeEach(() => {
    cy.server()
    cy.route('GET', 'https://nc-news-dy.herokuapp.com/api/articles/33', 'fx:singleArticles.json')
    cy.route('GET', 'https://nc-news-dy.herokuapp.com/api/articles/33/comments', 'fx:comments.json')
  });
  it('Loads article text', () => {
    cy.visit('http://localhost:3000/articles/33')
    cy.get('[data-cy=articleBody]')
      .children()
      .contains('Seafood substitutions are increasing')
  });
  it('Loads add comment box', () => {
    cy.visit('http://localhost:3000/articles/33')
    cy.get('[data-cy=addComments')
  })
  it('Loads comments', () => {
    cy.visit('http://localhost:3000/articles/33')
    cy.get('[data-cy=comments')
  })
});

});


