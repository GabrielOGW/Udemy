const pessoa = {
  saudacao: 'Bom dia!',
  falar() {
    console.log(this.saudacao)
  }
}

pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre paradigmas

const falarDPessoa =  pessoa.falar.bind(pessoa)

falarDPessoa()