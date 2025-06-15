import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MatriculaComponent } from './app/components/matricula/matricula.component';

bootstrapApplication(MatriculaComponent, appConfig)
  .catch((err) => console.error(err));
