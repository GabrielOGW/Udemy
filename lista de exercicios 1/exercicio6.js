/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.  
A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function calcJurosSimples(capIni, juros, tempo) {
  return montante = capIni + (capIni * juros * tempo)
  
}

function calcJurosCompostos(capIni, juros, tempo) {
  return montante = capIni * (1 + juros) ** tempo
}

console.log(calcJurosSimples(2000, 10/100, 3))
console.log(calcJurosCompostos(2000, 10/100, 3))