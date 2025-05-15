var botao = document.getElementById("myButton");
var areaMensagem = document.getElementById("areaMensagem");
var mensagemCriada = false;

botao.onclick = function () {
    if (!mensagemCriada) {
        var novaMensagem = document.createElement("p");
        novaMensagem.textContent = "Seja muito bem-vindo!";

        var novaImagem = document.createElement("img");
        novaImagem.src = "https://www.w3schools.com/w3images/cat.jpg";
        novaImagem.alt = "Gato da Galeria";
        novaImagem.style.width = "300px";
        novaImagem.style.cursor = "pointer";

        novaImagem.addEventListener("click", function () {
            alert("Miau!");
        });

        areaMensagem.appendChild(novaMensagem);
        areaMensagem.appendChild(novaImagem);

        mensagemCriada = true;
    }
};
