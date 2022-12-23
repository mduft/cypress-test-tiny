/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    let name = 'example.json';

    // THIS WORKS
    cy.fixture(name, null).then((x) => cy.log(x));

    cy.origin('https://google.com', { args: name }, (name) => {
      // THIS WORKS
      // cy.fixture(name).then((x) => cy.log(x));

      // THIS DOES NOT WORK (only inside cy.origin, see above)
      cy.fixture(name, null).then((x) => cy.log(x));

      // THIS DOES NOT WORK (saw it like that in cypress docs, but that would not even fix the API...?!)
      // cy.fixture(name, { encoding: null }).then((x) => cy.log(x));
    });
  });
});
