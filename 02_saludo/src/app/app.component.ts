import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data:any;
  // title = '02_saludo';
  mensaje():void{
    let caja:HTMLInputElement=document.getElementById("nombre");
  }
}
