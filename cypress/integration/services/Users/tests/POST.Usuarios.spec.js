import * as POSTUsuarios from '../requests/POST.Usuarios.request';
import * as DELETEusuarios from '../requests/DELETE.Usuarios.request'

let user;

describe('POST Usuarios', () => {
  beforeEach(() => {
    cy.task("freshUser").then((object) => {
        user = object;
    });
  });

  it('Adicionar um novo usuário', () => {
    POSTUsuarios.createUser(user).should((response) => {
      expect(response.status).to.eq(201);
      expect(response.statusText).to.eq('Created');
      expect(response.body.message).to.eq("Cadastro realizado com sucesso");
      DELETEusuarios.deleteUser(response.body._id);
    });
  });

});