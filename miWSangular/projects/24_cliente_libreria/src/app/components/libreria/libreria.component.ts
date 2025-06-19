import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Libro } from '../../model/Libro';
import { Compra } from '../../model/Compra';
import { LibreriaService } from '../../service/libreria.service';

@Component({
  selector: 'app-libreria',
  imports: [CommonModule,FormsModule],
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css'
})
export class LibreriaComponent {
  libros:Libro[]=[];
  compras:Compra[]=[];
  usuario:string='';
  password:string='';

  constructor(private libreriaService:LibreriaService){}

  autentificar(){
    if (this.usuario.trim() === '' || this.password.trim() === '') {
      console.error('Usuario o contraseña vacíos');
      return;
    }
    this.libreriaService.autentificar(this.usuario, this.password).subscribe({
      next: (response) => console.log('Autenticación exitosa:', response),
      error: (err) => console.error('Error en la autenticación:', err),
    });
  }

  getCatalogo(){
    this.libreriaService.catalogo().suscribe(data => this.libros=data);
  }

  getCompras(){
    this.libreriaService.compras().suscribe(data => this.compras=data);
  }

}
