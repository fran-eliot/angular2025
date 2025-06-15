import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../model/Curso';
import { Matricula } from '../model/Matricula';
import { url } from '../utilities/Constants';

@Injectable({
  providedIn: 'root'
})
export class MatriculacionesService {

  constructor(private http:HttpClient) { }



  buscarCursos():Observable<Curso[]>{
    return this.http.get<Curso[]>(`${url}cursos`);
  }


  buscarMatriculas(idCurso:number):Observable<Matricula[]>{
    return this.http.get<Matricula[]>(`${url}matriculas/${idCurso}`);
  }

}
