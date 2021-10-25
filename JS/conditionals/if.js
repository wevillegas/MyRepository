let numero1 = 65;
let numero2 = 232;
let numero3 = 60 + 5;
let numeroString = "65"
let numero4 = 66
// let active = false;
let nombre1 = "José"
let nombre2 = "Malcom"

// Son iguales?
let resultado = (numero1 == numero2);
// son iguales el numero y el string con el mismo valor? 
let resultado1 = (numero1 == numeroString);
// son distintos?
let resultado2 = (numero1 != numero2);
// son iguales (string)? 
let resultado3 = (nombre1 == nombre2);
// son extrictamente iguales?
let resultado4 = (numero1 === numeroString);
// son extrictamente distrintos? 
let resultado5 = (numero1 !== numeroString);

// es el 1 mayor que el 4? 
let resultado6 = (numero1 > numero4);
// Es el 2 mayor que el 1?
let resultado7 = (numero2 > numero1);
// es el 2 mayor que el 4?
let resultado8 = (numero4 < numero2);
// es el 1 mayor que el 3?
let resultado9 = (numero1 > numero3);

console.log(resultado);
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);
console.log(resultado6);
console.log(resultado7);
console.log(resultado8);
console.log(resultado9);

let edad = 18;
console.log(edad >= 18); //true
console.log(edad <= 18);

let edad2 = 17.999; //false
console.log(edad2 >= 18);

let edad3 = 18.0001; //true
console.log(edad3 >= 18);

let edad4 = 18.1 //false
console.log(edad4 <= 18)



let canAccess = prompt("Ingrese su edad");
console.log("Edad ingresada por el usuario: ", canAccess);

if(canAccess >= 18) {
    document.write("Puede ingresar al boliche");
} else if(canAccess > 50) {
    document.write("Tiene un descuento por ser mayor")
} else {
    document.write("No puede ingresar")
}