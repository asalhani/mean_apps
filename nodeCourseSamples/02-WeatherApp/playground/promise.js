var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("it worked...");
        reject("unable to fulfill promise");
    }, 2500);
});

somePromise.then((message) => {
    console.log("succ. ", message);
}, (errorMessage) =>{
    console.log("error ==> ", errorMessage);
});