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
  
  let ol = document.getElementById("listar-tabla");
  ol.innerHTML = "";
  let cadena = numero3;
  let palabrasOrdenadas = cadena.trim().split(" ");
  palabrasOrdenadas.sort();

  for (let y= 1; y <= 10 || y  <= palabrasOrdenadas; y++){
    let resultado=numero3 *y;
    // console.log(numero3 + `*` + y + `=`+ resultado);
    const li = document.createElement("li");
    li.innerHTML = numero3 + `*` + y + `=`+ resultado;
    ol.appendChild(li);

  }
   
}

// let numero3 = prompt("ingresar numero");
let numero3 = document.getElementById("tabla").value;
//tablaMultiplicar(numero3);


function Tablas() {
  let numero3 = document.getElementById("tabla").value;
  tablaMultiplicar(numero3)
    
}

//numeros primos


function esPrimo(numero4) {
    if (numero4 <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(numero4); i++) {
      if (numero4 % i === 0) {
        return false;
      }
    }
  
    return true;
 
  }
  
  //Ejemplo de uso
  console.log(esPrimo(7)); 
  console.log(esPrimo(10));
  





  
  //numeros perfectos

  function esNumeroPerfecto(numero){
    if (numero <= 1) {
        return false;
        
    } 

    let sumaDivisores= 0;

    for (let i = 1; i < numero; i++){
        if (numero % i === 0){
            sumaDivisores +=  i;
        }
    }
    return sumaDivisores === numero;
        
    }
    //ejemplo de uso
    console.log(esNumeroPerfecto(28));
    console.log(esNumeroPerfecto(12));

    //palindromo


    function esPalindromo(cadena){
        let array = cadena.split("");
        let reverse = array.reverse();
        return cadena ==reverse.join("") ? "si es" :"no es"
    }
    //ejemplp 
    
    console.log(esPalindromo("oso"));
    console.log(esPalindromo("revolver"));
    console.log(esPalindromo("amor"));
        
   //calculo del factorial
   //5!=1*2*3*4*5=120
   // 1!=1
   // 0!=1 
    
   function factorialRecursivo(n){
    if (n==0){
        return 1;
    }else {
        return n*factorialRecursivo(n-1);
    }
   }
   console.log(factorialRecursivo(5));

   //ordenar palbras

  function ordenarPalabras() {
    
    let ol = document.getElementById("listar-palabras");
    ol.innerHTML = "";
    let cadena = document.getElementById("text1").value;
    let palabrasOrdenadas = cadena.trim().split(" ");
    palabrasOrdenadas.sort();

      for (let i = 0; i < palabrasOrdenadas.length; i++) {
          const li = document.createElement("li");
          li.innerHTML = palabrasOrdenadas[i];
          ol.appendChild(li);
      }

    document.getElementById("text1").select();
  }

function reset() {

    document.getElementById("text1").value = "";
    document.getElementById("text1").focus();
    document.getElementById("listar-palabras").innerHTML = "";
}


//contar letras

function contarVocales(frase) {
    if (typeof frase !== 'string') {
      throw new TypeError('El argumento debe ser una cadena de caracteres');
    }
  
    let vocales = 'aeiouAEIOU';
    let contadorVocales = 0;
  
    for (let i = 0; i < frase.length; i++) {
      if (vocales.indexOf(frase[i]) !== -1) {
        contadorVocales++;
      }
    }
  
    return contadorVocales;
  }
  
  try {
    console.log(contarVocales("javascript es genial"));
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }
  
//ordenar palabras

function ordenarTexto(texto) {
    return [...texto].sort((a, b) => a.localeCompare(b)).join("");
  }
  
  console.log(ordenarTexto("javascript"));
  
  
    

    
