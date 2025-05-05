import { Component } from '@angular/core';
import { CalculadoraService } from '../service/CalculadoraService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule,CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  num1:number;
  num2:number;
  resultado:string;

  calService:CalculadoraService;

  constructor(){
    this.calService = new CalculadoraService();
  }

  sumar():void{
    this.resultado=`La suma es ${this.calService.sumar(this.num1,this.num2)}`;
  }

  multiplicar():void{
    this.resultado=`La multiplicación es ${this.calService.multiplicar(this.num1,this.num2)}`;
  }

}
