/*
Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/
function restoDaDivisao(dividendo, divisor) {
  const resto = dividendo % divisor
  return resto
}

console.log(restoDaDivisao(17, 2))
console.log(restoDaDivisao(384, 50))