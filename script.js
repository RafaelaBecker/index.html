document.getElementById("mostrarMensagem").onclick = function () {
  const container = document.getElementById("mensagemContainer");

  container.style.display = "block";

  if (container.innerHTML.trim() === "") {
    container.innerHTML = `<p>Seja muito bem-vindo!</p>`;
  }
};

    document.body.appendChild(container);

    // Quando clicar na imagem, aparece "Miau"
    const imagem = container.querySelector("img");
    imagem.addEventListener("click", () => {
      alert("Miau");
    });
  }
};
