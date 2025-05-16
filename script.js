document.getElementById("mostrarMensagem").onclick = function () {
  const container = document.getElementById("mensagemContainer");

  if (container.classList.contains("show")) {
    container.classList.remove("show");
  } else {
    if (container.innerHTML.trim() === "") {
      container.innerHTML = `<p>Seja muito bem-vindo! 🐱✨</p>`;
    }
    container.classList.add("show");
  }
};
