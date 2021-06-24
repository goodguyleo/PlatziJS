var estudiante = ["leo","kevin","luis","sofia"];

function saludarEstudiante(estudiante){
    console.log("hola "+estudiante);
}

for (var i = 0; i < estudiante.length; i++){
    saludarEstudiante(estudiante[i]);
}

for (var estudiantes of estudiante){
    saludarEstudiante(estudiantes);
}