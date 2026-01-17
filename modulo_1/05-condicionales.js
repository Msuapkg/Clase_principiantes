/*
==================================================
 SESIÓN 5 - CONDICIONALES
==================================================

Permiten tomar decisiones según una condición.
*/

let edad = 17;

if (edad > 18) {
  console.log("Eres mayor de edad");
} else if (edad === 18) {
  console.log("Acabas de cumplir la mayoría de edad");
} else {
  console.log("No eres mayor de edad");
}

// Switch
let dia = 3;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  default:
    console.log("Día no válido");
}

/*
--------------------------------------------------
 EJERCICIOS
--------------------------------------------------
1. Clasifica una nota
2. Usa operador ternario
3. Crea un menú con switch
*/
