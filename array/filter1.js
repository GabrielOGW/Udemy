const produtos = [
  {nome: 'Notebook', preco: 4499, fragil: true},
  {nome: 'tablet', preco: 1899, fragil: true},
  {nome: 'copo de vidro', preco: 5.99, fragil: true},
  {nome: 'Copo de plastico', preco: 3.99, fragil: false}
]

console.log(produtos.filter(function(p){
  return p.preco > 500
},produtos.filter(function(p){
  return p.fragil == true
}))) 

// outra maneira de se fazer:

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))