Array.prototype.map2 = function(callback) {
  const newArray = []
  for(let i = 0; i < this.length; i++){
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

const carrinho = [
  '{"nome": "borracha", "preco": 3.45}',
  '{"nome": "caderno", "preco": 13.99}',
  '{"nome": "kit de lapis", "preco": 41.50}',
  '{"nome": "caneta", "preco": 7.50}'
 ]

//  retornar array apenas com os preços
const paraObj = json => JSON.parse(json)
const paraPrc = produto => produto.preco

const resultado = carrinho.map2(paraObj).map2(paraPrc)

console.log(resultado)