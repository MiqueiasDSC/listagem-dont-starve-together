// const botaoAlterarTema = document.getElementById("trocar-tema");
// const body = document.querySelector("body");
// const imagemTrocarDeTema = document.querySelector(".imagem-botao")

// botaoAlterarTema.addEventListener("click", () => {
//     const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")


//     body.classList.toggle("modo-escuro");

//     if (modoEscuroEstaAtivo)
//     {imagemTrocarDeTema.setAttribute("src", "./src/imagens/moon.png")}
//     else {imagemTrocarDeTema.setAttribute("src", "./src/imagens/sun.png")}

// });

const botaoAlterarTema = document.getElementById("trocar-tema");
const body = document.querySelector("body");
const imagemTrocarDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    // Alterar a imagem do botão com base no modo de tema
    if (modoEscuroEstaAtivo) {
        imagemTrocarDeTema.setAttribute("src", "./src/imagens/moon.png");
    } else {
        imagemTrocarDeTema.setAttribute("src", "./src/imagens/sun.png");
    }
});