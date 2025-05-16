import { Component } from '@angular/core';
import { Municipio } from '../model/Municipio';
import { Provincia } from '../model/Provincia';
import { MunicipioService } from '../service/municipio.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-municipios',
  imports: [CommonModule,FormsModule],
  templateUrl: './municipios.component.html',
  styleUrl: './municipios.component.css'
})
export class MunicipiosComponent {
  municipiosProvincia:Municipio[]=[];
  provincias:Provincia[]=[];
  provinciaSeleccionada:number;


  constructor(private municipioService:MunicipioService){
    this.municipioService.obtenerProvincias().
    subscribe(resultado=>this.provincias=resultado);
  }

  cargarMunicipiosProvincia():void{

    this.municipioService.municipiosProvincia(this.provinciaSeleccionada)
    .subscribe(resultado=>this.municipiosProvincia=resultado);

  }


}
