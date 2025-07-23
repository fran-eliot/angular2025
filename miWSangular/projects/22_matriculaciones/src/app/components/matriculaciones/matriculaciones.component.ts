import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Curso } from '../../model/Curso';
import { Matricula } from '../../model/Matricula';
import { MatriculacionesService } from '../../service/matriculaciones.service';
import { NotaPipe } from '../../pipes/nota.pipe';

@Component({
  selector: 'app-matriculaciones',
  standalone: true,
  imports: [CommonModule, FormsModule, NotaPipe],
  templateUrl: './matriculaciones.component.html',
  styleUrl: './matriculaciones.component.css'
})
export class MatriculacionesComponent {
  cursos:Curso[]=[];
  matriculas:Matricula[]=[];
  cursoSeleccionado:number;

  constructor(private matriculacionesService:MatriculacionesService){
        this.matriculacionesService.buscarCursos()   //Observable<Curso[]>
        .subscribe(resultado=>this.cursos=resultado);
      }

  cargarMatriculas():void{
    this.matriculacionesService.buscarMatriculas(this.cursoSeleccionado) //Observable<Pais[]>
    .subscribe(resultado=>this.matriculas=resultado);
  }

}
