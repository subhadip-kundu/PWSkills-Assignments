function calculateSimpleInterest(principal, rate, time) {
    const simpleInterest = (principal * rate * time) / 100;
    return simpleInterest;
}

const principalAmount = 1000;
const interestRate = 5;
const timePeriod = 2;

const result = calculateSimpleInterest(principalAmount, interestRate, timePeriod);
console.log(`Simple Interest: $${result.toFixed(2)}`);
