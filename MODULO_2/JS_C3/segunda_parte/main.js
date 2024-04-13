const paisDeOrigen = prompt("Digite su pais de origen");
const edad = Number(prompt("Digite tu edad"));

if(paisDeOrigen === "colombia" && edad <= 18 ){ // Tiene que cumplirse toda la condicion
    // document.write("<br>Tienes que pagar $8.000 entre semana")
} else{
    document.write("<br>Tienes que pagar $15.000 entre semana")
}


if(paisDeOrigen === "colombia" || edad >= 64 || edad <= 18){ //Puede cumplirse solamente una
    document.write("tienes que pagar $5.000 los domingos")
} else {
    document.write("tienes que pegar $10.000 los domingos") 
}