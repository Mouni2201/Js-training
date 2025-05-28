//this

//Global context

// console.log(this);  //window

// var IPLTeams =["RCB", "CSK", "SRH"];
// var names = ["Kohli", "Dhoni", "Niteesh" ];
// console.log(this);

// var getTeamNames = function(){
//     return names;
// }

//if we use this instead of var in above example, the output comes same.
// this.IPLTeams =["RCB", "CSK", "SRH"];
// this.names = ["Kohli", "Dhoni", "Niteesh" ];
// console.log(this);

// this.getTeamNames = function(){
//     return names;
// }
// // let awardwinning = ["IPLTrophy2025", "IPLTrophy2023", "NO"]  //let is not a global variable, it is block

// var wardwinning = ["IPLTrophy2025", "IPLTrophy2023", "NO"]; // var is a global
//-----------------------object context--------------------------------------


// var movies = {
//     Name : "RRR",
//     Director : "SSRajamouli",
//     awrads : "Ascar",
//     releaseDate : "March 24, 2022",
//     getmovieDetails : function(){
//         console.log(this);
//         console.log(this.awrads);
//         console.log(this.releaseDate);
//     }

// }
// movies.getmovieDetails();   //awards, releasedate output

// //---------------------
// // the awards members gives outside of the Object, how it will work
// var awards = "Ascar";  //now awards is global

// var movies = {
//     Name : "RRR",
//     Director : "SSRajamouli",
    
//     releaseDate : "March 24, 2022",
//     getmovieDetails : function(){
//         console.log(this);
//         console.log(this.awrads);   //undefined beacuse the awards is in global context not inside of object
//         console.log(this.releaseDate);
//     }

// };
// movies.getmovieDetails();


//-------------------------------constructor function--------------------------------
//when used in constructor function, this refers to the new object being created

// function collegueName(){
//     console.log(this);
// }
// collegueName(); //window browser

// function collegueName(){
//     console.log(this);
// }
// new collegueName();   //new function object created when you add new
 

// function PersonDetails(personName, personAge){

//     this.name = "personName";
//     this.age =  "personAge";
//     this.State = "AndhraPradesh";
//     console.log(this);

// }
// new PersonDetails("Sravani", 24);


//----------------------------------Arrow Function------------------------------

//dont have own this, they inherit the parent scope 
 

// var movies = {
//     Name : "RRR",
//     Director : "SSRajamouli",
//     awrads : "Ascar",
//     releaseDate : "March 24, 2022",
//     getmovieDetails : ()=>{
//         console.log("this", this);
//         console.log(this.awrads); // undefined
//         console.log(this.releaseDate); //undefined beacuse in arrow function the scope is refers global context

//     }

// }
// movies.getmovieDetails();


// var awrads = "Ascar";
//  var releaseDate = "March 24, 2022";

// var movies = {
//     Name : "RRR",
//     Director : "SSRajamouli",
//     awrads : "Ascar",
//     releaseDate : "March 24, 2022",
//     getmovieDetails : ()=>{
//         console.log("this:", this);
//         console.log("Awards:" , this.awrads); //here get output the data from global context
//         console.log("releaseDate:", this.releaseDate); //here get output the datas from global context
//     }

// }
// movies.getmovieDetails();

