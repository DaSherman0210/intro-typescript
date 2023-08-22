"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Astronauta {
    constructor(_id, _nombre, _record, _recompensa, mission = []) {
        this._id = _id;
        this._nombre = _nombre;
        this._record = _record;
        this._recompensa = _recompensa;
        this.mission = mission;
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
    getLauches() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://api.spacexdata.com/v3/launches`;
            try {
                const { data } = yield axios_1.default.get(url);
                let cont = 0;
                data.forEach((datos) => {
                    const { mission_name } = datos;
                    this.mission[cont] = mission_name;
                    cont += 1;
                });
                console.log(this.mission);
                return this.mission;
                ;
            }
            catch (error) {
                console.log(error, `MAMHUEVO`);
            }
        });
    }
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
//TODO -- CLASSES
class Details {
    constructor(nombre, descripcion, fechaCreacion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
    }
    get year() {
        return this.fechaCreacion.getFullYear();
    }
}
class Cohete extends Details {
    constructor(orbita, nombre, descripcion, fechaCreacion) {
        super(nombre, descripcion, fechaCreacion);
        this.orbita = orbita;
    }
}
let falcon1 = new Cohete("luz", "falcon1", "superCohete de Elon", new Date());
console.log(falcon1.year);
class TiposCohetes extends Details {
    constructor(nombre, descripcion, fechaCreacion) {
        super(nombre, descripcion, fechaCreacion);
        this.cohete = [];
    }
    agregarCohete(cohete) {
        this.cohete.push(cohete);
    }
}
let tiposCohete = new TiposCohetes("Falcons", "Falcon de spaceX", new Date());
tiposCohete.agregarCohete(falcon1);
console.log(falcon1, tiposCohete);
astro1.getLauches();
