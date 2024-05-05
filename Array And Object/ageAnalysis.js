const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Step 1: Sort the array
ages.sort((a, b) => a - b);

// Step 2: Find min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Step 3: Find median age
const middleIndex = Math.floor(ages.length / 2);
let medianAge;
if (ages.length % 2 === 0) {
    medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
    medianAge = ages[middleIndex];
}

// Step 4: Find average age
const sum = ages.reduce((acc, curr) => acc + curr, 0);
const averageAge = sum / ages.length;

// Step 5: Find range of ages
const range = maxAge - minAge;

// Step 6: Compare (min - average) and (max - average)
const minAverageDiff = Math.abs(minAge - averageAge);
const maxAverageDiff = Math.abs(maxAge - averageAge);

console.log("Sorted Ages:", ages);
console.log("Minimum Age:", minAge);
console.log("Maximum Age:", maxAge);
console.log("Median Age:", medianAge);
console.log("Average Age:", averageAge);
console.log("Range of Ages:", range);
console.log("Difference between Min and Average:", minAverageDiff);
console.log("Difference between Max and Average:", maxAverageDiff);
