const EXCHANGE_RATES = {
    "EUR": 0.87,  // 1 USD = 0.87 Euros
    "GBP": 0.75,  // 1 USD = 0.75 British Pounds
    "INR": 95.45  // 1 USD = 95.45 Indian Rupees
};
function convertCurrency(amount, targetCurrency) {
    if (typeof amount !== 'number' || amount <= 0) {
        return "Invalid amount";
    }
    const currency = targetCurrency.toUpperCase();
    if (!EXCHANGE_RATES[currency]) {
        return "Unsupported currency";
    }
    const rate = EXCHANGE_RATES[currency];
    const finalResult = amount * rate;

    return finalResult;
}
module.exports = { convertCurrency };