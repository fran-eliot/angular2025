import { Contacto } from "../model/Contacto";

export class AgendaService{

  agenda:Contacto[]=[];

  constructor(){
    this.agenda = this.recuperar();
  }

  guardar(contacto:Contacto):void{
    this.agenda.push(contacto);
  }

  borrar(posicion:number):void{
    this.agenda.splice(posicion,1);
  }

  recuperar():Contacto[]{
    return this.agenda;
  }
}
