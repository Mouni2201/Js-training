// //for(varibale in object){
// //}

// //bookName->one of property in bookDetails  object|| one of Index i bookDetails object
// //one of Member in bookDetails object


// var person = {
//     name: "Mounica",
//     age: 25,
//     hobbies:["Dancing","Listening Muisc", "Watching TV"],
// }

// for(var detail in person){
//     //console.log(detail);   //it gives detail of iterables(name, age, hobbies will print didn't values)
//     //console.log(`${detail}: ${person[detail]}`);
//     console.log(person[detail]);

//     if(person[detail] == 25);
//     console.log("my age is 25 now")

//    }

// const colors = ["red", "blue", "orange"];
// for(const greet in colors){
//     console.log(greet);
//     console.log(`${greet}: ${colors[greet]}`)

//     if(greet == 2){
//         console.log("print blue");
//     }
// }


// // for(const greet of colors){
// //     console.log(greet);
// //     console.log(`${greet}: ${colors[greet]}`)

// //     if(greet == "blue"){
// //         console.log("print blue");
// //     }
// // }



// var movieDetail = {
//     movieName:"Murari",
//     hero: 'Mahesh Babu',
//     heroine:"sonali Bindre",
//     releaseDate: "17 February 2001",
//     director: "Krishna Vamsi",
//     musicDirector: "Mani Sharma",
//     runningTime: "3 hours",
//     producers: ["N. Devi Prasad", "Ramalingeswara Rao", "Gopi Nandigam"]

// }

// for(var movie in movieDetail){
//     //console.log(movie);  //print here property details only
//     console.log(movieDetail[movie]);

//     if(movieDetail[movie] == "sonali Bindre"){
//         console.log(`My favorite heroine is ${movieDetail[movie]}`);

//     }
    
// }


//nested loop
//here array in object
const users = [
    {name: "Mounica", age: 25 },
     { name: "Sravani", age: 24 }
];

for(const user of users){
    for(const key in user){
        console.log(`${key}: ${user[key]}`);
        if(user[key] == "sravani"){
            console.log("Hi Sravani")
        }
    }
    
}







