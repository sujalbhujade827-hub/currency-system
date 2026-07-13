import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
export class AppComponent {

  exchangeRates: { [key: string]: number } = {
    'EUR': 0.92,
    'GBP': 0.78,
    'INR': 83.50
  };
  result: number | string = 0;
  convertCurrency(amount: number, targetCurrency: string) {
    if (amount <= 0) {
      this.result = 'Invalid amount';
      return;
    }
    const currency = targetCurrency.toUpperCase();
    if (!this.exchangeRates[currency]) {
      this.result = 'Unsupported currency';
      return;
    }
    this.result = amount * this.exchangeRates[currency];
  }
}