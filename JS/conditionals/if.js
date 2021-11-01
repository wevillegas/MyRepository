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

    // EJERCICIO ENTRADA DE CINE 

    // - Niño menor paga un 50% del valor de la entrada (0-12 años)
    // - Adolescente paga un 80% del valor de la entrada (13-17 años)
    // - Adulto paga el 100% del valor de la entrada (18-55 años)
    // - Persona mayor paga el 70% del valor de la entrada (56- años)

    // valorEntrada = $400
    
    // Quiero tenert el valor de la entrada + una caja de pochoclos $200 + una gaseosa $100

    // El importe final a abonar es de $XXX
    
    
    const entrada = 300;
    const pochoclos = 200;
    const gaseosa = 100;
    let valorTotal = 0;
    let socio = false;
    
    if(socio){
        entrada = entrada + 100;
    }

    // opcion de resolucion 1

    let edadCliente = window.prompt("Ingrese su edad");
    console.log("La edad ingresada es", edadCliente);


    if(edadCliente >= 55){
        if(socio === true){
            valorTotal= entrada * 0.6
            document.write("Valor de la entrada $ " + entrada * 0.6 + " + Pochoclos chicos $" + pochoclos + " Gaseosa chica $" + gaseosa);
        } else {
            valorTotal= entrada * 0.75
            document.write("Valor de la entrada $ " + entrada * 0.75 + " + Pochoclos chicos $" + pochoclos + " Gaseosa chica $" + gaseosa);
        }
        valorTotal= entrada * 0.75
        document.write("Valor de la entrada $ " + entrada * 0.75 + " + Pochoclos chicos $" + pochoclos + " + Gaseosa chica $" + gaseosa);
    } else if(edadCliente <= 12 ) {
        document.write("Valor de la entrada $ " + entrada * 0.5 + " + Pochoclos chicos $" + pochoclos + " + Gaseosa chica $" + gaseosa);
        valorTotal= entrada * 0.5
    } else if(edadCliente < 18) {
        valorTotal= entrada * 0.8
        document.write("Valor de la entrada $ " + entrada * 0.8 + " + Pochoclos chicos $" + pochoclos + " + Gaseosa chica $" + gaseosa);
    } else if(edadCliente < 55) {
        document.write("Valor de la entrada $ " + entrada + " + Pochoclos chicos $" + pochoclos + " + Gaseosa chica $" + gaseosa)
        valorTotal= entrada
    }
    
    valorTotal = valorTotal + pochoclos + gaseosa;
    document.write("<br> Monto $" + valorTotal + "<br>")

    
    // Signos de fuego: Aries, Leo y Sagitario.
    // Signos de tierra: Tauro, Virgo y Capricornio.
    // Signos de aire: Géminis, Libra y Acuario.
    // Signos de agua: Cáncer, Escorpio y Piscis.
    

 // Como usar los AND Y OR 
let signo = prompt("ingrese su signo")
// pasar a minusculas 
signo = signo.toLowerCase();

if(signo === "aries" || signo === "leo" || signo === "sagitario"){
    document.write("Su signo es del tipo fuego <br>");
    console.log("Su signo es del tipo fuego")
}
if(signo === "tauro" || "signo" === "virgo" || signo === "capricornio"){
    document.write("Su signo es del tipo tierra <br>");
    console.log("Su signo es del tipo tierra");
}
if(signo === "geminis" || signo === "libra" || signo ==="acuario"){
    document.write("Su signo es del tipo aire <br>");
    console.log("Su signo es del tipo aire");
}
if(signo === "cancer" || signo ==="escorpio" || signo === "piscis"){
    document.write("Su signo es del tipo agua <br>");
    console.log("Su signo es del tipo agua");
}

// opcion de resolucion 2
// volver a calcular descuennto pero usando condicional if y operadores and y or 

let age2 = prompt("Ingrese su edad2")
if(age2 > 0 && age2 <= 12) {
    valorTotal = valorTotal + entrada * 0.5
    document.write("Usted es un niño <br>");
    console.log("niño");
} else if(age2 >= 13 && age2 <= 17) {
    valorTotal = valorTotal + entrada * 0.8
    document.write("Usted es un adolescente <br>");
    console.log("pajero");
} else if(age2 >= 18 && age2 <= 54) {
    valorTotal = valorTotal + entrada
    document.write("Usted es un adulto <br>");
    console.log("boomer");
} else(age2 > 55); {
    valorTotal = valorTotal + entrada * 0.7
    document.write("Usted es un viejardo");
    console.log("viejo gaga");
}

// opcion de resolucion 3
// combinando condicionales en el caso que el descuento aplique a mayores y adolescentes en un solo if 
let valorTotal2 = 0;
let age3 = prompt("Ingrese su edad3")

if(age3 >= 55 || (age3 >12 && age3 <= 17)){
    valorTotal = valorTotal + entrada * 0.5
    console.log("Entra al condicional compuesto")
    document.write("Usted es un adolescente o un viejardou <br>");
}