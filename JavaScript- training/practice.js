//****************Console*******************
console.log(10);
document.write(10);
//document.alert(10);


// three keywords(var,let,const)
//var: redeclared and reassigned

var age = 10;
var age = 20; 
console.log(age);

//let: reassigned but can't redecalred

let place = "ooty";
    place = "Hyderabad";
    console.log(place);

//const: can't declared and reassigned

const season = "winter";
console.log(season);

 //*******************primitive datatypes******************************
 //number
 let pivalue = 3.14
 console.log(pivalue);

 let noofItems = 1200;
 console.log(noofItems);
 console.log(`I have ${noofItems} rupees`);

 //string

 let firstname ="Mounica"
let surname = "Chanda"
let fullname = firstname +" "+ surname;
console.log(fullname);
console.log(`My name is ${fullname}`);

//boolean
const isadminaccess = true;
const isequalto = false;
console.log(isequalto);

//undefined
let name;
console.log(name);

//null
let bank = null;
console.log(bank);

//symbol
// let sym1 = Symbol("Mounica");
// console.lof(sym1);

//***********************Non Primitive datatypes *****************
//Array

var places = ["ooty", "Kodikanal", "Aaraku"];
console.log(places);
console.log(places[0]);
console.log(places[2]);

//object in array

let bookDetails = ["HarryPotter", 1, null, true, undefined, ["John", "Hasin"],
{
    id : 456789,
    customerNumber: 234567891,
}
];
console.log(bookDetails[0]);
console.log(bookDetails[5][0]);
console.log(bookDetails[5][1]);
console.log(bookDetails[6].id);
console.log(bookDetails[6]["customerNumber"]);


//object

let personDetails = {
    "name": "mounica",
    customerId: "11727414",
    place: "Kadapa",
    state: "Andhra Pradesh"
}
console.log(personDetails);
console.log(personDetails.name);
console.log(personDetails["place"]);

//array of objects
let personalDetails = {
    "name": "mounica",
    customerId: "11727414",
    place: "Kadapa",
    state: "Andhra Pradesh",
    sons:["Kushal", "Medhansh"]
}
console.log(personalDetails);
console.log(personalDetails.name);
console.log(personalDetails["place"]);
console.log(personalDetails["sons"][0]);
console.log(personalDetails.sons[1]);

//collections of objects

let cars = [
    {
        carName: "BMW",
        Yearlaunch: 2022,
        color: "black",
    },
    {
        carName: "Toyato",
        yearlaunch:2021,
        color:"silver",

    },
    {
        carName: "skoda",
        yearlaunch:2020,
        color:"thick blue",
    }
]



