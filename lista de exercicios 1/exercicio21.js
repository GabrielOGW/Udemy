/**
Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

function convenio(idade) {
 let valor = 100
 switch (identificaIdade(idade)) {

  case 1:
    valor += 80 
  break;
  case 2:
    valor += 50 
  break;
  case 3:
    valor += 95 
  break;
  case 4:
    valor += 130 
  break;
 
  default:
    "invalido!"
  break;
 }
 return valor
}

function identificaIdade(idade) {
  if (idade < 10) {
    return 1
  } else if(idade >= 10 && idade <= 30) {
    return 2
  } else if(idade > 30 && idade <= 60) {
    return 3
  } else {
    return 4
  }
}

console.log(convenio(5))
console.log(convenio(12))
console.log(convenio(35))
console.log(convenio(75))