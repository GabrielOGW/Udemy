function esperarPor(tempo = 2000) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("Executando Promise..")
      resolve()
    }, tempo)
  })
}

esperarPor(3000)
  .then(texto => console.log(texto))
  .then(esperarPor)