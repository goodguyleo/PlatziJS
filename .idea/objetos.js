var miAuto = {
    marca: "Honda",
    modelo: "civic",
    año: "2020",
    placa: "asd123",
    detallesDelAuto: function (){
        console.log("auto "+ this.marca + " "+ this.modelo +" del año " + this.año);
    }
}

console.log(miAuto.detallesDelAuto());

function auto(marca, modelo, año, placa){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.placa = placa;
}

var autoNuevo = new auto("Tesla", "model 3", "2020", "qwe321");
console.log(autoNuevo);

// Reto

//Declaracion de variables

function auto(marca, modelo, año, placa){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.placa =placa;
}

//ciclo

for(var i = 0; i<30; i++){
    var autosNuevos = new auto ("tesla"+i, "model"+i, "2020", "asd0"+i)
    console.log(autosNuevos);
}