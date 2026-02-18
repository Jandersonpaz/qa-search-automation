const { I } = inject();

module.exports = {

  fields: {
    campoBusca: '#campoBusca',
  },

  button: {
    pesquisar: '#buscar',
    limpar: '#limpar',
  },

  preencherBusca(texto) {
    I.fillField(this.fields.campoBusca, texto);
  },

  clickPesquisar() {
    I.click(this.button.pesquisar);
  },

  verificarCampoVazio() {
  I.seeInField(this.fields.campoBusca, '');
},

  clickLimpar() {
    I.click(this.button.limpar);
    I.wait(2);
  },

};
