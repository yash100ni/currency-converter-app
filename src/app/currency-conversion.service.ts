import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {

  private rates: { [key: string]: { [key: string]: number } } = {
    'USD': {
      'INR': 82.00,
      'EUR': 0.93
    },
    'INR': {
      'USD': 0.012,
      'EUR': 0.011
    },
    'EUR': {
      'USD': 1.08,
      'INR': 88.50
    }
  };

  convertCurrency(amount: number, fromCurrency: string, toCurrency: string): number | null {
    const rate = this.rates[fromCurrency]?.[toCurrency];
    if (rate === undefined) {
      console.error(`Conversion rate not found for ${fromCurrency} to ${toCurrency}`);
      return null;
    }
    return amount * rate;
  }
}
