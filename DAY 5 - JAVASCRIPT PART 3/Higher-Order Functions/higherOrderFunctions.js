function higherOrderFunction(callback) {
    console.log('This is the higher-order function speaking.');
    callback();
}

function passedFunction() {
    console.log('This is the passed function being called');
}

higherOrderFunction(passedFunction);