import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  nombre:String;
  agenda:String[]=[];
  visible:boolean=false;

  guardar():void{
    if (!this.agenda.includes(this.nombre)){
      this.agenda.push(this.nombre);
    }
    this.nombre='';
  }

  mostrar():void{
    this.visible=!this.visible;
  }
}
