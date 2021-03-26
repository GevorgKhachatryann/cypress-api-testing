/// <reference types="cypress" />

import * as POSTlogin from '../../Login/requests/POST.login.request'
import * as POSTprodutos from '../requests/POST.produtos.request'

describe('POST /produtos', () => {
  let token;

  before(() => {
    POSTlogin.login("fulano@qa.com", "teste").then((response) => {
      token = response.body.authorization
    })
  })

  it('Should insert a product', () => {
    const body = {
      nome: "Logitech MX Vertical novo",
      preco: "470",
      descricao: "Mouse bom",
      quantidade: "5"
    }

    POSTprodutos.createProduct(body, token).as('response')

    cy.get('@response').then(response => {
      expect(response.status).to.be.equal(201)
    })
  })
})