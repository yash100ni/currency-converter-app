// src/app/app.config.ts
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ConverterComponent } from './converter/converter.component';
import { ResultComponent } from './result/result.component';

export const AppConfig = {
  declarations: [
    ConverterComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([]) // Add routes if needed
  ],
  providers: [],
  bootstrap: [ConverterComponent] // Or another component if needed
};
