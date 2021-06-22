var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);
console.log(frutas.length);
console.log(frutas[2]);

var masFrutas = frutas.push("uvas");

console.log(frutas);
console.log(frutas.length);
console.log(frutas[4]);

var ultimo = frutas.pop();

console.log(frutas);
console.log(frutas.length);
console.log(frutas[1]);

var primero = frutas.unshift("U V A S")

console.log(frutas);
console.log(frutas.length);
console.log(frutas[4]);

var borrarFruta = frutas.shift([0]);

console.log(frutas);
console.log(frutas.length)
console.log(frutas[1]);