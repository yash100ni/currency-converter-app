// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
