import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Compra } from '../../model/Compra';
import { LibreriaService } from '../../service/libreria.service';

@Component({
  selector: 'app-compras',
  imports: [CommonModule],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent {
  compras:Compra[]=[];

  constructor(private libreriaService:LibreriaService)  {
    libreriaService.compras().subscribe(data => this.compras=data);
  }



}
