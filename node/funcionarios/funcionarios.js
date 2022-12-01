const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const nacionalidade = f => f.pais === 'China'
const genero = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data
  // console.log(funcionarios)
  
  // desafio, obter mulher chinesa com o menor salário:

  const func = (funcionarios).filter(nacionalidade).filter(genero).reduce(menorSalario)
  console.log(func)
})
