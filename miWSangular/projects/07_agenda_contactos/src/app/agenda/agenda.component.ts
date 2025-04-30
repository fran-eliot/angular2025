import { Component } from '@angular/core';
import { Contacto } from '../model/Contacto';
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
  agenda:Contacto[]=[];
  visible:boolean=false;

  guardar():void{
    let c = new Contacto(this.nombre,this.email,this.telefono);
    // c.nombre=this.nombre;
    // c.email = this.email;
    // c.telefono = this.telefono;

    this.agenda.push(c);
  }

  mostrar():void{
    this.visible=!this.visible;
  }

  borrar(contacto):void{
    this.agenda = this.agenda.filter(c => c !== contacto);
  }


}
