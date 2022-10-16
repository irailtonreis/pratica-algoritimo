function menorValor(arrProdutos, posicaoInial) {
  let maisBarato = posicaoInial;

  for (let atual = posicaoInial; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
      maisBarato = atual
    }
  }
  return maisBarato
}

module.exports = menorValor