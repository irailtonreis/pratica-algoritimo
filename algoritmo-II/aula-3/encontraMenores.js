const listaLivros = require("./array");

function encontraMenores(pivo, array) {
  let menores = 0;

  for (let atual = 0; atual < array.length; atual++) {
    const produtoAtual = array[atual];

    if(produtoAtual.preco < pivo.preco){
      menores++
    }
    
  }

  trocaLugar(array, array.indexOf(pivo), menores)

  return array

}

function trocaLugar(array, de, para) {
  const elemt1 = array[de]
  const elemt2 = array[para]

  
  array[para] = elemt1
  array[de] = elemt2
}

function divideNoPivo(array){
  let pivo = array[Math.floor(array.length / 2)]
  encontraMenores(pivo, array)

  let valoresMenores = 0; 

  for (let analisando = 0; analisando < array.length; analisando++) {
    const atual = array[analisando];
    if(atual.preco <= pivo.preco && atual !== pivo){
      trocaLugar(array, analisando, valoresMenores)
      valoresMenores++
    }
    
  }

  return array
}

console.log(divideNoPivo(listaLivros));

module.exports = trocaLugar
