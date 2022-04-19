const conversar = document.getElementById('conversar')
console.log(conversar.innerHTML)

let nombre = prompt('¿Como es tu nombre?')

conversar.innerHTML = 'Hola ' + nombre
console.log(conversar.innerHTML)