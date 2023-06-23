//verifica si un número es par o impar

function esPar(numer1){
    
    if (numer1 % 2 === 0) {
       console.log("es par"); 

        
    }else{
        console.log("es impar");
    }

}



esPar(4);

//suma de los digitos de un numero

function sumaDigitos(numero) {
    let suma=0;
    let numeroString= numero.toString();

    for (let i = 0; i < numeroString.length; i++) {
        suma += parseInt(numeroString.charAt(i));

    }return suma;
}
let numero=123;
let suma=sumaDigitos(numero);
console.log(suma);

//gener una secuencia

function generaSecuencia(numero2) {
    for (let i= 1; i <= numero2; i++){
    console.log(i); 
    }
}

let numero2 = 5
generaSecuencia(numero2);

//tabla de multiplicar

function tablaMultiplicar(numero3) {
  for (let y= 1; y <= 10; y++){
    let resultado=numero3 *y;
    console.log(numero3 + `*` + y + `=`+ resultado);
    }   
}

let numero3 = prompt("ingresar numero");
tablaMultiplicar(numero3);
    

    
