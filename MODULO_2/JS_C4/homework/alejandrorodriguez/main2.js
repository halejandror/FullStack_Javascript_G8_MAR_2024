// let numbers1 = [21, 33, 40, 50, 61, 70, 80, 90, 100];

// // Math.sqrt

// const resul= numbers1.map(e =>  Math.sqrt(e).toFixed(2))
//  console.log(resul);

//  const ever= numbers1.reverse;
//  console.log(ever)

/*===========================================================================*/

/*Tarea 7: Manipulación Básica de Arrays y Objetos
Objetivo general
Practicar la manipulación de arrays y objetos en JavaScript de manera progresiva utilizando 
los metodos vistos en clase (map, filter, foreach):

Punto 1: Obteniendo estadisticas de productos: Dado el siguiente array de productos.*/

    /*const productos = [
        { nombre: "Camiseta", precio: 20, stock: 10 },
        { nombre: "Pantalón", precio: 30, stock: 5 },
        { nombre: "Zapatos", precio: 50, stock: 0 },
        { nombre: "Bufanda", precio: 15, stock: 8 },
   ];
/*Utilizando filter, genera un nuevo array que contenga los productos en stock (todos los productos cuyo stock es mayor a cero).
Utilizando map, genera un nuevo array con solo los nombres de los productos, ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]
(Opcional) Escribe un programa que calcule el precio total de los productos disponibles, para ello debes recorrer todos los productos
 y obtener la suma de el precio de todos ellos*/


/*let suma = productos.map(e => e.precio * e.stock )

console.log(suma)




/*Punto 2: Acceso y Modificación Básica de Datos: Crea un array llamado estudiantes que contenga objetos 
representando a tres estudiantes. Ejemplo */


  const estudiantes1 = [
      { nombre: "Camilo", edad: 33, promedio: 10 },
      { nombre: "Juan", edad: 30, promedio: 6 },
      { nombre: "Andres", edad: 29, promedio: 8.7 },
 ];


/*Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
Imprime en la consola el nombre del segundo estudiante.
Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la información completa del primer estudiante después de la actualización.
*/
estudiantes1[0].edad=25;
console.log(estudiantes1[1].nombre)
console.log(estudiantes1[0])


/*Punto 3: Cálculo de Estadísticas Básicas: Calcula la suma de las edades de todos 
los estudiantes en el array (puedes utilizar un map o foreach). OK

Calcula el promedio de edad de los estudiantes.
Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.OK

Punto 4: Búsqueda y Filtrado de Datos: Utiliza filter para encontrar al estudiante con el promedio más alto en el array.OK

Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.OK

Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.OK

Imprime en la consola la información completa de los estudiantes mayores de 20 años.   OK */

const estudiantes = [
  {
    nombre: "Ana",
    edad: 20,
    promedio: 85,
    genero: "Femenino",
    carrera: "Ingeniería Civil",
    ciudad: "Bogotá",
  },
  {
    nombre: "Juan",
    edad: 22,
    promedio: 78,
    genero: "Masculino",
    carrera: "Medicina",
    ciudad: "Medellín",
  },
  {
    nombre: "María",
    edad: 21,
    promedio: 90,
    genero: "Femenino",
    carrera: "Administración de Empresas",
    ciudad: "Cali",
  },
  {
    nombre: "Pedro",
    edad: 23,
    promedio: 82,
    genero: "Masculino",
    carrera: "Derecho",
    ciudad: "Barranquilla",
  },
  {
    nombre: "Laura",
    edad: 24,
    promedio: 88,
    genero: "Femenino",
    carrera: "Arquitectura",
    ciudad: "Cartagena",
  },
  {
    nombre: "Carlos",
    edad: 20,
    promedio: 75,
    genero: "Masculino",
    carrera: "Ingeniería de Sistemas",
    ciudad: "Santa Marta",
  },
  {
    nombre: "Sofía",
    edad: 22,
    promedio: 95,
    genero: "Femenino",
    carrera: "Psicología",
    ciudad: "Pereira",
  },
];
const estudiantesMayores= estudiantes.filter(e => e.edad > 20)
console.log(estudiantesMayores)


 
// HALLAMOS EL PROMEDIO MAS ALTO
/*const resulEdad= estudiantes.map(e => e.promedio)
const PromedioMasAlto= Math.max(...resulEdad)
console.log(PromedioMasAlto)
console.log(estudiantes[6].nombre, estudiantes[6].edad) */
/*
const resulEdad= estudiantes.map(e => e.edad)
const sumatoria= resulEdad.reduce((add, resul) => add + resul, 0)
  console.log(resulEdad);  
console.log(sumatoria);*/

// Dado el siguiente array de objetos que representan productos:
//  CLASE 7 TAREA 6

let productos = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 },
];

  // for(const mayor in productos){
    const menorPrecio=productos.map(e => e.precio)
    const minimoPrecio= Math.min(...menorPrecio);
    
    console.log(minimoPrecio)
  // }


// Utiliza un bucle for para encontrar el producto con el precio más bajo. Luego, imprime el nombre y el precio de ese producto.

/* jercicio de Modificación de Propiedades de Objetos en un Array:
Dado el siguiente array de objetos que representan estudiantes: */
// Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado.

let estudiante3 = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 22 },
  { nombre: "Pedro", edad: 19 },
];
// for(let i=0; i < estudiante3.length;i++){
// const aYearLater=estudiante3[i].edad + 1;
// console.log(aYearLater)
// }  
const edadMenor= estudiante3.find(e => estudiante3.edad !==200 )
console.log("esto es para saber que valor arroja", edadMenor) 
// Dado el siguiente array de objetos que representan libros:

let libros = [
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];
// Utiliza un bucle for para encontrar todos los libros cuyo título contenga la palabra "El". Luego, imprime estos libros.
// const inicEL2=[];
for (let i = 0; i < 1; i++) {
  const inicEL = libros.filter(e => (e.titulo).startsWith("El"));
  // inicEL2.push(inicEL)
  console.log(inicEL)
}

//Dados los siguientes arrays de frutas:

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];
// Utiliza un bucle for para concatenar frutas2 al final de frutas1. Luego, imprime el array resultante.

let sumarArray= frutas1.concat(frutas2);

console.log(sumarArray)

