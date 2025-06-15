//Comparison operators
//(==, ===, <, <=, >, >=,!=)


console.log(1==1); //true
console.log(1==2);  //false

let number = 1==1; 
console.log(number); //true


let numbering = 4;
console.log(numbering == 4); //true
console.log(numbering === 4); //true
console.log(numbering > 4); //false
console.log(numbering >= 4); //true
console.log(numbering < 4);  //false
console.log(numbering <=4); //true
console.log(numbering !=4); //false


//Type coercison ( way of converrtig one datatype to another type)

console.log('1' + 1);  //11
console.log("Mounica"+"Chanda");  //mounicachanda
console.log(1 == 1); //true
console.log('1'== 1)  //true
console.log(1 == '1') //its give true 
console.log(1==='1'); // false(when we add === equal to it give false beacuse it identify both number and type)


let name = "Mounica";
if(name == "Mounica"){
    console.log("Hi Iam Mounica");
}
else{
    console.log("This is not a Name");
}

let names = "Mounica";
if(names == "Chanda"){
    console.log("Hi Iam Mounica");
}
else{
    console.log("This is not a Name");
}




let age = "60";
let message = `Hey your age is ${age + 3}`; //603
console.log(message);


console.log('5'+1) //prints 51
console.log('5'-1) // prints 4
//converting string to number
console.log(Number('5')+1) //prints 6
//converting number to string
console.log(String(10)+60) //prints 1060
//converting boolean
console.log(Boolean(0)) // prints false


// let myfirststep = 0;
console.log(Boolean(0)); //false
console.log(Boolean(1)) //true


// null == undefined //true
// null === undefined //false

let authorName = "Rabindranath Tagore";
let lAuthorName = authorName.toLowerCase;
console.log(lAuthorName);

//if you want to replace only one character to upper or lower case
// let name="Java Script"
// console.log(name.replace("J", "j"))




//logical operations

//  Logical AND (&&)
// Operand A	Operand B	    A && B
// true	        true	         true
// true	        false	         false
// false	    true	         false
// false	    false	         false

//  Logical OR (||)
// | Operand A | Operand B | A || B |
// |-----------|-----------|----------|
// | true      | true      | true |
// | true      | false     | true |
// | false     | true      | true |
// | false     | false     | false |


let place = "Aaraku";
let state = "Andhra";

console.log(place == "Aaraku" && state == "Andhra"); //true
console.log(place == "Aaraku" && state == "Odisha"); //false
console.log(place == "Ooty" && state == "Andhra");  //false
console.log(place == "OOty" && state == "Odisha"); //false

if(place == "Aaraku" && state == "Andhra"){
    console.log("Aaraku is best in Andhra")
}
else{
    console.log("Not a place"); //Aaraku is best in Andhra
}
//------------------------------------------------------
if(place == "Aaraku" && state == "Vizag"){
    console.log("Aaraku is best in Andhra")
}
else{
    console.log("Not a place");  //output:Not a place
}

//-------------------------------------------------------

// let place= "Aaraku";
// let district = "Vizag";

// console.log(place == "Aaraku" || state == "Andhra"); //true
// console.log(place == "Aaraku" || state == "Odisha");  //true
// console.log(place == "Ooty" || state == "Andhra");   //true
// console.log(place == "OOty" || state == "Odisha");  //false


// if(place == "Aaraku" || state == "Andhra"){
//     console.log("Aaraku is best in Andhra")
// }
// else{
//     console.log("Not a place");  //Aaraku is best in Andhra
// }
// //---------------------------------------------
// if(place == "Aaraku" || state == "Vizag"){
//     console.log("Aaraku is best in Andhra")
// }
// else{
//     console.log("Not a place");
// }
