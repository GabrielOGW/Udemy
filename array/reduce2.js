const alunos = [
  {nome: 'João', nota:7.3, bolsista: false },
  {nome: 'Maria', nota: 9.2, bolsista: true},
  {nome: 'Pedro', nota: 8.7, bolsista: false},
  {nome: 'Jorge', nota: 9.8, bolsista: true},
]

// desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// desafio 2: Algum aluno é bolsista?
const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))