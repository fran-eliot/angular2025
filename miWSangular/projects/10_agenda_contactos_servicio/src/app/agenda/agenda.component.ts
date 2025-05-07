import { Component } from '@angular/core';
import { Contacto } from '../model/Contacto';
import { AgendaService } from '../service/AgendaService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule,CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
    nombre:string;
    email:string;
    telefono:string;
    agendaService:AgendaService;
    contactos:Contacto[]=[];

    constructor(){
      this.agendaService=new AgendaService();
    }

    guardar():void{
      let contacto:Contacto = new Contacto(this.nombre,this.email,this.telefono)
      this.agendaService.guardar(contacto);
    }

    mostrar():void{
      this.contactos = this.agendaService.recuperar();
    }

    borrar(posicion:number):void{
      this.agendaService.borrar(posicion)
    }


    recuperar():Contacto[]{
      return this.agendaService.recuperar();
    }

}
