// Simple currency calculator for testing
function convertCurrency(amount, rate) {
    if (!amount || !rate) {
        return 0;
    }
    return amount * rate;
}

module.exports = convertCurrency;
