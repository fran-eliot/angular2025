import { Component } from '@angular/core';
import { Producto } from '../../model/Producto';
import { TiendaService } from '../../service/tienda.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos:Producto[];

  constructor(private tiendaService:TiendaService){}

  mostrar(){
    this.tiendaService.productos().subscribe(data=>this.productos=data);
  }
}
