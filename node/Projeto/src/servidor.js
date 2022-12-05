const bodyParser = require('body-parser')
const express = require('express')
const porta = 3003
const app = express()
const bd = require('./BancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) => {
  res.send(bd.getProdutos())
})

app.get('/produtos:id', (req, res, next) => {
  res.send(bd.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
  const produto =bd.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
  const produto = bd.excluirProduto(req.params.id)
  res.send(produto)
})

app.listen(porta, () => {
  console.log(`servidor executando na porta: ${porta}`)
})