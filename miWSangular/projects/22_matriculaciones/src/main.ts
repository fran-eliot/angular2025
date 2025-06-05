import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MatriculacionesComponent } from './app/components/matriculaciones/matriculaciones.component';

bootstrapApplication(MatriculacionesComponent, appConfig)
  .catch((err) => console.error(err));
