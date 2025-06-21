// function getData(){
//     return "I hava a knowledge on Linux";
// }
// let bascic = getData();
// console.log(bascic);      // I hava a knowledge on Linux


//async keyword

// async function getData(){
//     return "I hava a knowledge on Linux";
// }
// let bascics = getData();
// console.log(bascics);           // it will return promise
// //---------------------------------------------------------------

// async function season(){
//     return "Winter";
// }
// let seasonPromise = season();
// seasonPromise.then((result)=>{
//     console.log(result);                      //winter
// })

//----------------------------------------------------------------------

// async function getauthorDetails(){
//     return "Tagore";
// }
// getauthorDetails().then((data)=>{
//     console.log("The Author of Geethanjali book is", data);
// })

// The Author of Geethanjali book is Tagore

//---------------------------------------------------------------------

//real promise

// async function getauthorDetails(){
//  return new Promise((resolve)=>{
//     resolve("Tagore");
//  })
// }
// getauthorDetails().then((data)=>{
//     console.log("The Author of Geethanjali book is",data);
// })
// //-----------------------------------------------------------------------------

// async function IPLSeasonDetails(){
//    return new Promise((resolve, reject)=>{
//     let Captain;
//     if(Captain){
//         resolve("Sachin Tendulkar");
//     }

//     else{
//         reject("some error occurred");
//     }
//    })
// }

// IPLSeasonDetails().then((response)=>{
//     console.log("The Captain of MumbaiIndains is", response);
// }).catch((error)=>{
//     console.log(error);
//     document.write(error);
// })

///-------------------------------------------------------------------

// function IPLSeasonDetails(){
//    return new Promise((resolve, reject)=>{
//     console.log("Please wait 8 seconds");
//     setTimeout(()=>{
//         resolve("The captain of RCB is Kohli");
//         //console.log("RCB");
//     }, 8000);
// })
// }
// async function IPLSeasonDetails2023(){
//     console.log("Dhone is the captain of CSK");
//     console.log("Gill is the captain of GT");
//     //  await IPLSeasonDetails().then((result)=>{
//     //      console.log(result);
//     // });

//     let Details = await IPLSeasonDetails();
//     console.log(Details);
    
//     console.log("Get all info");
// }
// IPLSeasonDetails2023();

//==================================================================================

function movieRRRDetails(){
    return new Promise((resolve)=>{
        console.log("please wait 5 seconds");
        setTimeout(() => {
            resolve("The director of RRR Movie is SS.Rajamouli");
        }, 5000);
    })
}

function movieKalkiDetails(){
    return new Promise((resolve)=>{
        console.log("please wait 10 seconds");
        setTimeout(() => {
            resolve("The director of RRR Movie is NagAswin");
        }, 10000);
    })
}

async function movieDetails(){
    console.log("The RRR movie song get Oscar Award");
    console.log("The kalki movie has part2");

    let RRRDetails = await movieRRRDetails();
    console.log(RRRDetails);

    let KalkiDetails = await movieKalkiDetails();
    console.log(KalkiDetails);

    console.log("Received all the info for latest movies");
}

movieDetails().then((result)=>{
    console.log(result);  //it gives undefined
})
movieDetails();

// //------------------------------------------------------------------------------

// // function movieRRRDetails(){
// //     return new Promise((resolve)=>{
// //         console.log("please wait 5 seconds");
// //         setTimeout(() => {
// //             resolve("The director of RRR Movie is SS.Rajamouli");
// //         }, 5000);
// //     })
// // }

// // function movieKalkiDetails(){
// //     return new Promise((resolve)=>{
// //         console.log("please wait 10 seconds");
// //         setTimeout(() => {
// //             resolve("The director of RRR Movie is NagAswin");
// //         }, 10000);
// //     })
// // }

// // async function movieDetails(){
// //     console.log("The RRR movie song get Oscar Award");
// //     console.log("The kalki movie has part2");
// //     console.time("Time start")
// //     let RRRDetails = await movieRRRDetails();
// //     console.log(RRRDetails);

// //     let KalkiDetails = await movieKalkiDetails();
// //     console.log(KalkiDetails);

// //     console.log("Received the info for latest movies");
// //     console.timeEnd("Time start")

// //     return 'I got all the info from Sravani';
// // }
// // //here i gave at last return statement the movie details function goes to async function and the return comes the result.
// // movieDetails().then((result)=>{
// //     console.log(result);  
// // })

// //------------------------------------------------------------------------------------------







