/*
As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto,
imprimindo no console a mensagem e retornando true ou false.
*/

function isBisexto(ano) {
  if(ano % 4 == 0 && ano % 400 == 0) {
    return true
  } else if(ano % 100 == 0) {
    return false
  }
}

// console.log(isBisexto(2001))
// console.log(isBisexto(1988))
// console.log(isBisexto(2100))

console.log(isBisexto(400))
console.log(isBisexto(500))
console.log(isBisexto(600))
console.log(isBisexto(800))
console.log(isBisexto(1200))
console.log(isBisexto(1600))
console.log(isBisexto(1700))
console.log(isBisexto(1800))
console.log(isBisexto(1900))
console.log(isBisexto(2000))
console.log(isBisexto(2100))
console.log(isBisexto(2200))
console.log(isBisexto(2300))
console.log(isBisexto(2400))
