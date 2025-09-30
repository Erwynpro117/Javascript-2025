/* 

Juego piedra, papel o tijera 

Crear un juego interactivo donde el usuario puede jugar contra la computadora.

Reglas;

-Piedra vence a tijera 
-Tijera vence a papel 
Papel vende a piedra 
-Si ambos eligen lo mismo empate 

Pasos para implementar:

-Definir las opciones del jugador 
-Generar una opcion aleatoria para la computadora 
-Comparar estas opciones y determinar el ganador

Estructura a utilizar:

-Variables
-Condicionales
-Generacion de un numero aleatorio
-Operadores logicos 
-Concatenacion de cadenas
-Plantillas literales 
-Comentarios

*/

//1. Variables - Opciones del jugador

const opcionJugador = prompt("!Para jugar escribe: piedra, papel o tijera¡"); // piedra, papel o tijera

// 2. Opcion de la computdora 
const numeroAleatorio = Math.random(); //Genera un numero aleatorio entre 0 y 1.

let opcionComputadora; 

// 3. Condicional - Asignamos opcion segun el numero de aleatorio.
if (numeroAleatorio <0.33) {
    opcionComputadora = "piedra ";
} else if (numeroAleatorio < 0.66) {
    opcionComputadora = "papel";
} else {
    opcionComputadora = "tijera";
}

console.log("Piedra, Papel o Tijera");
console.log("Tu eleccion es:" + opcionJugador);
console.log("La computador eligio: " + opcionComputadora)
console.log("-----------------------------------")

// Determinar el ganador con condicionales
let resultado;

if (opcionJugador === opcionComputadora) {
    resultado = `¡EMPATE!` ambos elijieron ${opcionJugador};
} else if (opcionJugador === "piedra" && opcionComputadora === "tijera") {
    resultado = `!GANASTE piedra vence a tijera¡`;
} else if (opcionJugador === "papel" && opcionComputadora === "piedra") {
    resultado = `!GANASTE¡ papel vence a piedra`;
} else if (opcionJugador === "tijera" && opcionComputadora === "papel") {
    resultado = `!GNASATE Tijera vence a papel¡`;
} else {
    resultado = "!PERDISTE¡ La compu te gano";
}

// 6.Muestra el resultado

console.log(resultado)