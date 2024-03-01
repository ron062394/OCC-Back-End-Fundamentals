const step1 = (callback) => {
    setTimeout(() => {
        console.log("Step 1 is complete.");
        callback()
    }, 5000);
}

const step2 = (callback) => {
    setTimeout(() => {
        console.log("Step 2 is complete.");
        callback()
    }, 5000);
}


const step3 = () => {
    setTimeout(() => {
        console.log("Step 3 is complete.")
    }, 7000);
}


//Nested callbacks
step1(() => {
    step2(() =>{
        step3(); //No need for a callback in here
        console.log("Request is complete and all steps are done!")
    });
});

