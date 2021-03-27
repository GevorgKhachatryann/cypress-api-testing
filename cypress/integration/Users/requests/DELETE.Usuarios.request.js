/// <reference types="cypress" />

function deleteUser(id) {
  // cy.request - client http
  return cy.request({
    method: 'DELETE',
    url: `/usuarios/${id}`,
    failOnStatusCode: false
  });
};

export { deleteUser };