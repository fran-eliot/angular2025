import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Book } from '../../model/Book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar-tematica',
  imports: [FormsModule,CommonModule],
  templateUrl: './buscar-tematica.component.html',
  styleUrl: './buscar-tematica.component.css'
})
export class BuscarTematicaComponent {
  libros:Book[]=[];
  tematicaSeleccionada:string;

   constructor(private bookService:BookService){}

    buscar():void{
      this.bookService.buscar(this.tematicaSeleccionada)
      .subscribe(resultado=>this.libros=resultado);
    }

}
