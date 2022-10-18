/*
Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial(num) {
  let fatoracao = 1
  for(let i = 0; i < (num +1); i++) {
    fatoracao *= i
  }
  return fatoracao
}

console.log(fatorial(5))
// console.log(fatorial(12))
// console.log(fatorial(15))