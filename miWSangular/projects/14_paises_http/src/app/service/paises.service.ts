import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../model/Pais';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
   url:string = 'https://restcountries.com/v2/all';


  constructor(private http:HttpClient) { }

  obtenerPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.url); //Observable
  }

  continentes():Observable<string[]>{
    return this.http.get<Pais[]>(this.url) //Observable<Pais[]>
    // .pipe(map(paises=>paises.map(p=>p.region))); //Observable<string[]> Antes de la transformación
    .pipe(map(paises=>[...new Set(paises.map(p=>p.region))])); //Observable<string[]>
  }

  //método que devuelve un observable con los países del continente seleccionado
  paisesContinente(continente:string):Observable<Pais[]>{
    return this.http.get<Pais[]>(this.url)
    .pipe(map(paises=>paises.filter(p=>p.region==continente)));
  }
}


