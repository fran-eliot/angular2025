import { Component } from '@angular/core';
import { Producto } from '../../model/Producto';
import { TiendaService } from '../../service/tienda.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tienda-alta',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './tienda-alta.component.html',
  styleUrl: './tienda-alta.component.css'
})
export class TiendaAltaComponent {
   //objeto producto que se rellena con los datos de los campos de texto
  producto:Producto=new Producto();

  constructor(private tiendaService:TiendaService){

  }
  altaProducto(){
    this.tiendaService.altaProducto(this.producto).subscribe();
  }
}
