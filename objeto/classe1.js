class Lancamento {
  constructor(nome = 'Generico', valor = 0) {
    this.nome = nome
    this.valor = valor
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
  }

  addLancamentos(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push(l))
  }

  sumario() {
    let valorConsolidado = 0
    this.lancamentos.forEach(l => {
      valorConsolidado += l.valor
    })
    return valorConsolidado
  }
}

const salario = new Lancamento('salario', 45000)
const constaDeLuz = new Lancamento('Luz', -220)
const constaDeInternet = new Lancamento('internet', -300)

const contas = new CicloFinanceiro(6, 2021)
contas.addLancamentos(salario, constaDeLuz, constaDeInternet)
console.log(contas.sumario())