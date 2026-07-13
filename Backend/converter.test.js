const { convertCurrency } = require('./converter');
test('should convert 100 USD to INR correctly', () => {
    const result = convertCurrency(100, 'INR');
    expect(result).toBe(9545); 
});
test('should handle lowercase currency codes automatically', () => {
    const result = convertCurrency(10, 'eur');
    expect(result).toBe(8.7);
});
test('should reject negative amounts', () => {
    const result = convertCurrency(-50, 'GBP');
    expect(result).toBe("Invalid amount");
});