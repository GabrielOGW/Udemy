// ES8: object.values/Object.entries
const obj = {a: 1, b: 2, c: 3} 
console.log(Object.values(obj))
console.log(Object.entries(obj))

// melhorias na notação literal
const nome = 'Gabriel'
const pessoa = {
  nome, // anteriormente era nome: nome
  ola() {
    return 'olá pessoal!'
  }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
  falar() {
    return 'AU au!'
  }
}

console.log(new Cachorro().falar())