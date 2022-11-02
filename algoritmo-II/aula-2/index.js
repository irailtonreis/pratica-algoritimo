const listaLivros = require("./array");

function mergeSort(array, nivelAninhamento = 0) {
  console.log(`Nivel de aninhamento ${nivelAninhamento}`);
  console.log(array)
  if (array.length > 1) {
    const meio = Math.floor(array.length / 2);
    const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento++);
    const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento++);

    array = ordena(parte1, parte2);
  }

  return array;
}

function ordena(parte1, parte2) {
  let posicaoAtualParte1 = 0;
  let posicaoAtualParte2 = 0;

  const resultado = [];

  // Efetuando a trocas de posição dos pequenos arrays
  while (
    posicaoAtualParte1 < parte1.length &&
    posicaoAtualParte2 < parte2.length
  ) {
    let produtoAtualPart1 = parte1[posicaoAtualParte1];
    let produtoAtualPart2 = parte2[posicaoAtualParte2];

    if (produtoAtualPart1.preco < produtoAtualPart2.preco) {
      resultado.push(produtoAtualPart1);
      posicaoAtualParte1++;
    } else {
      resultado.push(produtoAtualPart2);
      posicaoAtualParte2++;
    }
  }
  // concatenando os elementos que sobraram em alguns dos arrays
  return resultado.concat(
    posicaoAtualParte1 < parte1.length
      ? parte1.slice(posicaoAtualParte1)
      : parte2.slice(posicaoAtualParte2)
  );
}

console.log(mergeSort(listaLivros));
