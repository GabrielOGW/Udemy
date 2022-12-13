
function primeiroElemento(array) {
  return array[0]
}

function primeiraletra(string) {
  return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function (cumprirPromessa) {
  cumprirPromessa(["Ana", "Carlos", "Bia", "Daniel"])
})
p
  .then(primeiroElemento)
  .then(primeiraletra)
  .then(letraMinuscula)
  .then(console.log)
