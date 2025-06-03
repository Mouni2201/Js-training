//How to handle Errors

//compile and runtime errors

//cons bankName = "HDFC"; //compile time error

// const place = "Aarku";
//       place = "Ooty";  // we get error here i.e., runtime error
//here const can't be reassigned.


//let userName;
//let userNameinUppercase = userName.toUpperCase(); //error in runtime

//how to handle runtime errors by using exception handling
//try, catch, finally



// const bankName = "HDFC Bank";

// try{
//       bankName = bankName.toUpperCase();
// }
// catch(ex){
//     console.log(ex.message);  //for exact message give .message after ex

// }
// finally{
//     console.log("Task Completed");
// }
// console.log(`Welcome to the ${bankName}`);
// //this will cause a typeerror because const variable cannot be reassigned


// let transcations = ["Creditcard", "Debitcard", "Savings"];
// console.log(`Number of transcations: ${transcations.length}`);


//to avoid errors
// let bankName = "HDFC Bank";  //to avoid error give let(if you didn't give bank name here it trow error);


// try{
//       bankName = bankName.toUpperCase();
// }
// catch(ex){
//     console.log(ex.message);  //for exact message give .message after ex

// }
// finally{
//     console.log("Task Completed");
// }
// console.log(`Welcome to the ${bankName}`);
// //this will cause a typeerror because const variable cannot be reassigned


// let transcations = ["Creditcard", "Debitcard", "Savings"];
// console.log(`Number of transcations: ${transcations.length}`);

//-----------------------------------------------------------


//Throw new error

// try{
// let bankName = "HDFC Bank";


//       bankName = bankName.toUpperCase();
//       throw new Error("server is down"); // if you want to new type of message use threo new error

//       console.log(`Welcome to the ${bankName}`);
// //this will cause a typeerror because const variable cannot be reassigned

// }
// catch(ex){
//     console.log(ex.message);  //for exact message give .message after ex

// }
// finally{
//     console.log("Task Completed");
// }


// let transcations = ["Creditcard", "Debitcard", "Savings"];
// console.log(`Number of transcations: ${transcations.length}`);


//-------------------------------------------------------

try {
    // let bankName;   //server is down
    let bankName = "hdfc bank";  // welcome to HDFC BANK
    if (bankName) {
        bankName = bankName.toUpperCase();
        console.log(`Welcome to the ${bankName}`);
        //this will cause a typeerror because const variable cannot be reassigned
    }
    else {
        throw new Error("server is down"); // if you want to new type of message use threo new error

    }
}
catch (ex) {
    console.log(ex.message);  //for exact message give .message after ex

}
finally {
    console.log("Task Completed");
}


let transcations = ["Creditcard", "Debitcard", "Savings"];
console.log(`Number of transcations: ${transcations.length}`);



