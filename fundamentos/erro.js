function tratarErro(e) {
  throw new Error('...')
}

function imprimeNome(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!")
  } catch (e) {
    tratarErro(e)
  } finally {
    console.log('final')
  }
}

const obj = { nome: 'Gabriel'}
imprimeNome(obj)