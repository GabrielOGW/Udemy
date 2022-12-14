const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem callback
let notasBaixas = []
for(let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i])
  }
}

console.log(notasBaixas)

// com Callback
const notasAltas = notas.filter(function (nota) {
  return nota > 7
})

console.log(notasAltas)

const notasMenorQue7 = nota => nota < 7
const notasBaixas2 =  notas.filter(notasMenorQue7)
console.log(notasBaixas2)