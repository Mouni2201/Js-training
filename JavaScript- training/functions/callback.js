//callback function

//add anonymous function as argument

// function chocolate(){

// }chocolate();     //normal function in this function add anonymous function


// function sayHello(callbackfn){             //given parameter
//  callbackfn(10,20);                      //method signature

// }sayHello(function(a,b){  //added anonymous function as argument
//     console.log("Hello")
//     console.log(a);
//     console.log(b);
// });

// setTimeout(function(){
//     console.log("Hiii");
// },2000);                    //predefined Function


// //own fucntion
// function printMessage(messagefn){
//  messagefn();
// }
// printMessage(function(){
//     console.log("Namaste");
// });



// function printMessage(messagefn){
//  messagefn("HelloWorld");
// }
// printMessage(function(p1){
//     console.log(p1);
// });




function sayHello(messagenfn){
    messagenfn(10,20);

}
sayHello(function(a,b){
    console.log("HIII");
    console.log(a);
    console.log(b);

});


function sayHello(callbackfn){
  callbackfn()

}
sayHello(function(){
  console.log("Hi");
})



// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data received");
//   }, 1000);
// }

// fetchData((data) => {
//   console.log(data);
// });


function fetchData(callback){
  console.log("fetching Data");

setTimeout(()=>{
  console.log("Data Recieved");
  callback();
  
}, 2000);
}

function processData(){
  console.log("Processing Data");
}
fetchData(processData);



function greet(name, callback){
  console.log("Hello" , name);
  callback();
}
function sayGoodBye(){
  console.log("GoodBye!!");
}
greet("Mounica", sayGoodBye);



//predefined function as callback function
//------------------------------------------------------------------------------------
// function myName(){
//   console.log("My name is Sravani")
// }
// myName();
 
// setTimeout(myName, 5000)   //executes myName() funciton after 5000ms
//setTimeout is the built in function in JS.
 
 
 
//simple call back function withut parameters
//------------------------------------------------------------------------------------
// function setmyName(callbackfn){
//   callbackfn();
 
// }
// function myName(){
//   console.log("My Name is Sravani and my favourite food is Biryani")
// }
// setmyName(myName) // here we passed a named function as an argument to setmyName
 
//call back function by passing  anonymous function as an argument withput parameters
//------------------------------------------------------------------------------------
 
// function setmyName(callbackfn){
//   callbackfn();
 
// }
// setmyName(function myName(){
//   console.log("My favourite player is MS Dhoni")
// })
 
//call back function by passing arrow function as an argument withput parameters
//------------------------------------------------------------------------------------
// function setmyName(callbackfn){
//   //callbackfn();
//   setTimeout(callbackfn, 5000);
 
// }
// setmyName(() => {
//   console.log("I am learning JavaScript")
// })
 
//callback function by passing argumnets to the callback function
//------------------------------------------------------------------------------------
// function MovieDetails(callbackfn){
//   callbackfn("Godavari", "Seetharamam", "Khaleja");
 
// }
// MovieDetails((Movie1, Movie2, Movie3) => {
//   console.log(`My favourite Movie among the three is ${Movie1}`);
//   console.log(`${Movie2} is the debut film for Mrunal Thakur`);
//   console.log(`The re-release of ${Movie3} got better response than it's previous release`)
// })
//------------------------------------------------------------------------------------
 
 
//callback function having two parameters
// function getEmployeeDetails(EmployeeName, callbackfn){
//   callbackfn(EmployeeName, "Mounica", "Hari");
 
// }
// getEmployeeDetails("Sravani", (Employee1, Employee2) => {
//   console.log(`${Employee1} is very dedicated towards work`)
//   console.log(`I will reach out to ${Employee2} for the issue related details`)
// })
 