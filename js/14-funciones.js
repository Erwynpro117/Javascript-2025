/* 

Funciones

Las funciones son bloques de codigo reutilizables que realizan una tarea especifica.

1.- Funcion declarada 

Es la forma mas comun de definir funciones. Se puede llamar a la funcion antes de su definicion antes de su definicio debido al hoisting, es decri que se "elevan" en el contexto de ejecucion.

Sintaxis 

funcion nombreFuncion() {
// Cuerpo de la funcion
}

Llamada:

nombreFuncion();
*/

Function saludar() {
    console.log("Hola my nigga!");
}

saludar();

/* 

2. Funcion expresada (Anonimas)

Este tipo de funciones se asignan a una varible.
No puede ser llamada antes de su definicion.

Sintaxis:

const nombreConstnte - 

*/


function sumar(num1, num2) {
    console.log("El resultado de esta suma es: ${num1 + num2}")
}

sumar(2,3);
sumar();

function saludo(nombre) {
    console.log(T`Hola ${nombre}`)
}

saludo(`Esteban`)
saludo(`Esteban`)
saludo(`Esteban`)
saludo(`Esteban`)

/* 

Parametros por defecto

En las funciones podemos tener valores por defecto si no se proporcionan argumentos al llamar a la funcion.

Sintaxis:

Funcion nombreFuncion(parametros = valorDefault , ) {
// Cuerpo de la funcion 
...
}

Llamada:

nombreFuncion(); // usa los valores por defecto 
nombreFuncion(argumento1) // Usa el valor del argumento

*/

const multiplicar = function(num1, num2 = 2) {
    console.log(`El resultado de multiplicar ${num1} por ${num2} es: ${num1*num2}`)
}

multiplicar();
multiplicar(8,5);
multiplicar(10,46);
multiplicar();

const bienvenida = (usuario = `invitado`) => {
    if(usuario == `invitado`) {
        console.log(`Registrate o continua como invitado`)
    } else {
        console.log(`Bienvenido ${usuario}`)
    }
}

bienvenida();
bienvenida(`Julio`);

function despedida() {
    return `Adios ilson!`
}

const resultado = despedida();

console.log(resultado)


const restar = (num1, num2) => num1 - num2;

console.log (restar(10,5));