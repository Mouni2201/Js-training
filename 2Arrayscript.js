//Arrays

let ids = [1,2,3,4,5]; //Array of numbers
let names = ["Kushal", "Medhansh", "Sahasra"]; //Array of strings
let mixed =[1, "Kushal", true, null, undefined]; // Array of mixed data types

console.log(ids);
console.log(names);
console.log(mixed);


//i want to print the 1st index of the mixed variable

//mixed variable - array
console.log(mixed[1]);
console.log(names[1]);

//declare the value with variable name
var mixedDetails = mixed[1];

console.log(mixedDetails);


let aboutMoreBooks = [ "Harrypoter", "John", 1, null, undefined, ["Harrypotter", "Ron", "Emily"],
                         {
                             title: "The Waves",
                             Id   : 1,
                         }
];


console.log(aboutMoreBooks);
console.log(aboutMoreBooks[5]);
console.log(aboutMoreBooks[5][0]);
console.log(aboutMoreBooks[6].title);
console.log(aboutMoreBooks[6].Id);

//changing Arrays
const cars = ["BMW", "Skoda", "Volvo"];
cars[0] = "Opel";
console.log(cars);

const weeks = ["sunday", "monday", "saturday"];
weeks[2] = "tuesday";
console.log(weeks);



