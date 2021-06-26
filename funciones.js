//Declarativas

function miFuncion(){
    return 3;
}

miFuncion();
console.log(miFuncion());

//Expresion

var miFuncion = function(a, b){
    var a = 1;
    var b = 3;
    return a + b;
}

miFuncion();
console.log(miFuncion());

//ejemplo practica

function saludarPersonas(nombre, apellido){

    console.log("saludo cordial " + nombre + apellido + ` saludo2 ${nombre}`);

}

saludarPersonas("German ","Rodriguez")


function sumar(a,b){
    var resultado = a + b;
    console.log(resultado);
    return resultado;
}

sumar(1,1)