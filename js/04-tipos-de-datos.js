/* 

Tipos de datos 

Los tipos de datos son uns calsficacion de los diferentes valores que podemos manejar en un lenguaje de programacion.

En JS, existen varios tipod que se pueden agrupar en dos categorias principales: primitivos y complejos u objetivos.

Cada tipo de dato tiene sus propias caracteristicas y usos especificos en la programacion.

1.Primitivos 

Datos basicos que no se consideran "objetos" y no tienen "metodos".

Number o numero 

Representan valores numericos ya se enteros o decimales.

Strings o Cadenas de caracteres 

Representan texto. El texto se coloca entre conmillas dobles o simples: "texto" ´texto`. Se vaken las dos pero hay que ser consistentes.

Boolean o Booleanos

Representan un vlor logico que puede ser true o false.

Undefined o indefinido

Es el valor que se asigna a una vriable que ha sido declarada pero no inicilizada.

Null o nulo

Representa la ausencia intencional de cualquier valor u objeto. Es un tipo de dato que indica que una variable no tiene ningun valor asignado.

*/

let miNumero = 5;
let miNumeroDecimal = 8.8;

console.log(miNumero);
console.log(miNumeroDecimal);

/* Strings */

let miNombre = "Ewryn";
let miApellido = "Cervantes";

console.log(miNombre);
console.log(miApellido);

/* Boolean */

let esEstudiante = true;
let tieneTrabajo = false;

console.log(esEstudiante);
console.log(tieneTrabajo);

/* Undifined */

let aprobareDearrolloApps; // Inicializa una variable
console.log(aprobareDearrolloApps);

/* Null */

let meQuiere = null;
console.log(meQuiere);

/* 

2. Complejos de objetos

Array o arreglos 

Es un conjunto de datos que se almacenan en una lista ordenada de objetos. Los datos dentro de los arreglos se escriben entre [] y separados por comas ,

Object u objeto 

Es un conjunto de multiples datos en pares "clave" - "valor".
Se escriben entre {} y separadas por comas , 

Functions o funciones

Es un tipo de dato que puede ser "invocado". Se declaran con la palabra reservada "function" y el codigo que se ejecuta va entre llaves {}.


*/

/* Array */

let misSeries = ["The Office" , "Arcane" , "Ben 10"];
let misNumeros = [ 5 ,10, 100, 20 ];
let tutifruti = ["Agua" , 555 , true];

console.log( misSeries[2] );
console.log(misNumeros[4]);
console.log(tutifruti[1]);

/* Object */

let perro = {
    nombre: "Sukai",
    edad: 5,
    color: "negro",
    ladra: true,
    muerde: false,
}

console.log(perro.nombre );
console.log(perro.edad);
console.log(perro.ladra);

/* functions */

function saludar() {
    //Codigo a ejecutar 
    console.log("Hola jefa, ya me quiero ir")
}

// Llammamos a una funcion
saludar();

