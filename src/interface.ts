interface Song {
    id: number,
    name: string,
    year?: number //? Cuando tiene interrogante significa que no son obligatorios
}

const oceanos:Song = {
    id: 0,
    name: "oceans",
    year: 2034
}

const rios:Song = {
    id: 1,
    name: "rivers",
    year: 1987
}

console.log(oceanos.name);
console.log(rios.id);


