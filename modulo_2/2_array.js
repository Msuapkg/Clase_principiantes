const frutas = ["manzana", "uva", "pera", "guayaba"];
//                 0         1       2        3
const presentaciones = ["1 Kg","5 Kg"];

//console.log(frutas[3]);

// for
/* console.log("Resultados de for --------")
for (let i = 0; i < frutas.length; i++) {
    for (let j = 0; j < presentaciones.length; j++) {
        console.log(`Tengo ${frutas[i]} en presentación de ${presentaciones[j]}`)
    }
} */

//console.log("Resultados de map --------")
const misFrutas = frutas.map(elemento => elemento);
//console.log(misFrutas)

//const precios = [100, 450, 200, 300];
/*const filtradoPrecios = precios.map(precio => precio >= 200);
console.log(filtradoPrecios) */

const precios = [100, 450, 200, 300];
/* console.log("Resultados de forEach -----")
const filtradoPrecios = precios.forEach(precio => {
    if (precio >= 200) {
        console.log(precio)
    }
}); */
//console.log(filtradoPrecios)

//filter
const preciosFiltrados = precios.filter(precio => precio >= 200);
//console.log(preciosFiltrados)

//indexOf - busca el indice de un elemento en el array
const indicePera = frutas.indexOf("uva");
//console.log(indicePera)

//find
const frutaEncontrada = frutas.find(fruta => fruta === "naranja");
//console.log(frutaEncontrada)

//some

//every

//reduce
const totalPrecios = precios.reduce((acumulador, precioActual) => acumulador + precioActual, 0);
//console.log(totalPrecios)

//sort
const preciosOrdenados = precios.sort((a, b) => b - a);
//console.log(preciosOrdenados)
const frutasOrdenadas = frutas.sort().reverse();
//console.log(frutasOrdenadas)
//includes
const tienePera = frutas.includes("naranja");
//console.log(tienePera)
//splice

//slice

//join
const frutasUnidas = frutas.join("");
//console.log(frutasUnidas)
//concat
const masFrutas = ["kiwi", "fresa", "naranja"];
const todasLasFrutas = frutas.concat(masFrutas);
//console.log(todasLasFrutas)
const hola = "Hola";
const mundo = "Mundo";
const holaMundo = hola.concat("-", mundo);
//console.log(holaMundo)
//reverse

//push
const frutasVendidas = [];
frutasVendidas.push("manzana");
console.log(frutasVendidas)
frutasVendidas.push("pera");
console.log(frutasVendidas)
frutasVendidas.push("uva", "guayaba");

console.log(frutasVendidas)

//pop

//shift

//unshift

//toString

//length
