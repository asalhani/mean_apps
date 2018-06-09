var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            }
            else {
                reject("argus. should be numbers")
            }
        }, 1500);
    });
};

asyncAdd(1, "2").then((result) => {
    console.log("success: ", result);
    return asyncAdd(result, 10);
}).then((result)=>{
    console.log("2nd result: ", result);
}).catch((errorMessage) =>{
    console.log(errorMessage);
});
// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("it worked...");
//         reject("unable to fulfill promise");
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log("succ. ", message);
// }, (errorMessage) =>{
//     console.log("error ==> ", errorMessage);
// });