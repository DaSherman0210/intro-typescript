import axios from "axios";
import { ApispaceXResponse } from "./interfaces/spaceX-response.interface.js";

class Astronauta {
    
    constructor(
        public readonly _id: number,
        public _nombre: string,
        private _record: string,
        public _recompensa: number,
        public mission:string[]=[]
    ){}
    
    //todo -- Record

    set record(record:string){
        this._record = record;
    }

    get record():string{
        return this._record;
    }

    //todo -- Recompensa

    /* set recompensa(recompensa:number){
        this._recompensa = recompensa;
    }

    get recompensa():number{
        return this._recompensa;
    } */


    async getLauches() {
        const url = `https://api.spacexdata.com/v3/launches`;
        try {
            const {data} = await axios.get<ApispaceXResponse[]>(url);
            let cont = 0;
            data.forEach((datos:any) => {
                const {mission_name} = datos;
                this.mission[cont] = mission_name;
                cont += 1;
            }
        )
        console.log(this.mission);
        return this.mission;;
        } catch (error) {
            console.log(error ,  `MAMHUEVO`);
            
        }        
    }

    obtenerRecompensa(record:string){
        if (record === "Artemis") {
            this._recompensa = 5000000;
            console.log(`¡FELICIDADES ${this._nombre} ! La recompensa por alcanzar artemis es de ${this._recompensa}  🚀  `);
        }else{
            console.log(`Bien hecho astronauta, pero no llegaste a artemis 😔`);
        }
    }


}

//* Via constructor

const astro1 = new Astronauta(1,"snadx","shd",0);
console.log(`Record ${astro1.record}`);

//* Via setter

astro1.record = "Artemis";
console.log(`Record via setter del astronauta: ${astro1.record}`);

astro1.obtenerRecompensa("Artemis");

//TODO -- CLASSES

class Details{
    constructor(
        public nombre: string,
        public descripcion: string,
        public fechaCreacion: Date
    ){}

    get year(){
        return this.fechaCreacion.getFullYear();
    }
}

class Cohete extends Details{
    constructor(
        public orbita: string,
        nombre:string,
        descripcion:string,
        fechaCreacion:Date
    ){
        super(nombre,descripcion,fechaCreacion);
    }
}

let falcon1 = new Cohete("luz","falcon1","superCohete de Elon",new Date());

console.log(falcon1.year);

class TiposCohetes extends Details{
    public cohete:Cohete[] = []
    constructor(
        nombre:string,
        descripcion:string,
        fechaCreacion:Date
    ){
        super(nombre,descripcion,fechaCreacion);
    }

    agregarCohete(cohete:Cohete){
        this.cohete.push(cohete);
    }
}

let tiposCohete = new TiposCohetes("Falcons","Falcon de spaceX",new Date());

tiposCohete.agregarCohete(falcon1);
console.log(falcon1,tiposCohete);


astro1.getLauches()
