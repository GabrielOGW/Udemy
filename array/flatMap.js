const escola = [{
  nome: "Turma M1",
    alunos: [{
        nome: "Gustavo",
        nota: 8.1,
      }, {
        nome: "Ana",
        nota: 9.3,
      },
    ],
  }, {
    nome: "Turma M2",
    alunos: [{
        nome: "Rebeca",
        nota: 7.9,
      }, {
        nome: "Roberto",
        nota: 9.2,
      },
    ],
  },
];

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)


console.log([].concat([ 8.1, 9.3 ], [ 7.9, 9.2 ]))


Array.prototype.flatMap = function(callback) {
  return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)

console.log(notas2)