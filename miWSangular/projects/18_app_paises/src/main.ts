import { PaisesComponent } from './app/paises/paises.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

bootstrapApplication(PaisesComponent, appConfig)
  .catch((err) => console.error(err));
