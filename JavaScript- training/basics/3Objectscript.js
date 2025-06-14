//objects
let sportsPerson = {
    Name : "Virat",
    Age : 40,
    Occupation : "Cricketer",
    BirthYear : 1985,
    Birthplac : "Delhi",
    CricketMatchYear : [1999, 2005, 2011, 2019, 2020, 2025],
    Hobbies : ["playing", "reading", "eating"],
    Address : {
        city : "Gurgan",
        State : "Delhi",
        Country : "India"
    }

}

console.log(sportsPerson);
console.log(sportsPerson.Occupation);
console.log(sportsPerson.CricketMatchYear[0]);
console.log(sportsPerson.Address.city);
console.log(sportsPerson["Hobbies"]);
console.log(sportsPerson["Hobbies"][2]);
console.log(sportsPerson["Address"].State);


//array of Object

let places = [
{
    city : "Hyderabad",
    Weather : "hot",
    NameAs: "smart city",
},

{
    city : "Banglore",
    Weather : "cool",
    NameAs : "Silicon city",

},

]

console.log(places);
console.log(places[0]);
console.log(places[0].NameAs);
console.log(places[1].Weather);



