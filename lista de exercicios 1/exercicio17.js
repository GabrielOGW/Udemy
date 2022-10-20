/**
 * Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano | Aumento
A     | 10%
B     | 15%
C     | 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function calcAumento(plano, salario) {
  let aumento = 0
  switch (plano) {
    case "A":
      aumento = salario * 0.10
      return salario += aumento 
    break;
    case "B":
      aumento = salario * 0.15
      return salario += aumento 
    break;

    case "C":
      aumento = salario * 0.20
      return salario += aumento 
    break;
    default:
      return 'Plano invalido'
      break;
  }
}

console.log(calcAumento('A', 3000))
console.log(calcAumento('B', 3000))
console.log(calcAumento('C', 3000))
console.log(calcAumento('D', 3000))