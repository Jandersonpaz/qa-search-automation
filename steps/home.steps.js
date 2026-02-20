const { I, homePage } = inject();

Given('que esteja na home', () => {
  I.amOnPage('/app/index.html');
});

When('preencho o campo de busca com {string}', (texto) => {
  homePage.preencherBusca(texto);
});

When('clico em pesquisar', () => {
  homePage.clickPesquisar();
});

Then('o campo de busca deve estar vazio', () => {
  homePage.verificarCampoVazio();
});

When('clico em limpar', () => {
  homePage.clickLimpar();
});

Then('verifico o texto {string}', async (mensagem) => {
  const textosArray = mensagem.split(',').map(texto => texto.trim());
  await Promise.all(textosArray.map(texto => I.see(texto)));
});

Then('nao verifico o texto {string}', (mensagem) => {
  I.dontSee(mensagem);
});

