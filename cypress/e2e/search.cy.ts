import chaiColors from 'chai-colors';
chai.use(chaiColors);

const colors = {
  primary: '#ff8a00',
  border: '#C4C4C4',
};

describe('Search module', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Search should be visible', () => {
    cy.get('[data-testid=search]').get('[data-testid=search-form]').should('be.visible');
    cy.get('[data-testid=search-form]').should('have.css', 'border-color').and('be.colored', `${colors.border}`);
  });

  it('Should change border color after focusing', () => {
    cy.get('[data-testid=search-form]').as('search-form');
    cy.get('@search-form').should('have.css', 'border-color').and('be.colored', `${colors.border}`);
    cy.get('@search-form').first().click();
    cy.get('@search-form').should('have.css', 'border-color').and('be.colored', `${colors.primary}`);
  });

  it('Should change input value and delete it after clicking on genres', () => {
    cy.get('[data-testid=search-input]').as('search-input');
    cy.get('[data-testid=genre]').as('genre');
    cy.get('@search-input').type('inputValue').should('have.value', 'inputValue');
    cy.get('@genre').last().click();
    cy.get('@search-input').should('have.value', '');
  });

  it('Should show searched films after entering more than 3 symbols', () => {
    const titleTest = 'Titanic';
    cy.get('[data-testid=search-input]').as('search-input');
    cy.get('@search-input').type(titleTest);
    cy.get('[data-testid=searched-films]').should('be.visible');
    cy.get('[data-testid=searched-film]').should('include.text', titleTest);
  });
});
