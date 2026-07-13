import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.config';

describe('Converter Application Tests', () => {
  
  // Test 1: Normal math validation
  it('should convert 100 USD to INR correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    app.convertCurrency(100, 'INR');
    expect(app.result).toBe(8350);
  });
// test 2:handling validation
  it('should catch negative amounts gracefully', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    app.convertCurrency(-25, 'EUR');
    expect(app.result).toBe('Invalid amount');
  });
});