import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Book } from '../../model/Book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alta-libro',
  imports: [FormsModule,CommonModule],
  templateUrl: './alta-libro.component.html',
  styleUrl: './alta-libro.component.css'
})
export class AltaLibroComponent {
  urlAlta:string;
  tematicaAlta:string;
  descripcionAlta:string;
  libroAlta:Book;

   constructor(private bookService:BookService){}

   alta():void{
    const libro = new Book(this.urlAlta,this.tematicaAlta,this.descripcionAlta);
    this.bookService.alta(libro)
    .subscribe();
   }

}
