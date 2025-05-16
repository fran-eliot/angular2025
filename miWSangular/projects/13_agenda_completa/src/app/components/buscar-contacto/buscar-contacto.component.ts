import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactoService } from '../../service/contacto.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Contacto } from '../../model/Conctacto';

@Component({
  selector: 'app-buscar-contacto',
  imports: [FormsModule,CommonModule],
  templateUrl: './buscar-contacto.component.html',
  styleUrl: './buscar-contacto.component.css'
})
export class BuscarContactoComponent {
  email:string;
  contacto:Contacto;

  constructor(private contactoService:ContactoService, private router:Router){

  }

  buscar(){
    this.contacto = this.contactoService.buscar(this.email);

  }

}
