"use strict";
class Astronauta {
    constructor(_id, _nombre, _record, _recompensa) {
        this._id = _id;
        this._nombre = _nombre;
        this._record = _record;
        this._recompensa = _recompensa;
    }
    //todo -- Record
    set record(record) {
        this._record = record;
    }
    get record() {
        return this._record;
    }
    //todo -- Recompensa
    /* set recompensa(recompensa:number){
        this._recompensa = recompensa;
    }

    get recompensa():number{
        return this._recompensa;
    } */
    obtenerRecompensa(record) {
        if (record === "Artemis") {
            this._recompensa = 5000000;
            console.log(`¡FELICIDADES ${this._nombre} ! La recompensa por alcanzar artemis es de ${this._recompensa}  🚀  `);
        }
        else {
            console.log(`Bien hecho astronauta, pero no llegaste a artemis 😔`);
        }
    }
}
//* Via constructor
const astro1 = new Astronauta(1, "snadx", "shd", 0);
console.log(`Record ${astro1.record}`);
//* Via setter
astro1.record = "Artemis";
console.log(`Record via setter del astronauta: ${astro1.record}`);
astro1.obtenerRecompensa("Artemis");
