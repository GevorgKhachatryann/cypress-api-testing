import * as GETUsuarios from '../requests/GET.Usuarios.request';

describe('GET Usuarios', () => {
  it('Listar todos os usuarios', () => {
    GETUsuarios.allUsers().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq('OK');
      expect(response.body).to.be.not.null;
    });
  });
});