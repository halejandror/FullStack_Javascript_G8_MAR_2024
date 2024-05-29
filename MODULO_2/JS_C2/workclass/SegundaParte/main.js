// Esto es IF and ELSE
/// Comparar Variables
//  Igualdad == (es una igualdad entre valores) 2000 == "2000"
//  Igualdad Exacta === (que es exactamente igual) 2000 === "2000"
//  Mayor >
//  Menor <
//  Mayor o igual >=
//  Menor o igual <= 
//  Diferencia !=


// el usuario tiene más de 18 años
var age = prompt("Digite su edad");
if (age == 18) {
    document.write("<h1>Usted puede entrar a la pagina</h1>")
}

// var añoNacimiento = prompt("Coloque su año de nacimiento")
// if (añoNacimiento == 2000){
//     document.write("Su año de nacimiento es el 2000")
// }


var age = prompt("Digite su edad");
if (age >= 18) {
    document.write("Usted puede ingresar a la pagina")
} else{
    document.write("Usted es menor de edad, no puede ingresar")
}


var pais = prompt("Digite su pais")
if (pais === "colombia"){
    document.write("Su pais es Colombia Felicitaciones!!")
} else{
    document.write("Su pais no es Colombia, usted es de otra nacionalidad")
}



var password = "kambcode"
