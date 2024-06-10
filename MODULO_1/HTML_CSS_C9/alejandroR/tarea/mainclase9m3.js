// Callbacks en Manejo de Datos:

// Descripción: Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar todos los números del arreglo.

// Ejercicio:
// =================================================================================================================
//  const numeros = [1, 2, 3, 4, 5];
//  function sumaArreglo(numerosArray, callback) {
//   let total= 0;
//   for (let i = 0; i < numerosArray.length; i++) {
//     total += numerosArray[i];
//   }
//   callback(total);
// }

// sumaArreglo(numeros, (total) => console.log(total)); 

// ======================================================================================================================

// Descripción: Crea una función que tome un arreglo y un callback de filtro, y devuelva un nuevo arreglo con los elementos que pasan el filtro. Ejercicio:

// function filtrarArreglo(arreglo, callbackFiltro) {
//   // Completa esta función para devolver un nuevo arreglo con los elementos que pasan el filtro
//   const filtro= arreglo.filter(callbackFiltro)
//   return filtro
// }


// const numeros = [1, 2, 3, 4, 5];
// const numerosPares = filtrarArreglo(numeros,  numero => numero % 2 === 0);
// console.log(numerosPares); // Debería imprimir [2, 4]


// ========================================================================================================
/* Descripción: Creea una función en JavaScript que filtre los números pares de un array 
y utilicen un callback para manejar el resultado.

Pasos a seguir:

Crea una función llamada filtrarPares que acepte dos parámetros: un array de números y un callback.
Dentro de la función filtrarPares, utiliza el método filter para filtrar los números pares del array.
Llama al callback pasado como parámetro con el array de números pares como argumento.
Implementa un callback llamado mostrarPares que acepte un parámetro numerosPares. Este callback debe imprimir los números pares en la consola.
¡No olvides probar tu función llamando a filtrarPares y pasando mostrarPares como callback! */

// Función para filtrar números pares y llamar a un callback con el resultado
function filtrarPares(numeros, callback) {
const filtroNumeros= numeros.filter(callback)
return filtroNumeros
  // Tu codigo acá
}

// Callback para mostrar los números pares en la consola
function mostrarPares(filtroNumeros) {
console.log(filtroNumeros)

  // Tu codigo acá
}

// Array de números de ejemplo
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Llamar a la función filtrarPares y pasar el callback mostrarPares
filtrarPares(numeros, function () {
  numeros.filter(numero => numero %2 ===0)
});