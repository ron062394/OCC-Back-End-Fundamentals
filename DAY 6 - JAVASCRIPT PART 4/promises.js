//Promises
const step1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 is complete.")
            resolve();
        }, 5000);
    });
};


const step2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 2 is complete.")
            resolve();
        }, 6000); 
    });
};

const step3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Step 3 complete.')
            resolve();
        }, 7000);
    });
}


//Chaining Promises
step1()
    .then(step2)
    .then(step3)
    .then(() => {
        console.log("All steps are complete!")
    })
    .catch((error) => {
        console.error("An error occured:", error)
    });
    