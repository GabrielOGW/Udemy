function falarApos(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase)
    }, segundos * 1000)
  })
}

falarApos(3, 'Legal!')
  .then(frase => frase.concat('!?!?!'))
  .then(outrafrase => console.log(outrafrase))
  .catch(e => console.log(e))