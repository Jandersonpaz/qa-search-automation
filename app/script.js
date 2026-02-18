document.addEventListener("DOMContentLoaded", function () {

  const campo = document.getElementById("campoBusca");
  const botaoBuscar = document.getElementById("buscar");
  const botaoLimpar = document.getElementById("limpar");
  const mensagem = document.getElementById("mensagem");

  botaoBuscar.addEventListener("click", function () {
    const valor = campo.value;

    if (valor.trim() === "") {
      mensagem.innerText = "Digite algo para pesquisar";
    } else {
      mensagem.innerText = `Você pesquisou por: ${valor}`;
    }
  });

  botaoLimpar.addEventListener("click", function () {
    campo.value = "";
    mensagem.innerText = "";
    campo.focus();
  });

});
