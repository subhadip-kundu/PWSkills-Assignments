function calculateTax() {
    const taxRates = [
        { range: 10000, rate: 0.1 },
        { range: 30000, rate: 0.15 },
        { range: 60000, rate: 0.2 },
        { range: Infinity, rate: 0.25 }
    ];

    return function (income) {
        const applicableRate = taxRates.find(function (rate) {
            return income <= rate.range;
        });

        if (applicableRate) {
            return income * applicableRate.rate;
        } else {
            console.error("Invalid income or unexpected case.");
            return null;
        }
    };
}

const taxCalculator = calculateTax();

console.log("Tax for $5000 income:", taxCalculator(5000));
console.log("Tax for $15000 income:", taxCalculator(15000));
console.log("Tax for $35000 income:", taxCalculator(35000));
console.log("Tax for $60000 income:", taxCalculator(60000));
