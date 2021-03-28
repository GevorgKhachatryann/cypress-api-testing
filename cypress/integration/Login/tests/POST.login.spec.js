/// <reference types="cypress" />

import * as POSTlogin from '../requests/POST.login.request'

describe('POST /login', () => {
  let token;

  it('Should log in an account', () => {
    POSTlogin.login("fulano@qa.com", "teste").then((response) => {
      token = response.body.authorization
    }).as('response');

    cy.get('@response').then(response => {
      expect(response.status).to.be.equal(200);
      cy.log(token);
    });
  });
});
