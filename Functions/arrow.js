// function bookName(){
//     console.log("HarryPotter");

// }bookName();


//arrow Function

let bookName = ()=>{
    console.log("The Rich");

}

bookName();

//normal or named function
// function laptopDetails(laptopName, behaviour, cost){
//     console.log(laptopName);
//     console.log(behaviour);
//     console.log(cost);
// }

let laptopDetails = (laptopName, behaviour, cost)=>{
    console.log(laptopName);
    console.log(behaviour);
    console.log(cost);
}
laptopDetails("Lenova", "Good", 90000);

//Template Literals

// "", '', ``

var age =20;
var showAge = `John age is ${age}`;
console.log(showAge);

// Arrow Return type

let getAuthorDetails = (fullname, DOB, PublishedYear)=>{
    return `fullDetails of Author - ${fullname}, ${DOB}, ${PublishedYear}`;
}
let Author = getAuthorDetails("Tagore", 1957, 2000);
console.log(Author);



let getDayDetails = (day1, day2, day3)=>{
    return `InDay Three times we take food - ${day1}, ${day2}, ${day3}`;

}
getDayDetails("MorningBreakfast", "AfternoonLunch", "NightDinner")
console.log(getDayDetails);


//setTimeOut
//Into the JS prdefined Function
//setTimeout accept 2 parameters 1 is function and 2ns id time in milliseconds

setTimeout(function(){
    console.log("Hello");
},2000);

//arrow
setTimeout(()=>{
    console.log("Hello");
},2000);




function callDetails(callbackfn){
    callbackfn("Hello");

}
callDetails((message)=>{
    console.log(message);
});
