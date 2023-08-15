"use strict";
//* Object arrays
let goleadores = ["jisas", 'Amed', 'Yedher'];
let goles = [0, 5, -2];
let tirosEsquina = [];
console.log(`Los goleadores: ${goleadores}`);
console.log(`Con los goles respectivos: ${goles}`);
//* Metodo alternativo para definir arrays en typescript
let wereTherePenalties = [false];
console.log(`Penalties: ${wereTherePenalties}`);
//* TipeScript infiere los metodos aplicables segun el tipo de dato
console.log(goles.map(ele => ele.toString()));
//* Objects (arrays)
let goleadoresId = [10, 7, 9, 11];
goleadoresId.push(1);
console.log(goleadoresId);
goleadoresId.push(+'13');
console.log(typeof (goleadoresId));
const objeto = {
    id: 8,
    nombre: "jisas",
    edad: 10
};
//! objeto.id = 1;
objeto.edad = 11;
objeto.sueldo = 20000;
console.log(objeto);
