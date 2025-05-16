import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provincia } from '../model/Provincia';
import { map, Observable } from 'rxjs';
import { Municipio } from '../model/Municipio';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {
  urlProvincias:string='https://www.el-tiempo.net/api/json/v2/provincias';


  constructor(private http:HttpClient) { }

  obtenerProvincias(): Observable<Provincia[]> {
      return this.http.get<{ provincias: Provincia[] }>(this.urlProvincias) //Observable<any>
          .pipe(map(response => response.provincias)); //Observable<Provincia[]>
  }

  municipiosProvincia(provinciaCodigo: number): Observable<Municipio[]> {
      const url_provincia = `${this.urlProvincias}/${provinciaCodigo}/municipios`;
      return this.http.get<{ municipios: Municipio[] }>(url_provincia)
          .pipe(map(response => response.municipios));
  }

}
