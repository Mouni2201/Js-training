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


//non - return type



