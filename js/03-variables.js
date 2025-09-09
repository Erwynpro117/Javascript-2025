/* 

Variables 

Las variables son contenedores que almacenan datos. Es js se pueden declarar variables utilizando las palabras clave "var", "let, "const"

1. Declarcion de varibles 

var: Es la forma mas antigua de declarar variables. Tiene un alcance global o de funcion y puede ser redeclarada y actualizada.

let: Fue introducida en  ES6, tiene un alcanse de bloque y puede ser actualizada pero no redeclararse dentro del msimo alcance.

const: Tambien se intrdujeron en ES6 tiene un alcanse de bloque y no puede ser declarada ni redeclarada mi actualizda. Se utiliza para valores que no deben de cambiar nunca.

*/

/* Declaracion con var */

var nombre = "Erwyn"; 
console.log(nombre) // Erwyn

nombre = "Oaxaca"; 

/* Declaracion con let */

let edad = "23"; 
console.log(edad);

edad = 20;// Actualizacion
console.log(edad);

/* Declaracion con const */

const PI = 3.1416;
console.log(PI);

PI = 4.6401;//ERROR no se puede actualizar una constante

