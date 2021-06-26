var estudiante = ["leo","kevin","luis","sofia"];

function saludarEstudiante(estudiante){
    console.log("hola "+estudiante);
}

while (estudiante.length > 0){
    var estudiantes = estudiante.shift();
    saludarEstudiante(estudiantes);
}