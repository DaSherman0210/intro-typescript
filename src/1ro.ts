//  1. Construir el algoritmo para un programa que ingrese tres
// notas de un alumno, si el promedio es menor o igual a 3.9
// mostrar un mensaje "Estudie“, de lo contrario un mensaje que
// diga "becado" 

const nota1:number = 2.4;
const nota2:number = 4.4;
const nota3:number = 5.0;

const notaF:number = (nota1 + nota2 + nota3) / 3

if (notaF <= 3.9) {
    console.log("Estudie vago");
}
else{
    console.log("Becado");
}