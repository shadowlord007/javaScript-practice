///////// synchronous ///////////////////




//////// asynchronous //////////////////

// promise


// function walkdog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Walking the dog");
//         }, 2000);
//     });
// }

// function cleankitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Clean the kitchen");
//         }, 2000);
//     });
// }

// function takeouttrash() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("take out the trash");
//         }, 2000);
//     });
// }

// walkdog().then(value => {console.log(value); return cleankitchen()
//          .then(value => {console.log(value); return takeouttrash()
//          .then(value => {console.log(value); console.log("Clear all the tasks")})})});


/////// same but aslso using reject ///////////////

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walkDog = true;
            if (walkDog) {
                resolve("Walking the dog");
            } else {
                reject("Walking the dog failed");
            }
        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanKitchen = true;
            if (cleanKitchen) {
                resolve("Clean the kitchen");
            } else {
                reject("Cleaning the kitchen failed");
            }
            
        }, 2000);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const takeOutTrash = true;
            if (takeOutTrash) {
                resolve("take out the trash");
            } else {
                reject("Taking out the trash failed");
            }
         
        }, 500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()
         .then(value => {console.log(value); return takeOutTrash()
         .then(value => {console.log(value); console.log("Clear all the tasks")})})});