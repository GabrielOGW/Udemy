 let aprovados = new Array('Bia', 'Carlos', 'Ana')
//  console.log(aprovados)

 aprovados = ['Bia', 'Carlos', 'Ana']
//  console.log(aprovados[0])
//  console.log(aprovados[1])
//  console.log(aprovados[2])

 aprovados[3] = 'paulo'
 aprovados.push('Alexandre')

//  console.log(aprovados.length)

 aprovados[9] = 'Rafael'
//  console.log(aprovados.length)
//  console.log(aprovados[8] === undefined)
//  console.log(aprovados)
// console.log(aprovados.sort())
delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(0, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)