// let firstApiAddress = "https://jsonplaceholder.typicode.com/todos/1";  //fake api's

// let secondApiAddress = "https://jsonplaceholder.typicode.com/todos/2";

// let ALLApiAddress = "https://jsonplaceholder.typicode.com/todos/";


// function FirstApi(){
//     return fetch(firstApiAddress);      //promise

// }
// function SecondApi(){
//     return fetch(secondApiAddress);     //promise
    
// }

// function ThirdApi(){
//     return fetch(ALLApiAddress);           //promise
    
// }

// Promise.all([FirstApi(), SecondApi(), ThirdApi()]).then((AllResults)=>{
//     console.log(AllResults);

// })
//--------------------------------------------------------------------------------------------

let firstApiAddress = "https://jsonplaceholder.typicode.com/todos/1";  //fake api's

let secondApiAddress = "https://jsonplaceholder.typicode.com/todos/2";

let ALLApiAddress = "https://jsonplaceholder.typicode.com/todos/";


function FirstApi(){
    return fetch(firstApiAddress);      //promise

}
function SecondApi(){
    return fetch(secondApiAddress);     //promise
    
}

function ThirdApi(){
    return fetch(ALLApiAddress);           //promise
    
}
   
async function allApiResults(){
    let resultofFirstApi = await FirstApi();
    console.log(resultofFirstApi);
    
    let resultofSecondApi = await SecondApi();
    console.log(resultofSecondApi);

    let resultofThirdApi = await ThirdApi();
    console.log(resultofThirdApi);

    console.log("Got info of all APIAddresses");
 }

allApiResults();
//----------------------------------------------------------------------------------------------

// for refernce
// fetch(firstApiAddress).then((result)=>{
//     //console.log(result); // it leads to promise
//     return result.json()
// }).then((data)=>{
//     console.log("first ApiAddress:", data);
// })


// let firstApiAddress = "https://jsonplaceholder.typicode.com/todos/1";  //fake api's

// let secondApiAddress = "https://jsonplaceholder.typicode.com/todos/2";

// let ALLApiAddress = "https://jsonplaceholder.typicode.com/todos/";


// function FirstApiPromise(){
//     return fetch(firstApiAddress);      //promise

// }

// async function getFirstApiResult(){
//     await fetch(firstApiAddress).then((result)=>{
//         return result.json();
//     }).then((actualData)=>{
//         console.log(actualData);
//     });
// }


// function SecondApiPromise(){
//     return fetch(secondApiAddress);      //promise

// }

// async function getsecondApiResult(){
//     await fetch(secondApiAddress).then((result)=>{
//         return result.json();
//     }).then((actualData)=>{
//         console.log(actualData);
//     });
// }


// function ThirdApiPromise(){
//     return fetch(ThirdApiAddress);      //promise

// }

// async function getThirdApiResult(){
//     await fetch(ALLApiAddress).then((result)=>{
//         return result.json();
//     }).then((actualData)=>{
//         console.log(actualData);
//     });
// }
// Promise.all([FirstApiPromise(), SecondApiPromise(), ThirdApiPromise()]).then((AllResults)=>{
//    console.log(AllResults);

// })
//--------------------------------------------------------------------------------------------------
// let firstApiAddress = "https://jsonplaceholder.typicode.com/todos/1";  //fake api's

// let secondApiAddress = "https://jsonplaceholder.typicode.com/todos/2";

// let ALLApiAddress = "https://jsonplaceholder.typicode.com/todos/";


// function FirstApi(){
//     return fetch(firstApiAddress);      //promise

// }
// function SecondApi(){
//     return fetch(secondApiAddress);     //promise
    
// }

// function ThirdApi(){
//     return fetch(ALLApiAddress);           //promise
    
// }

// async function allApiResults(){

//     try{
//     await FirstApi().then((data)=>{
//         return data.json()    //promise

//     }).then((data)=>{
//          console.log(data);
//      });
//  }
//  catch(err){
//      console.log(err);
//  } 
//      await SecondApi().then((data)=>{
//          return data.json()    //promise

//    }).then((data)=>{
//          console.log(data);
//     });


    
//      await ThirdApi().then((data)=>{
//         return data.json()    //promise

//     }).then((data)=>{
//         console.log(data);
//      });

// }
// allApiResults();
