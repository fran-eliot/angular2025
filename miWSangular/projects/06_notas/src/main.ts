import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { NotaComponentComponent } from './app/nota-component/nota-component.component';

bootstrapApplication(NotaComponentComponent, appConfig)
  .catch((err) => console.error(err));
