//return type and non -return type functions


function getstates(){
    let stateDetails = "";
    stateDetails = "State :" + "Andhra";
    return stateDetails;
}

console.log(getstates());



// function getBookDetails(bookName){
//     let bookDetails = "";
//     bookDetails = "BookName: " + "The Love";
//     return bookDetails;

// }

// let book = getBookDetails();
// console.log(book);
// document.write(book);

//another way
function getBookDetails(bookName){
    let bookDetails = "";
    bookDetails = "BookName: " + "bookName";
    return bookDetails;

}
let books = getBookDetails("The Love");
console.log(books);
document.write(books);



// function getBookDetails(bookName, authorName){
//     let bookN = "";
//     bookN = "BookName: " + "bookName";

//     let authorN = "";
//     authorN = "AuthorName: " + "authorName";

//     let completeBookDetails = bookN + "," + authorN;

//     return completeBookDetails;

// }
// let bookDetails = getBookDetails("The Love", "Tagore");
// console.log(bookDetails);
// document.write(bookDetails);


//---------------------------------------------------------------------------------------------------

// //return function
// function getStudentDetails(StudentName, Marks) {
//             let studentDetails = ""
//             studentDetails = "Student Name:" + StudentName +  "  " + "Marks:" + Marks
//             return studentDetails;
 
//         }
//         console.log(getStudentDetails("Sravani", '98'));
//         // let getstudentmessage = getStudentDetails("Sravani", '98');
//         // console.log(getstudentmessage);
 
// //return function
// function getMovieDetails(HeroName, HeroineName, Budget){
//     let MovieDetails = "HeroName:" +HeroName + " " + "HeroineName:" +HeroineName;
//     return MovieDetails;
//    // console.log(HeroName)
 
// }
// console.log(getMovieDetails("AlluArjun", "Rashmika", '1000000'));
// //getMovieDetails("AlluArjun", "Rashmika", '1000000');
 
 
 //non-return function
 
 function getMovieDetails(HeroName, HeroineName, Budget){
   let MovieDetails = "HeroName:" + HeroName + " " + "HeroineName:" +HeroineName;
  console.log(MovieDetails)
 
}
getMovieDetails("AlluArjun", "Rashmika", '1000000');


