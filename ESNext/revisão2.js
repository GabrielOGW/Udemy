// Arrow Function
const soma = (a, b) => a + b
console.log(soma(1, 4))

// arrow function(this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto = 'Node') {
  console.log(texto)
}

log()
log(null)
log('Sobreponho o original')

// Operador rest
function total(... numeros) {
  let total = 0
  numeros.forEach(n => total += n)
  return total
}
console.log(total(2, 3, 4, 5))