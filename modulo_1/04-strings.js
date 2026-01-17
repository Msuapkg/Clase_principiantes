/*
==================================================
 SESIÓN 4 - STRINGS Y TEMPLATE LITERALS
==================================================

Los strings representan texto.
*/

let nombre = "Manuel";
let edad = 30;

// Concatenación clásica
console.log("Hola, mi nombre es " + nombre);

// Template literals (recomendado)
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`);
// ALT + 96 ``

// Métodos útiles
let frase = "JavaScript es genial";

console.log(frase.length);
console.log(frase.toUpperCase());
console.log(frase.includes("es"));

/*
--------------------------------------------------
 EJERCICIOS
--------------------------------------------------
1. Crea una frase usando template literals
2. Convierte un texto a mayúsculas
3. Comprueba si un texto contiene una palabra
*/
