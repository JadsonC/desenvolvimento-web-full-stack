// DOM e Eventos com JavaScript

// const titulo = document.getElementById("titulo")
// console.log(titulo)
// console.log(document.querySelector(".card"))

// console.log(document.querySelector("#titulo"))

// const itens = document.querySelectorAll("li")

// itens.forEach(item => {
//     console.log(item)
// })

// const titulo = document.getElementById("titulo")
// titulo.textContent = "Novo titulo" 

// const link = document.querySelector("a")
// console.log(link.getAttribute("href"))

// link.setAttribute("target", "_blank")
// link.removeAttribute("target")

// const element = document.getElementById("card")

// element.classList.add("ativo")
// element.classList.remove("ativo")
// element.classList.toggle("ativo")
// console.log(element.classList.contains("ativo"))
// element.style.color = "red"
// element.style.backgroundColor = "black"

// const novoItem = document.createElement("li")

// novoItem.textContent = "Novo item"

// const lista = document.getElementById("lista")
// lista.append(novoItem)

// const botaoRemover = document.getElementById("remover")
// const item = document.getElementById("item-remover");

// botaoRemover.addEventListener("click", () => {
//     item.remove();
// })

// const containerDom = document.getElementById("container-dom")
// console.log(containerDom.parentElement)
// console.log(containerDom.children)

// const botao = document.querySelector("#botao")

// botao.addEventListener("click", () => {
//     console.log("Clicou")
// })

// function executar() {
//     console.log("Executou")
// }

// botao.addEventListener("click", executar)

// botao.addEventListener("click", (event) => {
//     console.log(event)
// })

// const input = document.getElementById("campo-input")

// input.addEventListener("input", (event) => {
//     console.log(event.target.value)
// })

// document.addEventListener("keydown", (event) => {
//     console.log(event.key)
// })

// const pai = document.getElementById("pai")
// const filho = document.getElementById("filho")

// pai.addEventListener("click", () => {
//     console.log("DIV PAI")
// })

// filho.addEventListener("click", (event) => {
//     event.stopPropagation();
//     console.log("BOTÃO FILHO")
// })

// const botao = document.getElementById("menu-btn")
// const menu = document.getElementById("menu")

// botao.addEventListener("click", () => {
//     menu.classList.toggle("ativo")
// })

const input = document.getElementById("texto-lista")
const botao = document.getElementById("adicionar")
const lista = document.getElementById("lista-dinamica")

botao.addEventListener("click", () => {
    const valor = input.value

    if(valor.trim() === "") return
    
    const item = document.createElement("li")

    item.textContent = valor;
    lista.append(item)
    input.value = ""
})