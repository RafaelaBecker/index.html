// Mensagem de boas-vindas ao carregar a página
window.onload = function () {
    alert("Bem-vindo à minha página!");
};

// Alerta ao clicar no gato preto
document.getElementById("gatoPreto").addEventListener("click", function () {
    alert("Você clicou no gato preto!");
});

// Alerta ao clicar na imagem do videogame
document.getElementById("videogame").addEventListener("click", function () {
    alert("Você clicou na imagem do videogame!");
});
