const presupuesto = 2000

//gastos
const comida = 700
const pasajes = 100
const tanda = 1000
const antojos = 150
const café = 50

// Total de gastos 
const total = comida + pasajes + tanda + antojos + café
console.log ('tu presupuesto semanal es de $' + presupuesto)
console.log (' el total de tus gastos es de $' + total)

//Porcentaje gastado 
const porcentaje = (total / presupuesto) * 100
console.log (' has gastado el ' + porcentaje + '% de tu presupuesto semanal')

if (total < presupuesto) {
    console.log ('¡no que no podias gastar menos!')
    console.log ('te sobran $' + (presupuesto - total))
} else if (total === presupuesto) {
    console.log ('gastaste justo tu presupuesto, cuidado la proxima semana')
} else {
    console.log ( 'ups 😥 te pasaste del presupuesto')
    console.log ('te faltaron $' + (total - presupuesto))
}
