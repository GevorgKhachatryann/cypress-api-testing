/// <reference types="cypress" />

import * as POSTlogin from '../../Login/requests/POST.login.request'
import * as POSTprodutos from '../requests/POST.produtos.request'

describe('POST /produtos', () => {
  let token;
  let body;

  before(() => {
    POSTlogin.login("fulano@qa.com", "teste").then((response) => {
      token = response.body.authorization
    })
  })

  beforeEach(() => {
    cy.task("newProduct").then((product) => {
      body = product
    })
  })

  it('Should insert a product', () => {
    POSTprodutos.createProduct(body, token).as('response')

    cy.get('@response').then(response => {
      expect(response.status).to.be.equal(201)
    })
  })
})
