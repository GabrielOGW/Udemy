 const carrinho = [
  '{"nome": "borracha", "preco": 3.45}',
  '{"nome": "caderno", "preco": 13.99}',
  '{"nome": "kit de lapis", "preco": 41.50}',
  '{"nome": "caneta", "preco": 7.50}'
 ]

//  retornar array apenas com os preços
const paraObj = json => JSON.parse(json)
const paraPrc = produto => produto.preco

const resultado = carrinho.map(paraObj).map(paraPrc)

console.log(resultado)