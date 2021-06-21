if (false) {
    console.log("hola puta")
} else {
    console.log("puta")
}

var edad = 1;

if (edad === 18){
    console.log("puedes votar, es tu primera vez")
} else if (edad < 18){
    console.log("no puedes votar, eres menor de edad")
} else {
    console.log("puedes votar")
}

var numero = 2;
var resultado = numero === 1 ? " si soy un 1" : "no, no soy 1";
console.log(resultado)

// ejercicio propuesto

//Variables a utilizar

var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";
var min = 0;
var max = 2;

//funcion para encoger un numero del 0 al 2
//siendo 0 pidra, 1 papel y 2 tijeras
function jugadorMaquina(min,max){
    var resul = Math.round(Math.random()*(max-min)+min);
    return resul;
}


//funcion que compara la eleccion del jugador con la eleccion de la maquina
function jugar(jugador){
    //vamos a meter lo que retorna el metodo de la maquina en una variable
    //para ser usada en el scope local.

    //tambien imprimimos el resultado de la maquina para comprobar
    var maquina = jugadorMaquina(min,max);
    console.log(maquina);
    if (maquina===0){
        if(jugador==="piedra"){
            console.log("Has empatado!!!")
        }else if (jugador==="papel"){
            console.log("Has ganado, !!! F E L I C I T A C I O N E S !!!!")
        }else if (jugador==="tijera"){
            console.log("Has perdido, Intenta de nuevo :(")
        }
    } else if (maquina===1){
        if(jugador==="piedra"){
            console.log("Has perdido, Intenta de nuevo :(")
        }else if (jugador==="papel"){
            console.log("Has empatado!!!")
        }else if (jugador==="tijera"){
            console.log("Has ganado, !!! F E L I C I T A C I O N E S !!!!")
        }
    } else {
        if(jugador==="piedra"){
            console.log("Has ganado, !!! F E L I C I T A C I O N E S !!!!")
        }else if (jugador==="papel"){
            console.log("Has perdido, Intenta de nuevo :(")
        }else if (jugador==="tijera"){
            console.log("Has empatado!!!")
        }
    }
}

// Ejecutamos la funcion

jugar("papel")