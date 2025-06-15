import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Curso } from '../../model/Curso';
import { Alumno } from '../../model/Alumno';
import { MatriculaService } from '../../service/matricula.service';
import { Matricula } from '../../model/Matricula';

@Component({
  selector: 'app-matricula',
  imports: [CommonModule,FormsModule],
  templateUrl: './matricula.component.html',
  styleUrl: './matricula.component.css'
})
export class MatriculaComponent {
  cursoSeleccionado:number;
  alumnoSeleccionado:string;
  cursos:Curso[]=[];
  alumnos:Alumno[]=[];
  exito:boolean=false;
  mensaje:string='';

  constructor(private matriculaService:MatriculaService){
      this.matriculaService.buscarCursos()   //Observable<Curso[]>
      .subscribe(resultado=>this.cursos=resultado);
    }

  cargarCursos(){

  }


  cargarAlumnos():void{
    this.matriculaService.buscarAlumnosNoMatriculadosenCurso(this.cursoSeleccionado) //Observable<Pais[]>
    .subscribe(resultado=>this.alumnos=resultado);
  }

  matricular():void{
    const matricula:Matricula = new Matricula(this.cursoSeleccionado,this.alumnoSeleccionado);
    this.matriculaService.matricular(matricula)
    .subscribe(data=>{
      if (data){
        this.mensaje='Alumno matriculado con éxito';
    }else{
      this.mensaje='No fue posible realizar la matriculación';
    }});
  }

}
