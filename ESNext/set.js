// não aceita repetição e não é indexado
const times = new Set()
times.add('Vasco')
times.add('Santos').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // ignorado por ser repetido

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))
console.log(times)

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomeSet = new Set(nomes)
console.log(nomeSet)