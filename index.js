
/*Ejercitación
Dado el siguiente código

Escribir el mismo código utilizando el operador de cortocircuito.
const edad = 18
if (edad >= 18) {
  alert("Es mayor de edad!)
}
const edad = 18

edad > 18 && alert("Es mayor de edad!")
*/

/*
Dado el siguiente código
const edad = 18
if (edad >= 18) {
  alert("Es mayor de edad!)
}
else {
  alert("es menor de edad!)
}
Escribir el mismo código utilizando el operador ternario.
const edad = 16
edad >= 18? alert("Es mayor de edad!") : alert("es menor de edad!")*/

/*
Dado el siguiente código
const sumar = (num1, num2) => {
  return num1 + num2
}
Reescribir la función utilizando el return implícito.*/
const sumar = (num1, num2)=> num1 + num2

/*Usando filter, definí la función losMasCaros que tome una lista de costos que representan costos de 
diferentes productos y devuelva un nuevo array con los precios más caros (mayores a 50) --> 
(ya la hiciste en mumuki: https://mumuki.io/frontend.ada/exercises/11519-javascript-avanzado-metodos-de-arrays-los-mas-caros)
4.1. Reescribí la función para tener sólo return implícitos*/
const costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]

//  const losMasCaros = (costos) => {
//   let listaNueva = costos.filter((elemento)=>{
//     return elemento > 50
//   })
//   return listaNueva
// } 

const losMasCaros = costos => costos.filter((elemento)=>{
  return elemento > 50
})

console.log(losMasCaros(costos))

// Reescribí los siguientes ejercicios de mumuki usando el operador de cortocurcuito o el operador ternario. Usá return implícito:
// https://mumuki.io/frontend.ada/exercises/11153-introduccion-a-javascript-condicionales-puede-ver-pelicula
const puedeVerPelicula = (edad , tieneAutorizacion ) => edad > 15 || tieneAutorizacion && true

// console.log(puedeVerPelicula(12, false));
// console.log(puedeVerPelicula(12, true));
// console.log(puedeVerPelicula(16, false));
// console.log(puedeVerPelicula(18, true));
// https://mumuki.io/frontend.ada/exercises/11154-introduccion-a-javascript-condicionales-esta-en-rango
// const estaEnRango = (valor, minimo, maximo) => {
//   if (valor >= minimo && valor <= maximo) {
//       return true 
//   }
//   else{
//       return false
//   }
  
// }
const estaEnRango = (valor, minimo, maximo) => valor >= minimo && valor <= maximo;

console.log (estaEnRango(3, 1, 10));
console.log(estaEnRango(1, 1, 10))
console.log(estaEnRango(10, 1, 10))
console.log(estaEnRango(12, 1, 10))
console.log(estaEnRango(-3, 1, 10))

// https://mumuki.io/frontend.ada/exercises/11155-introduccion-a-javascript-condicionales-puede-avanzar
const puedeAvanzar = color => color === "verde";
console.log(puedeAvanzar('verde'))
console.log(puedeAvanzar('amarillo'))
console.log(puedeAvanzar('rojo'))

// https://mumuki.io/frontend.ada/exercises/11156-introduccion-a-javascript-condicionales-es-vocal
const esVocal = letra => letra === "a" || letra ==="e" || letra ==="i" || letra==="o" || letra==="u";
esVocal('a'); //true
esVocal('n'); //false
esVocal('e'); //true
// https://mumuki.io/frontend.ada/exercises/11157-introduccion-a-javascript-condicionales-es-consonante
const esConsonante = (letra) => esVocal(letra) === false

console.log("a",esConsonante('a'))
console.log("n",esConsonante('n'))
console.log("e",esConsonante('e'))
