import chaiColors from 'chai-colors';
chai.use(chaiColors);

const colors = {
  font: '#19191B',
  secondary: 'rgba(0, 0, 0, 0.06)',
  bgActive: '#000000',
  fontActive: '#ffffff',
  fontActive_dark: '#000000',
};

describe('Sort module', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Sort should be visible', () => {
    cy.get('[data-testid=genre]').as('genre');
    cy.get('[data-testid=sort]').get('@genre').should('be.visible');
  });

  it('First genre All should be activated and have unique color', () => {
    cy.get('[data-testid=genre]').contains('all').as('all-genre');
    cy.get('[data-testid=genre]').as('genre');
    cy.get('@all-genre').should('have.css', 'background-color').and('be.colored', `${colors.bgActive}`);
    cy.get('@all-genre').should('have.css', 'color').and('be.colored', `${colors.fontActive}`);
    cy.get('@genre').last().should('have.css', 'background-color').and('not.be.colored', `${colors.bgActive}`);
    cy.get('@genre').last().should('have.css', 'color').and('not.be.colored', `${colors.fontActive}`);
  });

  it('Should change genre color after click', () => {
    cy.get('[data-testid=genre]').as('genre');
    cy.get('@genre').last().click();
    cy.get('@genre').last().should('have.css', 'background-color').and('be.colored', `${colors.bgActive}`);
    cy.get('@genre').last().should('have.css', 'color').and('be.colored', `${colors.fontActive}`);
  });
});
