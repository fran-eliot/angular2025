import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  num1:number;
  num2:number;
  resultado:string;
  sumar():void{
    let suma:number=this.num1+this.num2;
    this.resultado=`La suma es: ${suma}`;
  }
  multiplicar():void{
    let multi:number=this.num1*this.num2;
    this.resultado=`La multiplicación es: ${multi}`;
  }

};
