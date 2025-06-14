//function


// let place = function(){
//     console.log("Germany");
// }
// place();


let book = function(){
    console.log("Harry");
}
console.log(book);

//grouping statements
function personDetails(){
var customerAge = 10;
console.log(customerAge);  //statement 1


var car = "skoda";
console.log(car);   //statement 2
}

personDetails(); //function calling




 //optionl parameter

// function cricketerDetails(personName, nickname, favouriteDish, retirementDate){
//    console.log("PersonName:" ,personName);
//     console.log("Nickname:" ,nickname);
//     console.log("FavouriteDish:" ,favouriteDish);
//     //RetirementDate = retirementDate || "no data Defined";
//     console.log("RetirementDate:" ,retirementDate); //undefined
    
// }
// cricketerDetails("MS.Dhoni","Mahi","Butter Chicken");


//default parameter

// function cricketerDetails(personName, nickname, favouriteDish="not mentioned", retirementDate="Data is not avalable"){
//    console.log("PersonName:" ,personName);
//     console.log("Nickname:" ,nickname);
//     console.log("FavouriteDish:" ,favouriteDish);
//     console.log("RetirementDate:" ,retirementDate);

// }
// cricketerDetails("MS.Dhoni","Mahi");



// //rest parameter

// function cricketerDetails(...additionalParams){
//     console.log(additionalParams);

//     console.log("PersonName:" ,additionalParams[0]);
//     console.log("Nickname:" ,additionalParams[1]);
//     console.log("FavouriteDish:" ,additionalParams[2]);
//     console.log("RetirementDate:" ,additionalParams[3]);


// }

// cricketerDetails("MS.Dhoni","Mahi","Butter Chicken", 2025);

// //OR

// function cricketerDetails(personName, nickname, ...additionalParams){
//     console.log(additionalParams);

//     console.log("PersonName:" ,personName);
//     console.log("Nickname:" ,nickname);
//     console.log("FavouriteDish:" ,additionalParams[0]);
//     console.log("RetirementDate:" ,additionalParams[1]);
// }

// cricketerDetails("MS.Dhoni","Mahi","Butter Chicken", 2025);


    

