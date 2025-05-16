import { Injectable } from '@angular/core';
import { Contacto } from '../model/Conctacto';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  arrayContactos:Contacto[]=[];

  validar(email:string):boolean{
    return this.arrayContactos.some(c=>c.email==email);
  }

  agregar(c:Contacto):boolean{
    if (!this.validar(c.email)){
      this.arrayContactos.push(c);
      return true;
    }
    else{
      return false;
    }
  }

  buscar(email:string):Contacto|undefined{
    return this.arrayContactos.find(c => c.email === email);
  }

  borrar(posicion:number){
    this.arrayContactos.splice(posicion,1);
  }

  mostrar():Contacto[]{
    return this.arrayContactos;
  }

}
