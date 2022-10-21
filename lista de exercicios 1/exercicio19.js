/**
 * O cardápio de uma lanchonete é o seguinte:
Código | Descrição do Produto | Preço
100    | Cachorro Quente      |  R$ 3,00
200    | Hambúrguer Simples   |  R$ 4,00
300    | Cheeseburguer        |  R$ 5,50
400    | Bauru                |  R$ 7,50
500    | Refrigerante         |  R$ 3,50
600    | Suco                 |  R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.

*/

function pedido(codigo, quantidade) {
  let i = 0, valor = 0
  switch (codigo) {
    case 100:
      for(i = 0; i < quantidade ;i++) {
        valor += 3.00
      }
      return valor
    break
    case 200:
      for(i = 0; i < quantidade ;i++) {
        valor += 4.00
      }
      return valor
    break
    case 300:
      for(i = 0; i < quantidade ;i++) {
        valor += 5.50
      }
      return valor
    break
    case 400:
      for(i = 0; i < quantidade ;i++) {
        valor += 7.50
      }
      return valor
    break
    case 500:
      for(i = 0; i < quantidade ;i++) {
        valor += 3.50
      }
      return valor
    break
    case 600:
      for(i = 0; i < quantidade ;i++) {
        valor += 2.80
      }
      return valor
    break
  
    default:
      return 'Produto não existente!'
    break;
  }
}

console.log(pedido(100, 4))
console.log(pedido(200, 5))
console.log(pedido(300, 4))
console.log(pedido(400, 3))
console.log(pedido(500, 2))
console.log(pedido(600, 3))
console.log(pedido(700, 6))
