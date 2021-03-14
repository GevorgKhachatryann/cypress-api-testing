import * as POSTUsuarios from '../requests/POST.Usuarios.request';
import * as DELETEusuarios from '../requests/DELETE.Usuarios.request'

let user;

describe('POST Usuarios', () => {
  beforeEach(() => {
    cy.task("freshUser").then((object) => {
        user = object;
    });
  });

  it('Remover um usuário', () => {
    POSTUsuarios.createUser(user).then(responseUser => {
      DELETEusuarios.deleteUser(responseUser.body._id).should(responseDeleteUser => {
        expect(responseDeleteUser.status).to.eq(200);
        expect(responseDeleteUser.body.message).to.eq("Registro excluído com sucesso");
      });
    });
  });
});