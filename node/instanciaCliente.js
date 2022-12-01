const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // usando require, é necessário colocar o () para invocar as funções factory
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)
// oque foi realizado no contadorA será guardado no contadorB também, devido ao cache do node

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)