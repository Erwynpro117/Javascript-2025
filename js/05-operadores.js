/* 

Operadores

Son simbolos que le indican al interprete que deben realizarse una opercion matematica, logica o relacional y producir un resultado.

1. Operadores aritmeticos

Se utilizan operaciones matematias basicas como la suma, resta, division y multiplicacion.

+ -> Suma
- -> Resta 
* -> Multiplicacion 
/ -> Dividir 
% -> Modulo (residuo de una division)
++ -> Incremento (suma 1 al valor)
-- -> Decremento (resta 1 al valor) 

Expresion: Conjunto de valores, variables y operores

*/

let a = 10;
let b =5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); //2
console.log(a % b); // 0
a++;
console.log(a);
b--;
console.log(b);

/* 

2. Operadores de Asignacion

Estos operadores se utilizan paraasignar a las variables.

- Asignacion
+- suma y asigna
-- Resta y asigna
*- multiplica y asigan
/- divide y asigna

*/

let c = 20;

c += 5;
c -=10;
c *=2;
c /= 3;
c %= 3;

console.log(c)

/* 

3. Operadores de comparacion

Estos operadores se utilizan para comparar dos valores y devolver un valor booleano (true o false)

-- Igualdad (compara solo el valor)
--- Igualdad estricta (compara el valor y el tipo)
!- Desigualdad 


*/

let d = 10;
let e = "10"

console.log(d == e);
console.log(d === e);

/* 

 4. Operadores Lógicos
 
 Se utilizan para combinar expresiones booleanas.

 && AND (y) - Si ambos valores son verdadero el resultado es verdadero, Si al menos un valor es falso el resultado es falso.

 || OR (o) - Si al menos un valor es verdadero el resultado va a ser verdader. Solo si ambos valores son falsos el resultado sera falso

 ! NOT /no - Niega el valor el resultado es el valor contrario al que se esta negando


*/

let f = true;
let g = false;

console.log(f && g);
console.log(f || g);
console.log(!f);
console.log(!g);

