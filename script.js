document.getElementById("mostrarMensagem").onclick = function () {
  const container = document.getElementById("mensagemContainer");

  if (container.classList.contains("show")) {
    // Se já está mostrando, esconde a mensagem
    container.classList.remove("show");
  } else {
    // Se não está mostrando, mostra a mensagem e adiciona o texto se estiver vazio
    if (container.innerHTML.trim() === "") {
      container.innerHTML = `<p>Seja muito bem-vindo! 🐱✨</p>`;
    }
    container.classList.add("show");
  }
};
