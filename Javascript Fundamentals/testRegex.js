function testRegex(pattern, str) {
    var regex = new RegExp(pattern);
    return regex.test(str);
}

// Testing the function with various patterns and strings
console.log(testRegex(/\d+/, "123")); // Should return true (matches digits)
console.log(testRegex(/\d+/, "abc")); // Should return false (no digits)
console.log(testRegex(/[aeiou]/, "hello")); // Should return true (matches vowel)
console.log(testRegex(/[aeiou]/, "world")); // Should return false (no vowels)
