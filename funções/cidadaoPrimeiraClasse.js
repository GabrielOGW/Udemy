// função de forma literal
function fun1() { }

// armazenando a uma variavel
const fun2 = function() { }

// armazenando em um array
const array = [function(a, b) { return a + b }, fun1, fun2]

// armazebar en yn atributo de objeto
const obj = {}
obj.falar = function() { return 'Opa' }
console.log(obj.falar())

// Passar função como parametro
function run(fun) {
  fun()
}

run(function () { console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a, b) {
  return function(c) {
    console.log(a + b + c)
  }
}

soma(2, 3)(4)