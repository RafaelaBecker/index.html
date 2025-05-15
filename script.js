var botao = document.getElementById("myButton");
var areaMensagem = document.getElementById("areaMensagem");
var mensagemCriada = false;

botao.onclick = function () {
    if (mensagemCriada === false) {
        var novaMensagem = document.createElement("p");
        novaMensagem.textContent = "Seja muito bem-vindo!";
        areaMensagem.appendChild(novaMensagem);
        mensagemCriada = true;
    }
};

document.getElementById("mostrarMensagem").onclick = function () {
  let container = document.getElementById("mensagemContainer");

  if (!container) {
    container = document.createElement("div");
    container.id = "mensagemContainer";
    container.innerHTML = `
      <p>Seja muito bem-vindo!</p>
      <img src="https://www.w3schools.com/w3images/fjords.jpg" alt="Imagem da galeria">
    `;
    document.body.appendChild(container);

    const imagem = container.querySelector("img");
    imagem.addEventListener("click", () => {
      alert("Miau");
    });
  }
};
