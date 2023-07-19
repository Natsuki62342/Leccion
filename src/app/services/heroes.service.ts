import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes:Heroe[]=[
    {
      origen: "Origen: Quito",
      destino: "Destino: Guayaquil",
      img: "assets/img/bus.png",
      precio: "$10",
      descripcion:"Viaje directo a Guayaquil hora 11:00",
      tipo:"Interno"
    },{
      origen: "Origen: Quito",
      destino: "Destino: Cuenca",
      img: "assets/img/bus.png",
      precio: "$8",
      descripcion:"Viaje directo a Cuenca hora 12:00",
      tipo:"Interno"
    },{
      origen: "Origen: Machala",
      destino: "Destino: Guayaquil",
      img: "assets/img/bus.png",
      precio: "$5",
      descripcion:"Viaje directo a Guayaquil hora 13:00",
      tipo:"Interno"
    },{
      origen: "Origen: Cusco",
      destino: "Destino: Quito",
      img: "assets/img/bus.png",
      precio: "$100",
      descripcion:"Viaje directo a Quito hora 14:00",
      tipo:"Externo"
    },{
      origen: "Origen: Quito",
      destino: "Destino: Loja",
      img: "assets/img/bus.png",
      precio: "$20",
      descripcion:"Viaje directo a Loja hora 15:00",
      tipo:"Externo"
    },{
      origen: "Origen: Machala",
      destino: "Destino: Huaquillas",
      img: "assets/img/bus.png",
      precio: "$3",
      descripcion:"Viaje directo a Huaquillas hora 16:00",
      tipo:"Todo"
    },{
      origen: "Origen: Guayaquil",
      destino: "Destino: Macara",
      img: "assets/img/bus.png",
      precio: "$15",
      descripcion:"Viaje directo a Macara hora 17:00",
      tipo:"Todo"
    },{
      origen: "Origen: Macara",
      destino: "Destino: Bogota",
      img: "assets/img/bus.png",
      precio: "$50",
      descripcion:"Viaje directo a Quito hora 18:00",
      tipo:"Externo"
    },{
      origen: "Origen: Quito",
      destino: "Destino: Piñas",
      img: "assets/img/bus.png",
      precio: "$30",
      descripcion:"Viaje directo a Piñas hora 19:00",
      tipo:"Interno"
    },{
      origen: "Origen: Quito",
      destino: "Destino: Macas",
      img: "assets/img/bus.png",
      precio: "$20",
      descripcion:"Viaje directo a Macas hora 20:00",
      tipo:"Todo"
    }
  ];

  constructor() { 
    console.log("Servicio listo para usar...");

  }

  getHeroes(){
    return this.heroes;
  }

  getHeroe(idx:number):Heroe{
    return this.heroes[idx];
  }

  buscarHeroes(dato:string) : Heroe[] {
    let heroesArr:Heroe[] = [];
    dato = dato.toLocaleLowerCase();
    for(let i = 0; i < this.heroes.length; i++) {
      let heroe = this.heroes[i];
      let destino = heroe.destino.toLocaleLowerCase();
      let origen = heroe.origen.toLocaleLowerCase();
      if(destino.indexOf(dato) >= 0 || origen.indexOf(dato )>= 0) {
        heroe.idx = i;
        heroesArr.push(heroe);
      }
    }
    return heroesArr;
  }
  buscarTipo(dato:string) : Heroe[] {
    let heroesArr:Heroe[] = [];
    dato = dato.toLocaleLowerCase();
    for(let i = 0; i < this.heroes.length; i++) {
      let heroe = this.heroes[i];
      let tipo = heroe.tipo.toLocaleLowerCase();
      if(tipo.indexOf(dato) >= 0) {
        heroe.idx = i;
        heroesArr.push(heroe);
      }
    }
    return heroesArr;
  }
}

export interface Heroe{
  origen: string;
  destino: string;
  img: string;
  precio: string;
  descripcion: string;
  tipo:string;
  idx?: number;
}
