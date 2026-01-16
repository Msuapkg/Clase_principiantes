/*
==================================================
 SESIÓN 2 - VARIABLES Y TIPOS DE DATOS
==================================================

Las variables se usan para almacenar información.
En JavaScript existen tres formas de declarar variables:
- var (obsoleta, evitar)
- let (recomendado)
- const (para valores que no cambian)
*/

// Variable que puede cambiar
let edad = 25;

// Variable que NO debería cambiar
const nombre = "Carlos";

// Tipos de datos básicos
let texto = "Hola";        // string
let numero = 10;           // number
let esMayor = true;        // boolean
let sinValor = null;       // null
let indefinido;            // undefined

console.log(edad, nombre, texto, numero, esMayor);

/*
--------------------------------------------------
 BUENAS PRÁCTICAS
--------------------------------------------------
- Usar nombres descriptivos
- camelCase para variables
- No usar var
*/

/*
--------------------------------------------------
 EJERCICIOS
--------------------------------------------------
1. Declara una variable con tu ciudad
2. Declara una constante con tu año de nacimiento
3. Muestra todo en consola
*/
