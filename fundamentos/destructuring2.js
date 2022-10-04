function rand({ min = 0, max = 1000}) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const obj = { max: 100, min: 1 }
console.log(rand(obj))
console.log(rand({max: 30, min: 20}))
console.log(rand({ min: 100}))
console.log(rand({}))