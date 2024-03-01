//Topic: Introduction to Arrays

// Creating an array
// characters = [ 0, 1, 2, 3, 4];
let characters = ['pippin', 'goku', 'layla', 'morgana', 'aang'];

//Accessing array elements
console.log('Character 1:', characters[0]);
console.log('Character 5:', characters[4]);
console.log('The last character:', characters[characters.length -1]);

// Modifying array elements
characters.push('sasuke');
characters.pop();
characters[0] = 'crybaby';
console.log('Modified Array: ', characters);

// Array Iteration
for(let i = 0; i < characters.length; i++) {
    console.log('Character ', i+1, characters[i]);
}

characters.forEach(function(character) {
    console.log(character)
})


//Array Built-in Methods
// indexOf
console.log(characters.indexOf('layla'));

// includes
console.log('Includes a value: ', characters.includes('sasuke'));

// join
console.log('Joined array: ', characters.join(' - '));

// slice
let slicedArray = characters.slice(1, 4);
console.log('Sliced array: ', slicedArray)

// splice
let removedElements = characters.splice(0, 2);
console.log('Removed elements: ', removedElements);
console.log('Updated Array: ', characters);