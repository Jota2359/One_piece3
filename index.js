const botoes = document.querySelectorAll('.botao');

const personagem = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
  desSelecionar_personagem();
  desselecionarBotao();

  console.log("clicou no botão", botao)
  botao.classList.add("selecionado");


personagem[indice].classList.add("selecionado")
})
});

function desSelecionar_personagem() {
  
  const botaoselecionado = document.querySelector(".botao.selecionado");
  botaoselecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
  const personagemselecionado = document.querySelector(".personagem.selecionado");
  personagemselecionado.classList.remove("selecionado");
}
// Estês scripts servem para criar um seletor:
//____________________________________________________
//const botoes = document.querySelectorAll('.botao');

//console.log(botoes);

//botoes.forEach(botao => {
//  botao.addEventListener("click", () => {
 // console.log("clicou no botão", botao)
//  })
// });

