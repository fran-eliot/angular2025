import { Component } from '@angular/core';
import { Pagina } from '../model/Pagina';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  imports: [CommonModule,FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  biblioteca:Pagina[]=[
    new Pagina("deportes","http://www.marca.es/"),
    new Pagina("libros","http://www.puntolibro.es/"),
    new Pagina("deportes","http://www.todofutbol.com/"),
    new Pagina("libros","http://www.fnac.es/"),
    new Pagina("cocina","http://www.fogones.es/"),
    new Pagina("juegos","http://www.game.es/")
    ];


  // tematicas:string[]=Array.from(new Set(this.biblioteca.map(e => e['tematica'])));
  tematicas:Set<string>;

  constructor(){
    this.tematicas = new Set(this.biblioteca.map(e => e['tematica']));
  }

  tematica_seleccionada:string;

  resultados:Pagina[]=[];



  obtener_resultados(): void {
    if (this.tematica_seleccionada) {
      if (this.tematica_seleccionada=="Todas"){
        this.resultados = this.biblioteca;
      } else{
        this.resultados = this.biblioteca.filter(pagina => pagina.tematica === this.tematica_seleccionada);
      }

    } else {
      this.resultados = []; // Si no hay temática seleccionada, vacía los resultados
    }
  }



}
