const perro = "piki";
const años = 10;
const mion = true; //true o false
/* console.log(perro)
console.log("mi perro es " + perro)
if (mion==true){
    console.log(perro + " si es muy mion ")
} else {
    console.log(perro + " no hace nada de pipí ")
} */

if (perro==="piki"){
    console.log("mi perro es " + perro + " y tiene " + años + " años y es muy mion")
} else {
    console.log("mi perro es " + perro + " y tiene " + años + " años y no es muy mion")
}
console.log (perro==="piki" ? "es gordo" : "es huesudo")

//operadores
// aritmeticos o matematicos 
// + sumar - restar * multiplicar / dividir %  porcentaje ++ incrementar -- decrementar 
// comparativos == igualdad para tipo de dato === iagualdad estricta ( numerico o texto) != desigualdad para tipo de dato !== dessiagualdad estricta ( numerico o texto ) <> mayot o menor que 
// logicos || "o" &&  " y" ! " no"
// asignacion = += -= *= /= %= 

/* 
const fruta = "piña";
const precio = 50;
const cantidad = 3;

if (fruta === 'piña' && cantidad <= 2) {
    const total = precio * cantidad;
    console.log('El precio unitario de '+ fruta + ' es de $' + precio);
    console.log('El precio total de tu compra es de $' + total);
} else if (fruta === 'manzana' && cantidad > 2) {
    const total = precio * cantidad;
    const descuento = total * 0.2;
    const nuevoTotal = total - descuento;
    console.log('El precio unitario de '+ fruta + ' es de $' + precio + ' con un descuento del 20%');
    console.log('El precio total de tu compra es de $' + nuevoTotal);
} else {
    console.log('Lo siento, no tenemos ' + fruta + ' disponible.');
}

const a = 23;
const b = 1;
const suma = a + b ;
const resta = 48 - 28 ;
const multiplicacion = 56 * 46 ;
const division = 198 / 46 ;
const porcentaje = 46 % 64 ;
let incremento = 86 ;
let decremento = 86 ;
console.log ("resultado:") ;
console.log (incremento-- );

for (let i = 0; i < 10; i++) {
    console.log("Iteración número: " + i);
    console.log(i += 1);


}
const peludo = "tornado";
const cuerpo = "gordo";
const numero = true;

if ( peludo === "tornado" && cuerpo !== "gordo") {
    console.log (peludo + cuerpo) 
}

if (numero == true)  {
    console.log (typeof (numero))
}
let hola = 56
console.log (hola += 89)

const total = (hola + 89) */