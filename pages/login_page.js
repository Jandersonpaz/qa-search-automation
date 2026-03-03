const { I } = inject();

module.exports = {

  acessarPagina() {
    I.amOnPage('index.html');
  },

  clicarLogin() {
    I.click('[data-testid="btn-entrar"]');
  },

  preencherEmail(email) {
    I.fillField('#modalEmail', email);
  },

  preencherSenha(senha) {
    I.fillField('#modalSenha', senha);
  },

  clicarEntrar() {
    I.click('button[type="submit"]');
  },

  validarMenuUsuario() {
    I.waitForVisible('[data-testid="user-menu"]', 5);
  },

  validarMensagemErro() {
    I.see('Email ou senha inválidos');
  }

};