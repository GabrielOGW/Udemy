// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variaveis externas à função

const x = 'Externo'

function fora() {
  const x = 'Interno'
  function dentro() {
    return x
  }
  return dentro
}

const funcao = fora()
console.log(funcao())