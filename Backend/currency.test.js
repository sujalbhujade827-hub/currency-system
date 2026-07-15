const convertCurrency = require('./currency');
test('should correctly multiply amount by exchange rate', () => {
    expect(convertCurrency(100, 2)).toBe(200);
});
test('should return 0 if amount or rate is missing', () => {
    expect(convertCurrency(0, 83)).toBe(0);
    expect(convertCurrency(100, null)).toBe(0);
});