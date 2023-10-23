import chaiColors from 'chai-colors';
chai.use(chaiColors);

const colors = {
  background: '#ffffff',
  background_dark: '#0f0f0f',
  font: '#19191B',
  font_dark: '#E5E4E8',
  secondary: 'rgba(0, 0, 0, 0.06)',
  secondary_dark: '#272727',
  bgActive: '#000000',
  bgActive_dark: '#ffffff',
  fontActive: '#ffffff',
  fontActive_dark: '#000000',
  border: '#C4C4C4',
  border_dark: '#383838',
  copyright: 'rgba(0, 0, 0, 0.40)',
  copyright_dark: 'rgba(255, 255, 255, 0.40)',
};

describe('Theme module', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Toggler should be visible', () => {
    cy.get('[data-testid=theme-toggler]').should('be.visible');
  });

  it('Should change theme to dark after clicking on toggler', () => {
    // aliases
    cy.get('body').as('body');
    cy.get('[data-testid=theme-toggler]').as('toggler');
    cy.get('[data-testid=genre]').as('genre');
    cy.get('[data-testid=search-form]').as('search-form');
    cy.get('[data-testid=copyright]').as('copyright');

    // testing body
    cy.get('@body')
      .should('have.css', 'background-color')
      .and('be.colored', `${colors.background}`);
    cy.get('@body').should('have.css', 'color').and('be.colored', `${colors.font}`);

    // testing genre
    cy.get('@genre')
      .last()
      .should('have.css', 'background-color')
      .and('be.colored', `${colors.secondary}`);
    cy.get('@genre')
      .last()
      .should('have.css', 'color')
      .and('be.colored', `${colors.font}`);
    cy.get('@genre')
      .first()
      .should('have.css', 'background-color')
      .and('be.colored', `${colors.bgActive}`);
    cy.get('@genre')
      .first()
      .should('have.css', 'color')
      .and('be.colored', `${colors.fontActive}`);

    // testing search-form
    cy.get('@search-form')
      .should('have.css', 'border-color')
      .and('be.colored', `${colors.border}`);

    // testing copyright
    cy.get('@copyright')
      .should('have.css', 'color')
      .and('be.colored', `${colors.copyright}`);

    // click on toggler
    cy.get('@toggler').first().should('be.visible').click();

    // testing body-dark
    cy.get('@body')
      .should('have.css', 'background-color')
      .and('be.colored', `${colors.background_dark}`);
    cy.get('@body').should('have.css', 'color').and('be.colored', `${colors.font_dark}`);

    // testing genre-dark
    cy.get('@genre')
      .last()
      .should('have.css', 'background-color')
      .and('be.colored', `${colors.secondary_dark}`);
    cy.get('@genre')
      .last()
      .should('have.css', 'color')
      .and('be.colored', `${colors.font_dark}`);
    cy.get('@genre')
      .first()
      .should('have.css', 'background-color')
      .and('be.colored', `${colors.bgActive_dark}`);
    cy.get('@genre')
      .first()
      .should('have.css', 'color')
      .and('be.colored', `${colors.fontActive_dark}`);

    // testing search-form-dark
    cy.get('@genre')
      .should('have.css', 'border-color')
      .and('be.colored', `${colors.border_dark}`);

    // testing copyright-dark
    cy.get('@copyright')
      .should('have.css', 'color')
      .and('be.colored', `${colors.copyright_dark}`);
  });
});
