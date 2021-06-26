var numero = 100;

switch (numero){
    case 1:
        console.log("soy uno");
        break;
    case 10:
        console.log("soy un 10");
        break;
    case 100:
        console.log("soy un 100");
        break;
    default:
        console.log("no soy nada");
}

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
    switch (maquina){
        case 0:
            switch ("piedra"){
                case piedra:
                    console.log("Has empatado!!!")
                    break;
                case papel:
                    console.log("Has ganado, !!! F E L I C I T A C I O N E S !!!!")
                    break;
                case tijera:
                    console.log("Has perdido, Intenta de nuevo :(")
                    break;
            }
            break;
        case 1:{
            switch ("piedra"){
                case piedra:
                    console.log("Has perdido, Intenta de nuevo :(")
                    break;
                case papel:
                    console.log("Has empatado!!!")
                    break;
                case tijera:
                    console.log("Has ganado, !!! F E L I C I T A C I O N E S !!!!")
                    break;
            }
            break;
        }
        case 2:{
            switch ("piedra"){
                case piedra:
                    console.log("Has ganado, !!! F E L I C I T A C I O N E S !!!!")
                    break;
                case papel:
                    console.log("Has perdido, Intenta de nuevo :(")
                    break;
                case tijera:
                    console.log("Has empatado!!!")
                    break;
            }
            break;
        }
    }
}

// Ejecutamos la funcion

jugar(tijera)