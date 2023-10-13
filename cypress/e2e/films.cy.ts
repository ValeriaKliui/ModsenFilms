import { FILMS_LIMIT } from '@constants/filmsConstants';
import chaiColors from 'chai-colors';
chai.use(chaiColors);

describe('Films module', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Films should be visible', () => {
    cy.get('[data-testid=films-container]')
      .get('[data-testid=film-card')
      .get('[data-testid=button-show-more')
      .should('be.visible');
    cy.get('[data-testid=film-card').should('have.length', FILMS_LIMIT);
  });

  it('Should display filmc cards with info', () => {
    cy.get('[data-testid=film-preview]')
      .get('[data-testid=film-poster]')
      .get('[data-testid=film-title]')
      .should('be.visible')
      .should('have.length', FILMS_LIMIT);
  });

  it('Should display more films after clicking ob button show more', () => {
    cy.get('[data-testid="button-show-more"]').click();
    cy.get('[data-testid=film-card').should('have.length', 2 * FILMS_LIMIT);

    cy.get('[data-testid="button-show-more"]').click();
    cy.get('[data-testid=film-card').should('have.length', 3 * FILMS_LIMIT);

    cy.get('[data-testid="button-show-more"]').click();
    cy.get('[data-testid=film-card').should('have.length', 4 * FILMS_LIMIT);
  });

  it('Should open modal after click on film', () => {
    cy.get('[data-testid=film-card').first().click();
    cy.get('[data-testid=modal').get('[data-testid=video').should('be.visible');
  });

  it('Should close modal after click out of video', () => {
    cy.get('[data-testid=film-card').first().click();
    cy.wait(2000);
    cy.get('body').click(0, 0);
    cy.get('[data-testid=modal').should('not.be.visible');
  });
});
