"use strict";
//  1. Construir el algoritmo para un programa que ingrese tres
// notas de un alumno, si el promedio es menor o igual a 3.9
// mostrar un mensaje "Estudie“, de lo contrario un mensaje que
// diga "becado" 
const nota1 = 2.4;
const nota2 = 4.4;
const nota3 = 5.0;
const notaF = (nota1 + nota2 + nota3) / 3;
if (notaF <= 3.9) {
    console.log("Estudie vago");
}
else {
    console.log("Becado");
}
