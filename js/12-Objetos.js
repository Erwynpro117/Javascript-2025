/* 

objetos.

son colecciones de propiedade. Una propiedadesuna asciociacion entre un nombre (claveo key) y un valor (value).

los valores puede ser de distinos tipos, numeros, cadenas de texto, boleanos, arreglos, funciones...

stintasis

nombreObjeto{
//propiedades
 key: value,
 }
*/

const persona = {
    nombre: Erwyn,
    apellido: Cervantes,
    edad: 23,
    esInvitado: true, 
    mounstros: ["Dragon", "Pegaso", "Grifo"],

    saludar: function() {
        console.log("Hola mi nombre es" + this.nombre + "y me gusta" + this.mounstros[0]);
    }


}

console.log(persona)

/* 

Acceder a las propiedades de un objeto utilizamos 

*/

console.log(persona.nombre);
console.log(persona[apellido]);

"Hola mi nombre es" + persona.nombre + " " + persona.apellido + " y tengo" + persona.edad + "años"

console.log(persona.esInvitado);
if(persona.esInvitado == true) {
    console.log("Puede pasar sisi")
} else {
    console.log("Regresate a tu casa")
}

persona.mounstros(persona.mounstros[2]);


persona.log(persona)
