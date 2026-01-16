/*
==================================================
 SESIÓN 10 - SCOPE (ALCANCE)
==================================================

El scope determina dónde una variable es accesible.
*/

let global = "Soy global";

function ejemplo() {
  let local = "Soy local";
  console.log(global);
  console.log(local);
}

ejemplo();

/*
--------------------------------------------------
 IMPORTANTE
--------------------------------------------------
Las variables declaradas con let/const
solo existen dentro de su bloque.
*/

/*
--------------------------------------------------
 EJERCICIOS
--------------------------------------------------
1. Identifica variables globales y locales
2. Corrige un error de scope
*/
