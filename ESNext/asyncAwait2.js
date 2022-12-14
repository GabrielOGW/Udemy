function gerarNumerosEntre(min, max, numerosDuplicados) {
  if(min > max) [max, min] = [min, max]
  return new Promise((resolve, reject) => {
    const fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator) + min
    if(numerosDuplicados.includes(aleatorio)) {
      reject('Número repetido!')
    } else {
      resolve(aleatorio)
    }
  })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
  try {
    const numeros = []
    for(let _ of Array(qtdNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros))
    }
    return numeros
  } catch(e) {
    if(tentativas > 10) {
      throw 'Erro!'
    } else {
      return gerarMegaSena(qtdNumeros, tentativas + 1)
    }
  }
}

gerarMegaSena(6)
  .then(console.log)
  .catch(console.log)