// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConverterComponent } from './converter/converter.component';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Currency Converter (USD to INR)</h1>
    <app-converter (conversion)="updateConversion($event)"></app-converter>
    <app-result [amount]="amount" [convertedAmount]="convertedAmount"></app-result>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule, ConverterComponent, ResultComponent]
})
export class AppComponent {
  amount: number | null = null;
  convertedAmount: number | null = null;

  updateConversion(event: { amount: number; convertedAmount: number }) {
    this.amount = event.amount;
    this.convertedAmount = event.convertedAmount;
  }
}
