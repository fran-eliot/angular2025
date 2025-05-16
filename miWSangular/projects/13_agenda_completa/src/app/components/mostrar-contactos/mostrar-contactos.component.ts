import { Component } from '@angular/core';
import { Contacto } from '../../model/Conctacto';
import { ContactoService } from '../../service/contacto.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mostrar-contactos',
  imports: [CommonModule],
  templateUrl: './mostrar-contactos.component.html',
  styleUrl: './mostrar-contactos.component.css'
})
export class MostrarContactosComponent {
  contactos:Contacto[]=[];

  constructor(private contactoService:ContactoService, private router:Router){
    this.contactos = this.contactoService.mostrar();
  }

  borrar(posicion:number){
    this.contactoService.borrar(posicion);
  }


}
