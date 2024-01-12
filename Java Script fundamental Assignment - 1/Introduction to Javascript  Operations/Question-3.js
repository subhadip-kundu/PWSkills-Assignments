// 1. Unary Operators:
//    - Act on a single operand.
//    - Examples: `typeof`, `!` (logical NOT), `-` (unary negation), `++` (increment), `--` (decrement).


let x = 5;
console.log(typeof x); // Outputs: "number"

let isTrue = true;
console.log(!isTrue); // Outputs: false

let num = 10;
console.log(-num);   // Outputs: -10
console.log(++num);  // Outputs: 11


// 2. Binary Operators:
//    - Work with two operands.
//    - Examples: Arithmetic (`+`, `-`, `*`, `/`), Comparison (`==`, `!=`, `<`, `>`), Logical (`&&`, `||`), Assignment (`=`, `+=`, `-=`, `*=`, `/=`).


let a = 5, b = 10;
console.log(a + b);  // Outputs: 15
console.log(a * b);  // Outputs: 50
console.log(a === b); // Outputs: false


// 3. Ternary Operator:
//    - The only ternary operator in JavaScript.
//    - Used as a shorthand for an `if-else` statement.
//    - Syntax: `condition ? expressionIfTrue : expressionIfFalse`


let age = 20;
let eligibility = (age >= 18) ? 'Eligible' : 'Not Eligible';
console.log(eligibility);  // Outputs: "Eligible"
