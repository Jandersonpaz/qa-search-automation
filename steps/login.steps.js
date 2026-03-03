const { I } = inject();
const login_page = require('../pages/login_page');

Given('que esteja na home', () => {
  login_page.acessarPagina();
});

When('clico no botao Login', () => {
  login_page.clicarLogin();
});

When(
  'preencher formulario de login {string}, {string}',
  (usuario, senha) => {
    login_page.preencherEmail(usuario);
    login_page.preencherSenha(senha);
  }
);

When('clicar em entrar', () => {
  login_page.clicarEntrar();
});

Then('verifico o texto {string}', (mensagem) => {
  I.see(mensagem);
});

Then('nao verifico o texto {string}', (mensagem) => {
  I.dontSee(mensagem);
});