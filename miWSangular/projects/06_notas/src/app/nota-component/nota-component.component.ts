import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nota-component',
  imports: [FormsModule],
  templateUrl: './nota-component.component.html',
  styleUrl: './nota-component.component.css'
})
export class NotaComponentComponent {
  nota:number=0;
  notas:number[]=[];
  media:number=0;
  masAlta:number=0;
  masBaja:number=10;
  totalAprobados:number=0;

  guardar(): void {

    this.notas.push(this.nota);

  }

  calcularMedia(): number {
    let suma = this.notas.reduce((acum, valorActual) => acum + valorActual, 0);
    return suma / this.notas.length;
  }

  calcularAlta():number{
    let max = this.notas[0];
    this.notas.forEach(n=>{
      if(n>max) {
        max=n;
      }
    });
    return max;
  }

  calcularBaja():number{
    let min = this.notas[0];
    this.notas.forEach(n=>{
      if(n<min) {
        min=n;
      }
    });
    return min;
  }

  calcularAprobados():number{
    let total=0;
    this.notas.forEach(n=>{
      if(n>=5){
        total++;
      }
    });
    return total;
  }

  //return this.notas.filter(n=>n>5).length;

  datos():void{
    this.media = this.calcularMedia();
    this.masAlta = this.calcularAlta();
    this.masBaja = this.calcularBaja();
    this.totalAprobados = this.calcularAprobados();
  }


}
