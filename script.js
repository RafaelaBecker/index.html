var botao = document.getElementById("myButton");
var areaMensagem = document.getElementById("areaMensagem");
var mensagemCriada = false;

botao.onclick = function () {
    if (mensagemCriada === false) {
        var novaMensagem = document.createElement("p");
        novaMensagem.textContent = "Seja muito bem-vindo!";
        areaMensagem.appendClhid(novaMensagem);
        mensagemCriada = true;
    }
};
