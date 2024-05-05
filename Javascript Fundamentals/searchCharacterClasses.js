function searchCharacterClasses(str) {
    let digitPattern = /\d/g; // Matches digits
    let uppercasePattern = /[A-Z]/g; // Matches uppercase letters
    let lowercasePattern = /[a-z]/g; // Matches lowercase letters
    let specialCharPattern = /[\W_]/g; // Matches special characters

    let matches = {
        digits: str.match(digitPattern),
        uppercaseLetters: str.match(uppercasePattern),
        lowercaseLetters: str.match(lowercasePattern),
        specialCharacters: str.match(specialCharPattern)
    };

    return matches;
}

// sample string
let sampleString = "Hello123!";

console.log("Digits:", searchCharacterClasses(sampleString).digits);
console.log("Uppercase Letters:", searchCharacterClasses(sampleString).uppercaseLetters);
console.log("Lowercase Letters:", searchCharacterClasses(sampleString).lowercaseLetters);
console.log("Special Characters:", searchCharacterClasses(sampleString).specialCharacters);
