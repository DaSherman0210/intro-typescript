//* Object arrays

let goleadores:string[] = ["jisas",'Amed','Yedher'];

let goles:number[] = [ 0 , 5 , -2];

let tirosEsquina:number[] = [];

console.log(`Los goleadores: ${goleadores}`);
console.log(`Con los goles respectivos: ${goles}`);

//* Metodo alternativo para definir arrays en typescript

let wereTherePenalties: Array<boolean> = [false];

console.log(`Penalties: ${wereTherePenalties}`);

//* TipeScript infiere los metodos aplicables segun el tipo de dato

console.log(goles.map(ele => ele.toString()));
 
//* Objects (arrays)

let goleadoresId = [10 , 7 , 9 , 11];

goleadoresId.push(1);
console.log(goleadoresId);


goleadoresId.push(+'13')
console.log(typeof(goleadoresId));

const objeto:{
    readonly id:number, //? Para evitar que sea modificado
    nombre:string,
    edad:number,
    sueldo?:number
} = {
    id:8,
    nombre:"jisas",
    edad:10
}

//! objeto.id = 1;
objeto.edad = 11;
objeto.sueldo = 20000

console.log(objeto);
