/* 

    Arrelgos

    Un arreglo es una colección de datos, una lista de elementos.

    En JS los arreglos se definen utilizando los corchetes [] y los elementos internos se separan por comas ,

    Pueden conener el mismo tipo de dato o de diferentes tipos, incluso pueden contener arreglos anidados.

*/


let frutas = ["Manzana", "Sandia", "Piña", "Pera"];
let calificaciones = [10, 8, 4, 8];
let misDatos = ["Steb", "24", true];
let coordenadas = [ [1, 2, 3] , [4, 5, 6] , [7, 8, 9] ];

console.log(frutas);

/* 

Lenght -> Nos indica la cantidad de elementos que tenemos dentro del arreglo
indice -> Nos indica la "posicion" del elemento dentro del arreglo

Para acceder a los elementos de un arreglo 

*/

console.log(frutas.length);
console.log(calificaciones.length);
console.log(misDatos.length);
console.log(coordenadas.length);

/* 

indice 

*/

console.log("Fruta favorita es: " + frutas[20]);
console.log("Limon dice" + calificaciones[2] + "Oaxaca");
console.log("Me llamo" + misDatos[0] + "y tengo" + misDatos[1] + "años")
console.log("Este dato esta en un arreglo anidado:" + coordenadas[0] [0] )

/* 

Metodos de los arreglos:

push() -> Agrega uno o mas elementos al final de arreglo
pop() -> Elimina el ultimo elemento del arreglo y lo devuelve.
Shift() -> Elimina el primer elememto del arreglo y lo devuelve
indexof() -> Devuelve el indice del primer elemento que coincida con el valor

*/

console.log(frutas.length);

console.log("uvas");

onsole.log(frutas.length);

frutas.pop();

console.log(frutas.length);

let ultimaFruta = frutas.pop();

console.log(frutas.length);
console.log(ultimaFruta);

let primeraFruta = frutas.shift();

console.log(frutas.length);
console.log(primeraFruta);

frutas.unshift("maracuya", "fresa", "mango");

console.log(frutas.length);

let indiceFruta = frutas.indexOf();

console.log(indiceFruta);
