"use strict";
//? 9. N atletas han pasado a finales en salto triple en los juegos
//? olímpicos femenino de 2022. Diseñe un programa que pida por
//? teclado los nombres de cada atleta finalista y a su vez, sus
//? marcas del salto en metros. Informar el nombre de la atleta
//? campeona que se quede con la medalla de oro y si rompió
//? récord, reportar el pago que será de 500 millones. El récord
//? esta en 15,50 metros.
let pago = "NO";
let record = 15.50;
let nombreM = "";
let marcaSS = 2;
let marcas = 0;
let namess = "";
let atletasFinalistas = 2;
for (let n = 0; n < atletasFinalistas; n++) {
    namess = "Andres";
    marcas = 2;
    for (let f = 0; f < marcas; f++) {
        marcaSS = 10;
        if (marcaSS > record) {
            record = marcaSS;
            nombreM = nombre;
            pago = "SI";
        }
    }
}
console.log(`La ganadora de la medalla de oro fue ${namess} con una marca de salto de ${record} y ${pago} se le da el pago de 500 Millones`);
