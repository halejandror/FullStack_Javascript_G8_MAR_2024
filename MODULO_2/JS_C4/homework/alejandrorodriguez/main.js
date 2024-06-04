// const edad= Number(prompt("Digita tu edad por favor "));

// if(edad <= 12 && edad> 0){
//     document.write("Eres un niño");
//     }
//     else if(edad > 12 && edad <= 17){
//         document.write("Eres un adolecente");
//     }
//     else if(edad >=18 && edad<=64) {
//         document.write("Eres adulto");
//     }
//     else if(edad> 64 && edad< 102){
//         document.write("Eres un adulto mayor");
//     }
//     else{
//         document.write(" <br>Dame un dato valido");
//     }


// Probemos algunos metodos (y propiedades) que por defecto tienen los arrays en js
const animals = ['perro', 'gato', 'oso', 'leon', 'elefante', 'pajaro'];

// length -> Muestra la cantidad de elementos que hay en un array
console.log(animals.length);

animals.push('tigre', 'tortuga');
console.log(animals);
console.log(animals.length);

const palabra = 'reconocer';
const splittedArray = palabra.split('');
console.log(splittedArray);

// reverse -> Iniverte el orden de los elementos de un array. El primer elemento pasa a ser el ultimo y vicerversa
const numbers = [1,2,3,4,5,6];
console.log(numbers.reverse());

const reversedArray = splittedArray.reverse();
console.log(reversedArray);

// join -> Une todos los elementos de un array en un string y retorna ese string
const palabraInvertida = reversedArray.join('');
console.log('es palindrome? ', palabraInvertida === palabra);


/*Dado el siguiente array de objetos que representan estudiantes:*/

let estudiantes = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 22 },
  { nombre: "Pedro", edad: 19 },
];
/*Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado.
*/
for(let i=0; i < 3;i++){
    let resul=.edad []+ 1; 
    resul+= 1;
    console.log(resul);
}