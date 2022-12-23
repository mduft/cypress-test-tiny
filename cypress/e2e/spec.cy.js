/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.origin('https://www.w3schools.com', () => {
      cy.visit('/howto/howto_html_file_upload_button.asp');

      cy.get('input[type=file]').selectFile({ contents: 'cypress/fixtures/example.json' }, { force: true });
    });
  });
});
