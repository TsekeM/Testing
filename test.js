// This is a comment for 1 line
/*
this 
is 
a 
comment 
for 
many 
lines */

// Variable and data types
let name = "Tseke";     // string
const age = 30; //  number
var isStudent = false; // boolean

// Data types 'undefined', 'null', 'Symbol'

// Operators
// Arithmetic operators "+", "-", "*", "/", "%"
// Assignments operators "=", "+=", "-=", "*=", "/="
// Comparison operators "==", "===", "!=", "!==", ">", "<", ">=", "<="
// Logical operators "&&", "||", "!"

// = Assignment: Assigns the right operand's value to the left operand.
// += Addition assignment: Adds the right operand to the left operand and assigns the result to the left operand.
// -= Subtraction assignment: Subtracts the right operand from the left operand and assigns the result to the left operand.
// *= Multiplication assignment: Multiplies the left operand by the right operand and assigns the result to the left operand.
// /= Division assignment: Divides the left operand by the right operand and assigns the result to the left operand.
// %= Modulus assignment: Divides the left operand by the right operand and assigns the remainder to the left operand.

// Arithmetic operations
let a = 10;
let b = 5;
console.log(a + b);     // 15
console.log(a - b);     // 5
console.log(a * b);     // 50
console.log(a % b);     // 0
console.log(a / b);     // 0
console.log(a++);        // 11
console.log(--a);        // 9

// Assignment operators
let c = 5;
c += 2;     // c = c + 2 becomes 7
c -= 3;     // c = c - 3 becomes 2
c *= 2;     // c = c * 2 becomes 10
c /= 4;     // c = c / 4 becomes 1.25
c %= 5;     // c = c % 5 becomes 1

// String operator 
let greeting = "Hello, " + "world!";        // "Hello, world!"

// Comparison operators

let d = 5, e = "5", f = 10;
console.log(d == e);   // Equal to: true (value match)
console.log(d === e);  // Strict equal to: false (type mismatch)
console.log(d != e);   // Not equal to: false
console.log(d !== e);  // Strict not equal to: true
console.log(d < f);    // Less than: true
console.log(d > f);    // Greater than: false
console.log(d <= 5);   // Less than or equal to: true
console.log(f >= 10);  // Greater than or equal to: true

// Logical operators
let g = true, h = false;

console.log(g && h);  // Logical AND: false
console.log(g || h);  // Logical OR: true
console.log(!g);      // Logical NOT: false

// For loop 
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Functions 
function greet() {
    console.log("Hello you animal!");
}