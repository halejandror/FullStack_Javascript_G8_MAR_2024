// alert ("por favor dame tu peso en kilos")
var nombre= prompt("dame tu nombre completo por favor")
// declaro una variable que almacenara los nombres de usuario
var peso = prompt("dame tu peso por favor")
// declaro una variable que me guarda el peso de los usuarios
var altura= prompt("dame tu altura en cm por favor")
// arriba declaro una variable que me guardara la altura de los usuarios
var altura2= altura / 100;
// arriba declaro una variable que me convertira la altura de cm a mts
var masa= peso / (altura2 * altura2);
// declaro una variable que me hara la operacion de imc
document.write("<br> hola " + nombre , " esta es su masa corporal: ", masa.toFixed(3))
// esta es la forma de imprimirlo en el explorador web, .toFixed no permite colocar el numero de decimales que queramos ver
alert ("corre al medico por favor")




var edad =