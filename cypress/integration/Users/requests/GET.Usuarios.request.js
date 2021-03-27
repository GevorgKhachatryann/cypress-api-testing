/// <reference types="cypress" />

function allUsers() {
  // cy.request - client http
  return cy.request({
    method: 'GET',
    url: '/usuarios',
    failOnStatusCode: false
  });
};

export { allUsers };