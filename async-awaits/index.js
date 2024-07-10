function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walkDog = false;
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

async function doChores(){
    try {

        const walkedDogResult = await walkDog();
        console.log(walkedDogResult);
    
        const cleanedKitchenResult = await cleanKitchen();
        console.log(cleanedKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("You FInished all the task");
    }
    catch (error) {
        console.error(error);
    }
}

doChores();