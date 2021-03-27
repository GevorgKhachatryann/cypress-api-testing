function login(email, password) {
  return cy.request({
    method: 'POST',
    url: '/login',
    body: {
      email: email,
      password: password
    }
  })
}

export { login }