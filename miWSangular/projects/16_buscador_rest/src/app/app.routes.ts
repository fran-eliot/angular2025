import { Routes } from '@angular/router';
import { AltaLibroComponent } from './components/alta-libro/alta-libro.component';
import { BuscarTematicaComponent } from './components/buscar-tematica/buscar-tematica.component';
import { EliminarTematicaComponent } from './components/eliminar-tematica/eliminar-tematica.component';

export const routes: Routes = [
  {path:'agregar',
    component: AltaLibroComponent
  },
  {
    path:'buscar',
    component: BuscarTematicaComponent
  },
  {
    path:'eliminar',
    component: EliminarTematicaComponent
  }
];
