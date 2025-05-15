document.getElementById("mostrarMensagem").onclick = function () {
  let container = document.getElementById("mensagemContainer");

  // Se o container ainda não existe, cria ele
  if (!container) {
    container = document.createElement("div");
    container.id = "mensagemContainer";
    container.innerHTML = `
      <p>Seja muito bem-vindo!</p>
    ;
    document.body.appendChild(container);

    // Quando clicar na imagem, aparece "Miau"
    const imagem = container.querySelector("img");
    imagem.addEventListener("click", () => {
      alert("Miau");
    });
  }
};
