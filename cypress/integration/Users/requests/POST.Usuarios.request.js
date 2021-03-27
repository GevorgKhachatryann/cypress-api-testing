/// <reference types="cypress" />

// const payloadAddUser = require('../payloads/add-user.json');

function createUser(obj) {
  // cy.request - client http
  return cy.request({
    method: 'POST',
    url: '/usuarios',
    failOnStatusCode: false,
    body: obj
  });
};

export { createUser };