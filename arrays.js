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

//----------------------------------------------------------------------------------------------------------------------

var articulos = [
    { nombre: "bicicleta", costo: 30000},
    { nombre: "Televisor", costo: 10000},
    { nombre: "Libro", costo: 5000},
    { nombre: "Celular", costo: 80000},
    { nombre: "Portatil", costo: 20000},
    { nombre: "Teclado", costo: 1000},
    { nombre: "Audifonos", costo: 1700}
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 20000;
})

for ( var i = 0; i < articulosFiltrados.length; i++){

    console.log(articulosFiltrados[i].nombre);

}
var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre
});

console.log(nombreArticulos)

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Portatil"
});

console.log(encuentraArticulo);