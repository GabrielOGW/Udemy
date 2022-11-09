const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// Gera erro: 
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua abc'
console.log(pessoa.nome)
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)