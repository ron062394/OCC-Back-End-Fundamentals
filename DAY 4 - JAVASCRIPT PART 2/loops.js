//Loops - Loops are used to repeatedly execute a block of code until a specific condition is met
//They provide a way to automat code

//For loop
for (let i = 3; i <= 5; i++ ) {
    console.log('For loop:', i)
}


//While loop
let count = 1;
while (count <= 3) {
    console.log('While loop:', count);
    count++;
    console.log('While loop:', count);
}


//do-while loop
let counter = 10;
do {
    console.log('Do while count:', counter);
    counter++;
}while (counter <= 5);