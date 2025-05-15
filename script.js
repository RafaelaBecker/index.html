document.getElementById("mostrarMensagem").onclick = function () {
  const container = document.getElementById("mensagemContainer");

  container.style.display = "block";

  if (container.innerHTML.trim() === "") {
    container.innerHTML = `<p>Seja muito bem-vindo!</p>`;
  }
};
