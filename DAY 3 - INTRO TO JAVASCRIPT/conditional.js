//Conditional

//Conditionals: if statement
let age = 17;

if (age >= 18) {
    console.log("You are eligible to vote!")
    console.log("You are eligible to vote!")
} else {
    console.log("You are not eligible to vote!")
}

//if else if-else statement
let temprature = -1;
if (temprature < 0) {
    console.log("It is freezing!");
} else if (temprature >= 0  && temprature < 20) {
    console.log("It's cool outside!");
} else {
    console.log("It's a warm day.");
}



//Conditionals: Switch Statement
let day = 5;

switch (day) {
    case 'Monday':
        console.log("It is the start of the week.");
    break;
    case 'Friday':
        console.log("It is the end of the week.");
    break;
    default:
        console.log("This is an ordinary day.")
    break
}

let sum = (5 + 2) * 3 + 1+6
console.log(sum);