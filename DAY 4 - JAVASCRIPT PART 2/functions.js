//Functions - Allows us to write reusable block of codes and also provide ways to organize and structure codes

//Declaring a function
function greet() {
    console.log('Hello to the world of functions!');
}
//Calling a function
greet();


//Function declaration  - Can be hoisted
function functionDeclaration() {
    console.log('Hello! I am a function declaration!');
}
functionDeclaration();



//Function expression - Can not be hoisted
const functionExpression = function() {
    console.log('Hello! I am a function expression!');
}
functionExpression();


//Functions with parameter
function greetme(name) {
    console.log('Hello', name + '!');
}
greetme('Regel');


//Functions with a return value
function sum(a, b) {
    console.log('I am printed before the returned value');
    return a + b; // Return marks the end of the code block
    console.log('I am printed after the returned value'); // Muted  / Unreachable code
}
console.log('The sum of a and b is:', sum(10, 20));

