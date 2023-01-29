/* 
OBJETIVO 1 - quando o usuario clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer

OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal

OBJETIVO 1 - quando o usuario clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer
    - passo 1 - dar um jeito de pegar o elemento que represente o botão na tela usando o js
    - passo 2 - dar um jeito de identificar quando o usuário clicar no botão
    - passo 3 - dar um jeito de pegar o elemento da modal no js
    - passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal
    - passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
    - passo 2 - dar um jeito de identificar quando o usuário clicar no X
    - passo 3 - fechar a modal
*/

console.log('mostrar o document', document);

// passo 1 - dar um jeito de pegar o elemento que represente o botão na tela usando o js

console.log(document.querySelector('.botao-trailer'));

const botaoTrailer = document.querySelector('.botao-trailer');

// passo - 3 dar um jeito de pegar o elemento da modal no js
const modal = document.querySelector(".modal");

// passo 2 - dar um jeito de identificar quando o usuário clicar no botão

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    // passo 4 - abrir a modal na tela
    alternarModal()
    video.setAttribute("src", linkDoVideo);

});

// OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal
//    passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
const botaoFecharModal = document.querySelector(".fechar-modal");

//passo 2 - dar um jeito de identificar quando o usuário clicar no X
botaoFecharModal.addEventListener("click", () => {
   // passo 3 - fechar a modal
   alternarModal();
video.setAttribute("src", "")
})

const video = document.getElementById("video");
const linkDoVideo = video.src;