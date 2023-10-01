const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        const botaoSelecionado = desselecionarBotao();
        botaoSelecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");
        
        const personagemSelecionado = desselecionarPersonagem();
        personagemSelecionado.classList.remove("selecionado");
        personagens[indice].classList.add("selecionado");
    });

});


function desselecionarPersonagem() {
    const personagemSelecionado = desselecionarPersonagem();
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = desselecionarBotao();
    botaoSelecionado.classList.remove("selecionado");
}

function desselecionarPersonagem() {
    return document.querySelector(".personagem.selecionado");
}

function desselecionarBotao() {
    return document.querySelector(".botao.selecionado");
}

