/*
Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function calculos(x, y) {
  return {
    soma: x + y,
    subtracao: x - y,
    multiplicacao: x * y,
    divisao: x / y
  }
}

console.log(calculos(25, 5))
console.log(calculos(10, 30))
console.log(calculos(3, 6))