import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PaisesComponent } from '../../14_paises_http/src/app/paises/paises.component';

bootstrapApplication(PaisesComponent, appConfig)
  .catch((err) => console.error(err));
