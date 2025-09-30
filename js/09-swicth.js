/* 

Switch

Es una sentencia para realizar diferentes acciones segun distintas condiciones.

Se suele usar como forma alternativa a nultiples sentencias if-else cuando se tiene una sola variable que puede tomar distintos valores.

Sintaxis

switch (expresion) {
// Casos segun se comparan

case valor1;
// el codigo a ejecutar

case valor2;
// El codigo a ejecutar

case valor3;
// El codigo a ejecutar
break;
default:
    // Este ees el codigo que se ejecutara si la expresion no coincide con ningun caso.
    break; // esto es opcional

}

*/

// Variable a evaluar


let licenciatura =("Elije que carrera vas a estudiar")

switch(licenciatura) {
    case "television":
        console.log("Haz la licencitura de television, mal por ti");
    case "diseño":
        console.log("Haz elegido la licenciatura de diseño seras muy fregon");
    case "imagen":
        console.log("Haz elegido la licenciatura de imagen, ora esa  no existe");
        break;
        default:
            console.log("Apurate a elgir hijo")
}



