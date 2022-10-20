/*
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function isDiaUtil(dia) {
  switch (dia) {
    case 1:
      return false  
    break;
    case 2:
      return true  
    break;
    case 3:
      return true  
    break;
    case 4:
      return true  
    break;
    case 5:
      return true  
    break;
    case 6:
      return true  
    break;
    case 7:
      return false 
    break;
  
    default:
      return 'sDia invalido'
    break;
  }
}

console.log(isDiaUtil(1))
console.log(isDiaUtil(2))
console.log(isDiaUtil(3))
console.log(isDiaUtil(4))
console.log(isDiaUtil(5))
console.log(isDiaUtil(6))
console.log(isDiaUtil(7))
console.log(isDiaUtil(8))