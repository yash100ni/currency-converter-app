// src/app/converter/converter.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ConverterComponent {
  amount: number = 0;
  convertedAmount: number | null = null;
  conversionRate: number = 83.5; // Example rate for USD to INR conversion

  @Output() conversion = new EventEmitter<{ amount: number; convertedAmount: number }>();

  convert() {
    this.convertedAmount = this.amount * this.conversionRate;
    this.conversion.emit({
      amount: this.amount,
      convertedAmount: this.convertedAmount
    });
  }
}
