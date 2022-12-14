function isFuncionando(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if( Math.random() < chanceErro) {
      reject('Ocorreu um erro!')
    } else {
      resolve(valor)
    }
  })
}

isFuncionando('testando..', 0.50)
  .then(v => console.log(`Valor: ${v}`))
  .catch(err => console.log(`Erro: ${err}`))