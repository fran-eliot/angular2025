import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MunicipiosComponent } from './app/municipios/municipios.component';

bootstrapApplication(MunicipiosComponent, appConfig)
  .catch((err) => console.error(err));
