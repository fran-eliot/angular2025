import { Component } from '@angular/core';
import { TiendaService } from '../../service/tienda.service';
import { Categoria } from '../../model/Categoria';
import { Producto } from '../../model/Producto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tienda-buscar',
  imports: [FormsModule,CommonModule],
  standalone:true,
  templateUrl: './tienda-buscar.component.html',
  styleUrl: './tienda-buscar.component.css'
})
export class TiendaBuscarComponent {
  idCategoriaSeleccionada:number;
  categorias:Categoria[];
  productos:Producto[];


  constructor(private tiendaService:TiendaService){
    this.tiendaService.categorias()
    .subscribe(data=>this.categorias=data);
  }

  buscarProductos():void{
    this.tiendaService.buscarProductos(this.idCategoriaSeleccionada)
    .subscribe(data=>this.productos=data);
  }
  eliminarProducto(codigo:number):void{
    this.tiendaService.eliminarProducto(codigo).subscribe();
  }
}
