import { Component } from '@angular/core';
import { Pais } from '../model/Pais';
import { PaisesService } from '../service/paises.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paises',
  imports: [CommonModule,FormsModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
  paises:Pais[]=[];
  // paisesFiltrados:Pais[]=[];
  paisesContinente:Pais[]=[];
  // continentes: Set<string> = new Set<string>();
  continentes:string[];
  continenteSeleccionado:string;

  constructor(private paisesService:PaisesService){
    this.paisesService.continentes()   //Observable<string[]>
    .subscribe(resultado=>this.continentes=resultado);
  }

  cargarPaisesContinente():void{
    this.paisesService.paisesContinente(this.continenteSeleccionado) //Observable<Pais[]>
    .subscribe(resultado=>this.paisesContinente=resultado);
  }

  // cargarPaises():void{
  //   this.paisesService.obtenerPaises().subscribe(data=>{this.paises = data;
  //     this.continentes = new Set<string>(this.paises.map(p => p.region));
  //     this.paisesFiltrados = this.paises;});

  // }

  // filtrarPorContinente(event:Event): void {
  //   const selectElement = event.target as HTMLSelectElement; // Casting a HTMLSelectElement
  //   const continente = selectElement.value;

  //   if (continente) {
  //     this.paisesFiltrados = this.paises.filter(p => p.region === continente);
  //   } else {
  //     this.paisesFiltrados = this.paises; // Show all if no continent is selected
  //   }
  // }

}
