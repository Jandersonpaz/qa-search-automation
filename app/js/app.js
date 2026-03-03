//  document.addEventListener("DOMContentLoaded", () => {
//  
//    // =========================
//    // ELEMENTOS
//    // =========================
//    const heroSection = document.getElementById("heroSection");
//    const conteudoCategorias = document.getElementById("conteudoCategorias");
//    const logoHome = document.getElementById("logoHome");
//    const inputBusca = document.getElementById("inputBusca");
//    const btnBuscar = document.getElementById("btnBuscar");
//    const heroWelcome = document.getElementById("heroWelcome");
//    // =========================
//    // FUNÇÃO BUSCA
//    // =========================
//    function executarBusca() {
//      if (!inputBusca || !conteudoCategorias) return;
//  
//      const termo = inputBusca.value.trim();
//      if (!termo) return;
//  
//      heroSection?.classList.add("hidden");
//  
//      conteudoCategorias.innerHTML = `
//        <div class="categoria-page">
//          <h2>Resultados para: "${termo}"</h2>
//          <p>Nenhum produto encontrado (simulação).</p>
//        </div>
//      `;
//    }
//  
//    btnBuscar?.addEventListener("click", executarBusca);
//  
//    inputBusca?.addEventListener("keydown", (e) => {
//      if (e.key === "Enter") executarBusca();
//    });
//  
//    // =========================
//    // LOGO VOLTAR HOME
//    // =========================
//    logoHome?.addEventListener("click", () => {
//      heroSection?.classList.remove("hidden");
//      if (conteudoCategorias) conteudoCategorias.innerHTML = "";
//    });
//  
//    // =========================
//    // LOGIN
//    // =========================
//    const btnEntrar = document.getElementById("btnEntrar");
//    const userMenu = document.getElementById("userMenu");
//    const userInfo = document.querySelector(".user-info");
//    const btnSair = document.getElementById("btnSair");
//  
//    const userNome = document.getElementById("userNome");
//    const userEmail = document.getElementById("userEmail");
//    const userAvatar = document.getElementById("userAvatar");
//  
//    const modal = document.getElementById("modalLogin");
//    const btnCloseModal = document.getElementById("btnCloseModal");
//    const email = document.getElementById("modalEmail").value;
//    const senha = document.getElementById("modalSenha").value;
//    const erro = document.getElementById("login-error");
//  
//    if (email === "janderson.teste@email.com" && senha === "1234.teste") {
//      erro.style.display = "none";
//      // lógica de sucesso
//    } else {
//      erro.innerText = "Email ou senha inválidos";
//      erro.style.display = "block";
//    }
//  
//    // =========================
//    // ATUALIZAR UI
//    // =========================
//    function atualizarUI() {
//      const usuario = localStorage.getItem("usuario");
//  
//      if (usuario) {
//        btnEntrar?.classList.add("hidden");
//        userMenu?.classList.remove("hidden");
//  
//        const nomeBase = usuario.split("@")[0];
//        const nomeFormatado =
//          nomeBase.charAt(0).toUpperCase() + nomeBase.slice(1);
//  
//        userNome.textContent = "Olá, " + nomeFormatado + "!";
//        userEmail.textContent = usuario;
//  
//        const iniciais = nomeBase.substring(0, 2).toUpperCase();
//        userAvatar.textContent = iniciais;
//  
//        // 👇 MOSTRA BEM-VINDO NA HOME
//        heroWelcome?.classList.remove("hidden");
//  
//      } else {
//        btnEntrar?.classList.remove("hidden");
//        userMenu?.classList.add("hidden");
//  
//        userNome.textContent = "";
//        userEmail.textContent = "";
//        userAvatar.textContent = "";
//  
//        // 👇 ESCONDE SE DESLOGAR
//        heroWelcome?.classList.add("hidden");
//      }
//    }
//  
//    // =========================
//    // MODAL
//    // =========================
//    btnEntrar?.addEventListener("click", () => {
//      modal?.classList.add("show");
//    });
//  
//    btnCloseModal?.addEventListener("click", () => {
//      modal?.classList.remove("show");
//    });
//  
//    modal?.addEventListener("click", (e) => {
//      if (e.target === modal) {
//        modal.classList.remove("show");
//      }
//    });
//  
//    // =========================
//    // LOGIN SUBMIT
//    // =========================
//    formLogin?.addEventListener("submit", (e) => {
//      e.preventDefault();
//  
//      const email = modalEmail.value.trim();
//      const senha = modalSenha.value.trim();
//  
//      modalError.style.color = "red";
//      modalError.textContent = "";
//  
//      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//  
//      if (!emailValido.test(email) || senha.length < 6) {
//        modalError.textContent = "Email ou senha inválidos";
//        return;
//      }
//  
//      // SUCESSO
//      localStorage.setItem("usuario", email);
//  
//      modalError.style.color = "lightgreen";
//      modalError.textContent = "Bem-vindo";
//  
//      setTimeout(() => {
//        modalEmail.value = "";
//        modalSenha.value = "";
//        modal.classList.remove("show");
//        atualizarUI();
//      }, 800);
//    });
//  
//    // =========================
//    // LOGOUT
//    // =========================
//    btnSair?.addEventListener("click", () => {
//      localStorage.removeItem("usuario");
//      userMenu?.classList.remove("active");
//      atualizarUI();
//    });
//  
//    // =========================
//    // DROPDOWN USUÁRIO
//    // =========================
//    userInfo?.addEventListener("click", (event) => {
//      event.stopPropagation();
//      userMenu?.classList.toggle("active");
//    });
//  
//    document.addEventListener("click", () => {
//      userMenu?.classList.remove("active");
//    });
//  
//    atualizarUI();
//  
//  });

document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // ELEMENTOS
  // =========================
  const heroSection = document.getElementById("heroSection");
  const conteudoCategorias = document.getElementById("conteudoCategorias");
  const logoHome = document.getElementById("logoHome");
  const inputBusca = document.getElementById("inputBusca");
  const btnBuscar = document.getElementById("btnBuscar");
  const heroWelcome = document.getElementById("heroWelcome");

  const btnEntrar = document.getElementById("btnEntrar");
  const userMenu = document.getElementById("userMenu");
  const userInfo = document.querySelector(".user-info");
  const btnSair = document.getElementById("btnSair");

  const userNome = document.getElementById("userNome");
  const userEmail = document.getElementById("userEmail");
  const userAvatar = document.getElementById("userAvatar");

  const modal = document.getElementById("modalLogin");
  const btnCloseModal = document.getElementById("btnCloseModal");
  const formLogin = document.getElementById("formLogin");
  const modalEmail = document.getElementById("modalEmail");
  const modalSenha = document.getElementById("modalSenha");
  const modalError = document.getElementById("modalError");

  // =========================
  // FUNÇÃO BUSCA
  // =========================
  function executarBusca() {
    const termo = inputBusca.value.trim();
    if (!termo) return;

    heroSection?.classList.add("hidden");

    conteudoCategorias.innerHTML = `
      <div class="categoria-page">
        <h2>Resultados para: "${termo}"</h2>
        <p>Nenhum produto encontrado (simulação).</p>
      </div>
    `;
  }

  btnBuscar?.addEventListener("click", executarBusca);

  inputBusca?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") executarBusca();
  });

  // =========================
  // LOGO VOLTAR HOME
  // =========================
  logoHome?.addEventListener("click", () => {
    heroSection?.classList.remove("hidden");
    conteudoCategorias.innerHTML = "";
  });

  // =========================
  // ATUALIZAR UI
  // =========================
  function atualizarUI() {
    const usuario = localStorage.getItem("usuario");

    if (usuario) {
      btnEntrar.classList.add("hidden");
      userMenu.classList.remove("hidden");

      const nomeBase = usuario.split("@")[0];
      const nomeFormatado =
        nomeBase.charAt(0).toUpperCase() + nomeBase.slice(1);

      userNome.textContent = "Olá, " + nomeFormatado + "!";
      userEmail.textContent = usuario;

      const iniciais = nomeBase.substring(0, 2).toUpperCase();
      userAvatar.textContent = iniciais;

      // MOSTRA BEM-VINDO NA HERO
      heroWelcome.classList.remove("hidden");

    } else {
      btnEntrar.classList.remove("hidden");
      userMenu.classList.add("hidden");

      userNome.textContent = "";
      userEmail.textContent = "";
      userAvatar.textContent = "";

      heroWelcome.classList.add("hidden");
    }
  }

  // =========================
  // MODAL
  // =========================
  btnEntrar?.addEventListener("click", () => {
    modal.classList.add("show");
    modalError.textContent = "";
  });

  btnCloseModal?.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });

  // =========================
  // LOGIN SUBMIT
  // =========================
  formLogin?.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = modalEmail.value.trim();
    const senha = modalSenha.value.trim();

    modalError.style.color = "red";
    modalError.textContent = "";

    const emailCorreto = "janderson.teste@email.com";
    const senhaCorreta = "1234.teste";

    // 🔎 1 - Email inválido (formato)
    if (!email.includes("")) {
      modalError.textContent = "E-mail invalido";
      return;
    }

    // 🔎 2 - Senha vazia
    if (!senha) {
      modalError.textContent = "Digite a senha";
      return;
    }

    // 🔐 3 - Credenciais incorretas
    if (email !== emailCorreto || senha !== senhaCorreta) {
      modalError.textContent = "Email ou senha inválidos";
      return;
    }

    // ✅ SUCESSO
    localStorage.setItem("usuario", email);

    modalEmail.value = "";
    modalSenha.value = "";
    modal.classList.remove("show");

    atualizarUI();
  });

  // =========================
  // LOGOUT
  // =========================
  btnSair?.addEventListener("click", () => {
    localStorage.removeItem("usuario");
    userMenu.classList.remove("active");
    atualizarUI();
  });

  // =========================
  // DROPDOWN
  // =========================
  userInfo?.addEventListener("click", (event) => {
    event.stopPropagation();
    userMenu.classList.toggle("active");
  });

  document.addEventListener("click", () => {
    userMenu.classList.remove("active");
  });

  atualizarUI();
});