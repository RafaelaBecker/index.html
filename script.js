document.getElementById("mostrarMensagem").onclick = function () {
  const container = document.getElementById("mensagemContainer");

  container.style.display = "block";

  if (container.innerHTML.trim() === "") {
    container.innerHTML = `
      <p>Seja muito bem-vindo!</p>
      <img src="https://www.w3schools.com/w3images/fjords.jpg" alt="Imagem" style="width: 300px; border-radius: 10px;">
    `;
  }
};
