// document.write("hello word")

const genero = prompt("Escribe tu gewnero ");

const edad = Number(prompt("Escribe tu edad"));

if (edad  < 18){
    document.write("Tu no tienes entrada");
    }
    else if (genero === "masculino" && edad >= 18) {
        document.write("Tu pagas un cover de $ 30.000");
    }
    else if( genero ==="femenino" && edad >= 18){
        document.write("Tu entras gratis")
    }
    else {
        document.write("ingresaste un dato errado");
    }
