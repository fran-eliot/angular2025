import { Routes } from '@angular/router';
import { AgregarContactoComponent } from './components/agregar-contacto/agregar-contacto.component';
import { BuscarContactoComponent } from './components/buscar-contacto/buscar-contacto.component';
import { MostrarContactosComponent } from './components/mostrar-contactos/mostrar-contactos.component';

export const routes: Routes = [
  {path:'agregar',
    component: AgregarContactoComponent
  },
  {
    path:'buscar',
    component: BuscarContactoComponent
  },
  {
    path:'mostrar',
    component: MostrarContactosComponent
  }
];
