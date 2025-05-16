import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  urlBase:string = 'http://localhost:8000/buscador';

  constructor(private http:HttpClient) { }

  buscar(tematica:string):Observable<Book[]>{
     const url_busqueda:string = `${this.urlBase}/buscar?tematica=${tematica}`;
     return this.http.get<Book[]>(url_busqueda);
  }

  alta(libro:Book):Observable<void>{
    const url_alta:string = `${this.urlBase}/alta`;
    let head = new HttpHeaders();
    head.set('Content-type','application/json');
    return this.http.post<void>(url_alta, libro,{headers:head});
  }

  eliminar(tematica:string):Observable<Book[]>{
    const url_eliminar:string =`${this.urlBase}/eliminar?tematica=${tematica}`;
    return this.http.delete<Book[]>(url_eliminar);
  }

}
