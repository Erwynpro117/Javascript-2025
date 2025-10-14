/* 

Bucles 

Son estrucutras de control que permiten repetir un bloque de codigo varias veces, hasta que se cumpla la condicion especifica.

Los mas comunes en JS son for, while y do...while.

1. Bucle for 

El bucle se utilizan cuando sabemos cuantas veces queremos repetir un bloque de codigo.

for (inicilizacion ; condicion; incremento; ) {
  // el codigo que se va arepetir su ejecucion 
  ...
}

inicializacion -> variable con un valor inicial 
condicion -> se evalua una expresion si es true se ejecuta el bucle
incremento -> umenta el valor de la variable en cada iteracion


*/

for (let i = 0; i < 5; i++) {
    console.log("Repeticion" + i + "Hola papa!")
}

/* 

2. Bucle while

El bucle while se uiliza cuando no sabemos cuntas veces queremos repetir un bloque de codigo, pero si queremos que se repita mientras una condicion es verdadera. Sintaxis:

inicializacion

while (){
  //codigo que se repite su ejecucion
  incrmento 
  }

*/

let j = 0; 

while (j < 5) {
    console.log("otro bucle");
    j++;
}

/* 

3. Bucle do...while

Este bucle es similar al bucle while, pero garantiza que el bloque de codigo se ejecute al menos una vez.
ya que la condicion se evalua despues de la ejecucion.Sintaxis

do {
  // codigo que se ejecuta al menos una vez
}while(condicion)

*/

let k = 0;

do{
    console.log("Las demon hunters estan chidas")
} while (k < 5);


