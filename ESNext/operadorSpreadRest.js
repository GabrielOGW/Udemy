// operador ... rest(juntar)/spread(espalhar)
// usar rest com parametro de funcao

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } 
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Marcos', 'Eduardo']
const grupoFinal = ['Maria', ...grupoA, 'Julia' ]
console.log(grupoFinal)