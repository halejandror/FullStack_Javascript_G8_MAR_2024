/*
Crea un array llamado estudiantes que contenga objetos representando a tres estudiantes. Ejemplo
    const estudiantes = [
        { nombre: "Camilo", edad: 33, promedio: 10 },
        { nombre: "Juan", edad: 30, promedio: 6 },
        { nombre: "Andres", edad: 29, promedio: 8.7 },
    ];
  - Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
  - Imprime en la consola el nombre del segundo estudiante.
  - Actualiza la edad del primer estudiante a 25 años.
  - Imprime en la consola la información completa del primer estudiante después de la actualización
*/

// Array ->  [{...}, {...}]
// Objeto -> { animales: [ {...} ] }
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

// Imprime en la consola el nombre del segundo estudiante.
console.log(estudiantes[1].nombre);

// Actualiza la edad del primer estudiante a 25 años.
estudiantes[0].edad = 25;
console.log(estudiantes[0]);

/*
    Dado el siguiente array de objetos que representan estudiantes:

    let estudiantes = [
        { nombre: "Juan", edad: 20 },
        { nombre: "María", edad: 22 },
        { nombre: "Pedro", edad: 19 },
    ];

    Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado.
*/
let estudiantes2 = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
];

for (let i = 0; i < estudiantes2.length; i++) {
    ++estudiantes2[i].edad;
}
    
let numero = 20;
console.log('numero: ', ++numero);
console.log('numero: ', numero++);
console.log(numero);

console.log(estudiantes2);

// =================================================================================================


// MAP, FILTER, FIND, FOREACH, SOME, EVERY
const numbers = [1,2,3,4,5];

// map(): Este método crea un nuevo array con los resultados de llamar una función proporcionada como argumento en cada elemento del array original.

// como lo hariamos de la forma tradicional
/*const arrFinal = [];
for (let i = 0; i < numbers.length; i++) {
    arrFinal.push(numbers[i] * 2);
}

console.log(arrFinal);*/

const doubled = numbers.map(number => number * 2);
console.log(doubled);

// filter(): Retorna un nuevo array con todos los elementos que pasan una condición proporcionada por una función.

// como lo hariamos de la forma tradicional
/*const arrFinal = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        arrFinal.push(numbers[i]);
    }
}

console.log(arrFinal);*/

const evens = numbers.filter(number => number % 2 === 0);
console.log(evens);

// Tambien es posible combinar varios metodos de arrays en una misma asignacion
// Que pasa si queremos filtrar una lista de numeros para encontrar los pares y
// despues de tener la lista de solos los pares, retornar una lista de cada numero doblado
const numeros = [1,2,3,4,5,6,7,8,9,10];

const result = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * 2);

console.log(result);

// find(): Este método devuelve el primer elemento de un array que cumple con una condición dada.
// Si no encuentra ningún elemento que cumpla con la condición, devuelve undefined.
const minorThanFive = numeros.find(number => number > 2 && number < 5);
console.log(minorThanFive);

// forEach(): Ejecuta una función por cada elemento del array.

// como lo hariamos de la forma tradicional
/*for (let i = 0; i < numeros.length; i++) {
    console.log(`index: ${i}, number: ${numeros[i]}`);
}*/

numeros.forEach((number, index) => {
    console.log(`index: ${index}`);
    console.log(`number: ${number}`);
    console.log('-----------');
});

// some(): Retorna true si al menos un elemento del array cumple con la condición dada.
const numerosRandom = [80, 400, 55, 20, 84];
const someStarsWith1 = numerosRandom.some(number => String(number).startsWith('8'));
console.log(someStarsWith1);

// every(): Retorna true si todos los elementos del array cumplen con la condición dada.
const list = [2,2,2,2,2,1,2,2,2];
const allTwo = list.every(number => number === 2);
const allEven = numbers.every(number => number % 2 === 0);
console.log(allTwo);
console.log(allEven);

// includes(): Retorna true si encuentra un item que coincide valor que le pasamos como parametro.
console.log('ESTA EL NUMERO?', numeros.includes(10));

// RETOS
let numbers1 = [21, 33, 40, 50, 61, 70, 80, 90, 100];
// 1. Dado un array de números, crea un nuevo array donde cada elemento sea la raiz cuadrada del elemento correspondiente en el array original.
const sqrtNumbers = numbers1.map(number => Math.sqrt(number).toFixed(2));
console.log(sqrtNumbers);

// 2. Dado un array de números, filtra solo los números impares y muestra el resultado.
let impares = numbers1.filter(number => number % 2 !== 0)
console.log(impares);