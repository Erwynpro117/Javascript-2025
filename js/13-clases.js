/* 

Las clases js son una forma de definir objetos, sus propiedades y metodos, creando un prototipo del cual se generaron varios objetos , heredeando su comportamiento

Sintaxis

class nombreObjeto {
   //Utilizamos el metodo constrcutor especial para generar objetos.

   constructor(props) {
   this.prop1 = valor;
   this.prop2 = valor;
   }
}

*/

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        alert("Hola soy ${this.nombre} y tengo ${this.edad} años!")
    }
}


const personal = new Persona("Juanito", 24);
const personal = new Persona("maria", 24);
const personal = new Persona("Pedro", 24);

console.log(persona1);
console.log(persona2);
console.log(persona3);

