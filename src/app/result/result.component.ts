// src/app/result/result.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ResultComponent {
  @Input() amount: number | null = null;
  @Input() convertedAmount: number | null = null;
}
