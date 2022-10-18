/*
Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false
*/

function isDivisivel(num) {
  if(num % 3 == 0) {
    return true
  } else {
    return false
  }
}

console.log(isDivisivel(6))
console.log(isDivisivel(9))
console.log(isDivisivel(234))
console.log(isDivisivel(5))
console.log(isDivisivel(8))
console.log(isDivisivel(23))