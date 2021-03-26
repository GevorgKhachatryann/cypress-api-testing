function createProduct(body, token) {
  return cy.request({
    url: '/produtos',
    method: 'POST',
    headers: { Authorization: `${token}` },
    body: body
  })
}

export { createProduct }