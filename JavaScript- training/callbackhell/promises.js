//resolve, reject are handlers/ parametrs
//new promise devolps asynchronous call

// let myPromise = new Promise((resolve, reject)=>{
//     if(true){
//         resolve("Success Message");
//     }
//     else{
//         reject("Fail Message");
//     }

// })
// myPromise.then((result)=>{
//     console.log(result);

//no need catch when the condition is true
// }).catch((exception)=>{
//     console.log(exception);
// })


let mypromise = new promise((resolve, reject)=>{
 if(true){
        resolve("Success Message");
    }
    else{
        reject("Fail Message");
    }
})

mypromise.then((result)=>{
    console.log(result);
}).catch((exception)=>{
console.log(exception);
})


//---------------------------------------------------------------
// let myPromise = new Promise((resolve, reject)=>{
//     if(false){
//         resolve("Success Message");
//     }
//     else{
//         reject("Fail Message");
//     }

// })
// myPromise.then((result)=>{
//     console.log(result);
// }).catch((exception)=>{
//     console.log(exception);
// })

//-----------------------------------------------------------------------------------------------------------------------



let myPromise = new Promise((resolve, reject)=>{
let success = true;
if(success){
    resolve("Success");
}
else{
    reject("fail");
}

});
myPromise.then((result)=>{
    console.log(result);
}).catch((exception)=>{
    console.log(exception);
});

//---------------------------------------------------------------------------

//function Promises

function getData(){
    return new Promise((resolve, reject)=>{
        let success = false;
        if(success){
            resolve("Success");
        }
        else{
            reject("Fail");
        }
})
}
getData().then((result)=>{
    console.log(result);
}).catch((exception)=>{
    console.log(exception);
});

//---------------------------------------------------------------------------

//multiple promises

// function getFirstAuthorDetails(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Task completed (4s)");
//             resolve("Tagore")
//         },2000)
//     });
// }
// function getSecondAuthorDetails(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Task completed (4s)");
//             resolve("HArry")
//         },5000)
//     });
// }
// getFirstAuthorDetails().then((result)=>{
//     console.log(result);
//     return getSecondAuthorDetails();
// }).then((getSecondAuthorDetails)=>{
//     console.log(getSecondAuthorDetails);
// })
// getFirstAuthorDetails().then((result)=>{
//     console.log(result);
//     return getSecondAuthorDetails();
// }).then((result)=>{
//     console.log(result);
// })
//-------------------------------------------------------------------------------------------------
function getFirstAuthorDetails(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Task completed (2s)");
            resolve("Tagore")
        },2000)
    });
}
function getSecondAuthorDetails(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Task (5s)");
            resolve("Success")
        },5000)
    });
}

function getThirdAuthorDetails(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("completed in (8s)")
            resolve("Harry")
        },8000)
    });
}
console.time("TimeStarts");
// getFirstAuthorDetails().then((result)=>{
//     console.log(result);
//     return getSecondAuthorDetails();
// }).then((getSecondAuthorDetails)=>{
//     console.log(getSecondAuthorDetails);
//     return getThirdAuthorDetails();
// }).then((getThirdAuthorDetails)=>{
//     console.log(getThirdAuthorDetails);
//     console.timeEnd("TimeStarts");
// })

// getFirstAuthorDetails().then((result)=>{
//     console.log(result);
//     return getSecondAuthorDetails();
// }).then((result)=>{
//     console.log(result);
//     return getThirdAuthorDetails();
// }).then((result)=>{
//     console.log(result);
// })

Promise.all([getFirstAuthorDetails(), getSecondAuthorDetails(), getThirdAuthorDetails()]).then((result)=>{
    console.log(result);
    console.timeEnd("TimeStarts");
})

//----------------------------------------------------------------------------
