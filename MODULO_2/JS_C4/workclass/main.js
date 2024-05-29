//document.write("hello world")

// const country = prompt("Escribe tu pais de origen");

// // Esto resolviendo en el caso de solo IF
// if(country === "colombia"){
//     document.write("<br>Tu eres Colombiano")
// }

// if(country === "panama"){
//     document.write("<br>Tu eres Panameño")
// }

// if(country === "venezuela"){
//     document.write("<br>Tu eres venezolano")
// }

// if(country === "peru"){
//     document.write("<br>Tu eres Peruano")
// }

// if(country === "colombia"){
//     document.write("<br>Tu eres Colombiano X2")
// }



// Utilizamos nuestro codigo con ELSE IF
// IF = Si quiero que se cumpla la condición ()
// ELSE = Por lo contrario que quiero que pase  
// ELSE IF = Por lo Contrario Si, que quiero pase

// if (country === "colombia") {
//     document.write("<br>Tu eres Colombiano");
// } else if (country === "panama") {
//     document.write("<br>Tu eres Panameño")
// } else if (country === "venezuela") {
//     document.write("<br>Tu eres venezolano")
// } else if (country === "peru") {
//     document.write("<br>Tu eres Peruano")
// } else {
//     document.write("Tu no eres de los pais anteriormente mencionados")
// }



// document.write("<br>FIN DEL PROGRAMA");

// const genero = prompt("Digame su genero");
// const age = Number(prompt("Digita tu edad"));

// if (age < 18 && genero === "masculino"){
//     document.write("no puedes entrar")
// } 
// else if (age < 18 && genero === "femenino"){
//     document.write("No puedes entrar")
// } 
// else if (age > 18 && genero === "femenino"){
//     document.write("Puedes entrar gratis")
// } 
// else if (age > 18 && genero === "masculino"){
//     document.write("Tienes que pagar %30.000")
// }

// De la manera mas eficiente

const genero = prompt("Digame su genero");
const age = Number(prompt("Digita tu edad"));

if (age < 18){
    document.write("<br>No puedes entrar")
} else if ( genero === "masculino" && age >= 18){
    document.write("<br>Tienes que pagar $30.000")
} else if ( genero === "femenino" && age >= 18){
    document.write("<br>Tu entras gratis")
} else {
    document.write("Ingresaste los datos mal")
}


// Crear un programa que pida al usuario un color de camiseta y una talla (S/M/L/XL)
// El programa debe decirle a el usuario cuantas camisetas hay
// Esto de acuerdo a la siguiente tabla

// azules de talla L -> 4 Camisetas
// azules de talla M -> 10 Camisetas
// verdes de talla S -> 2 Camisetas
// de los demás colores y tallas no hay



// toLowerCase = Pasarlo a minusculas

const size = prompt("Escribe la talla de la camiseta");
const color = prompt("Escribe el color");
const color_2 = color.toLowerCase();
const size_2 = size.toLowerCase();

if (color_2 === "azul" && size_2 === "l"){
    document.write("4 camisetas disponibles")
} else if (color_2 === "azul" && size_2 === "m"){
    document.write("10 camisetas disponibles")
} else if(color_2 === "verde" && size_2 === "s"){
    document.write("2 camisetas disponibles")
} else {
    document.write("Agotado")
}

