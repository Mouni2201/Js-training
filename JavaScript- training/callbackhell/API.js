
let firstApiAddress = "https://jsonplaceholder.typicode.com/todos/1";

let secondApiAddress = "https://jsonplaceholder.typicode.com/todos/2";

let ALLApiAddress = "https://jsonplaceholder.typicode.com/todos/";


fetch(firstApiAddress).then((result)=>{
    //console.log(result); // it leads to promise
    return result.json()
}).then((data)=>{
    console.log("first ApiAddress:", data);
})

fetch(secondApiAddress).then((result)=>{
    return result.json()
}).then((data)=>{
    console.log("second ApiAddress:", data);
})

fetch(ALLApiAddress).then((result)=>{
    return result.json()
}).then((data)=>{
    console.log("ALL ApiAddress:", data);
})


