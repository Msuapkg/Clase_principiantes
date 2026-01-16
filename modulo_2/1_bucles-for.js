// Estructura de for
/* for (let i = 0; i < 10; i++) {
    
    console.log('Iteración número ' + i)

} */

// Estructura de control, que repite un bloque de código un número determinado de veces.

// let i = 0: inicialización de la variable de control.
// i < 5: condición que se evalúa antes de cada iteración; el bucle continúa mientras sea verdadera.
// i++: incremento de la variable de control después de cada iteración.
// console.log('Iteración número ' + i): bloque de código que se ejecuta en cada iteración del bucle.

// Ejemplo práctico: calcular el total de gastos semanales
const gastos = [700, 100, 1000, 150, 50, 75, 40, 23, 25]; // Array de gastos
let totalGastos = 0;

//console.log(gastos[5])

/* for (let i = 0; i < gastos.length; i++) {
    const gastoDiario = gastos[i];
    totalGastos += gastoDiario
    console.log(totalGastos)
}

console.log(totalGastos) */

/* for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue; //salta la iteración
    }
    console.log("Esta es la iteración número " + i);
} */

/* for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; //detiene el bucle en esta iteración
    }
    console.log(i);
} */

/* for (let i = 0; i < gastos.length; i++) {
    const gastoDiario = gastos[i];
    if (gastoDiario >= 500) {
        totalGastos += gastoDiario;
    }
    console.log(totalGastos);
    continue;
} */

for (let i = 0; i < gastos.length; i++) {
    const gastoDiario = gastos[i];
    if (gastoDiario <= 500) continue;
    totalGastos += gastoDiario;
    console.log(totalGastos);
}

//console.log(totalGastos)