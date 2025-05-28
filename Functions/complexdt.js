/*
complex data types in javascript are generally represented by objects, arrays, and functions.

Property: A property is a value that belongs to a data type.
            representing an attribute or charactertistic that holds data.
Method: A method is a function that performs a specific action and can access or manipulate the data.

*/

//---------------------------Member of Object------------------------------------

var author = {

    name :"HareKrishna",                                //name is property
    DOB : "May 7, 1800",
    books : ["the Twlight", "The Meg", "The Shark"],   // here name, dob, books, getbookscount are members
    getBooksCount : function(){                         // method function
        // console.log("Total Books are 3");   
        return "Total Books are 3";
    }

};

console.log(author.name);
console.log(author.DOB);
console.log(author.books);
console.log(author.getBooksCount());
//----------------------------------------------------------

const calculator = {

    add: function(a, b){
        return a+b;
    },

    subtract (a, b){
        return a-b;
    }
};
console.log(calculator.add(5, 3));
console.log(calculator.subtract(7, 2));


//--------------------------------members of Array -------------------------------
var IPLTeams = ["CSK", "RRR", "RCB", "SRH"];

// IPLTeams.length       //4; property
// IPLTeams.reverse();    //method



// console.log(IPLTeams.reverse());  //reverse method

console.log(IPLTeams.pop());   //print last one in array when use pop make sure reverse in comment or no need
console.log("latestTeams", IPLTeams);
console.log(IPLTeams.length);
