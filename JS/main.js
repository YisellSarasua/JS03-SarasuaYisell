

var estudiantes = [];

console.log ('Hola');




function guardar(){
    let apellido = document.getElementById ("Apellidos") .value;
    let nombre = document.getElementById ("Nombres") .value;
    let dni = document.getElementById ("dni") .value;
    let nota = document.getElementById ("nota") .value;

    estudiantes.push (new Estudiantes (apellido , nombre,dni,nota));
  
    
}



class Estudiantes {
    constructor (apellido, nombre,dni,nota) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.dni = dni;
        this.nota = nota;

    }
}

console.log (estudiantes);