import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {ContactoService } from '../../service/contacto.service';
import { Contacto } from '../../model/Conctacto';

@Component({
  selector: 'app-agregar-contacto',
  imports: [FormsModule],
  templateUrl: './agregar-contacto.component.html',
  styleUrl: './agregar-contacto.component.css'
})
export class AgregarContactoComponent {
  nombre:string;
  email:string;
  telefono:string;
  mensaje:string;

  constructor(private contactoService:ContactoService, private router:Router){

  }

  guardar(){
    let contacto = new Contacto(this.nombre, this.email, this.telefono);
    if (this.contactoService.agregar(contacto)){
      this.mensaje = 'Contacto guardado';
      alert('Contacto guardado');
    } else{
      this.mensaje = 'Contacto no guardado: email ya existe';
      alert('Contacto no guardado: email ya existe')
    }

  }

}
