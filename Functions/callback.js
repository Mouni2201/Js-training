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



function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
