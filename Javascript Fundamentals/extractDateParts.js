function extractDateParts(regexPattern, inputString) {
    const regex = new RegExp(regexPattern);
    const match = regex.exec(inputString);

    if (!match) {
        console.log("No match found.");
        return;
    }

    const [, day, month, year] = match; // Using array destructuring to extract groups

    console.log("Match found:");
    console.log("Day:", day);
    console.log("Month:", month);
    console.log("Year:", year);
}

// Test the function with different patterns
const inputString = "Today's date is 05-05-2024";
const pattern1 = /(\d{2})-(\d{2})-(\d{4})/; // Matches date in format dd-mm-yyyy
const pattern2 = /(\d{2})\/(\d{2})\/(\d{4})/; // Matches date in format dd/mm/yyyy

console.log("Testing with pattern 1:");
extractDateParts(pattern1, inputString);

console.log("\nTesting with pattern 2:");
extractDateParts(pattern2, inputString);
