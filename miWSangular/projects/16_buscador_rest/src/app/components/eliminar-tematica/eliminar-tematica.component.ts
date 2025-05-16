import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../service/book.service';
import { Book } from '../../model/Book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eliminar-tematica',
  imports: [FormsModule,CommonModule],
  templateUrl: './eliminar-tematica.component.html',
  styleUrl: './eliminar-tematica.component.css'
})
export class EliminarTematicaComponent {
  tematicaSeleccionada:string;
  libros:Book[]=[];

  constructor(private bookService:BookService){}

    eliminar():void{
    this.bookService.eliminar(this.tematicaSeleccionada)
    .subscribe(resultado=>this.libros=resultado);
  }

}
