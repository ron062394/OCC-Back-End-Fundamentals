// Arrow Functions

const greet = (name) => {
    console.log(name);
}

greet("Ron");

const square = (a) => a * a;
console.log(square(4));

// Spread and Rest Operators

// Rest Operator
function restOperator(first, ...restOfArgs) {
    console.log(first);
    console.log(restOfArgs);
}

restOperator('one', 'two', 'three', 'four', 'five');

// Spread Operator
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

// Common Built-in Methods

// Array
// Filter

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = nums.filter((num) => num % 2 == 0);
console.log(even)

const odd = nums.filter((num) => num % 2 != 0);
console.log(odd);

// String

// Split
const message = "Hello, world!";
const words = message.split(", ")

console.log(words);

// Includes 
const sentence = "The quick brown fox jumps over the lazy dog.";
const containsWord = sentence.includes("fox");

console.log(containsWord);

// length
const str = "Welcome to Modern JS Features!";
console.log(str.length);

// to lowercase and to uppercase
let string = "HELLO world";
console.log(string.toLowerCase());
console.log(string.toUpperCase());

// trim
let str2 = "   I love JavaScript!   ";
console.log(str2.trim());

// Math
// max and min
const maxNumber = Math.max(10, 5, 20);
console.log(maxNumber);

const minNumber = Math.min(10, 5, 20);
console.log(minNumber);

// round
console.log(Math.round(3.6));

// floor
console.log(Math.floor(3.9));

// ceil
console.log(Math.ceil(3.1));

// random
console.log(Math.random());

// nested math methods
console.log(Math.floor(Math.random() * 100));

// Other
// to fixed
const price = 40.2567.toFixed(2);
console.log(price);

// date
const currentDate = new Date();
console.log(currentDate)

const christmas = new Date(2024, 11, 25)
console.log(christmas)