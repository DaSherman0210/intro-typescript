//? 5. Construir el algoritmo que lea por teclado dos números,
//? si el primero es mayor al segundo informar su suma y
//? diferencia, en caso contrario, informar el producto y la
//? división del primero respecto al segundo.

let numeroF:number = 0;
let numero1:number = 2;
let numero2:number = 3;
if (numero1 > numero2){
    let numeroF:number = numero1 + numero2;
    let diferencia:number = numero1 - numero2;
    console.log((`El numero ${numero1} es mayor que ${numero2} asi que se suman y el resultado de la suma es de ${numeroF}`));
    console.log((`La diferencia entre ${numero1} y ${numero2} es de ${diferencia}`));
}
else{
    let division:number = numero1 / numero2;
    console.log((`El numero es ${numero1}`));
    console.log((`El segundo numero es ${numero2}`));
    console.log((`La division entre ellos es de ${division}`));
}