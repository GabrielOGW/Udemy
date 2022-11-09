const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
  modelo: 'A4',
  valor: 89000,
  propietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua Bolinha',
      numero: '123'
    }
  },
  condutores: [{
    nome: 'jose',
    idade: 30
  }, {
    nome: 'Maria',
    idade: 34
  }],
  calculaValorSeguro: function() {
    // ...
  }
}

console.log(carro)
carro.propietario.endereco.numero = 312
console.log(carro)

carro['propietario']['endereco']['logradouro'] = 'Avenida Triangulo'
console.log(carro)