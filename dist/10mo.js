"use strict";
//? 10. Desarrolle un programa cíclico que capture un dato
//? numérico cada vez, y los vaya acumulando. El programa se
//? detiene cuando el usuario digita un cero. El programa debe
//? mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
//? PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
//? VALOR Y MENOR VALOR
let numeroMayor = 0;
let numeroMenor = 999999999;
let cantidadNumero = 0;
let numeroFinal = 0;
let numero = -1;
while (numero != 1) {
    numero = 4;
    cantidadNumero++;
    numeroFinal += numero;
    if (numero > numeroMayor) {
        numeroMayor = numero;
    }
    if (numero != 0 && numero < numeroMenor) {
        numeroMenor = numero;
    }
    console.log("Para salir del bucle escriba 0");
    break;
}
let promedio = numeroFinal / cantidadNumero;
console.log(`La suma de todos los numeros digitados fue de ${numeroFinal}
El promedio de los numeros digitados fue de ${promedio}
Usted digito ${cantidadNumero} numeros
El digito de mayor valor que usted digito fue ${numeroMayor}
El digito de menor valor que usted digito fue ${numeroMenor}`);
