//looping mechanism
//for loop 

//for(variable of iterable){
  //code to be executed
//}


//for(variable in object){

//}

// var booksList = [
//     {BookPositioninBox:1 , bookName:"English"},      //0
//     {BookPositioninBox:2 , bookName:"Mathematics"},  //1
//     {BookPositioninBox:3 , bookName:"Physics"},      //2
//     {BookPositioninBox:4 , bookName:"Chemistry"},   //3
//     {BookPositioninBox:5 , bookName:"History"},      //4
//     {BookPositioninBox:6 , bookName:"Literature"},   //5
//     {BookPositioninBox:7 , bookName:"Geography"},    //6

// ];
// //for(variable of Iterables)
// for(var book of booksList){                 //book is refernce for all in booksList
// //  console.log(book);

//    if(book.bookName == "History"){
//     console.log("I read History ");
//    }

// }

// var books = ["English", "Physcics", "Matematics", "History"];

// for(var book of books){
//     console.log(book);
// 
// if(book == "History"){
//     console.log("I read History ");
//    }
//}





//for(variables in object){                             

//}
//bookName->one of property in bookDetails  object|| one of Index i bookDetails object
//one of Member in bookDetails object


// var bookDetails ={
//     bookName : "Geethanjali",
//     bookAuthor : "Tagore",
//     bookPrice : 250.00,
//     bookPublisher : "Rupa",
//     bookPublishDate :  "2018-01-01",
//     bookEdition : "1st",
//     bookISBN : "123456789",
// }

// //bookDetails.bookPrice =250.00  //direct callig by using property
// //bookDetails["bookPrice"]; ->250.00   //object index signature


// for(var property in bookDetails){
//     console.log(bookDetails[property]);

//     if(bookDetails[property] == "Tagore"){
//         console.log(`Hey!! the Author is ${bookDetails[property]}`);
//     }
// }

//while(condition){

//}
//while ->target -> you are doing some work
var bookPosition = 0;
var booksList = [
    {BookPositioninBox:1 , bookName:"English"},      //0
    {BookPositioninBox:2 , bookName:"Mathematics"},  //1
    {BookPositioninBox:3 , bookName:"Physics"},      //2
    {BookPositioninBox:4 , bookName:"Chemistry"},   //3
    {BookPositioninBox:5 , bookName:"History"},      //4
    {BookPositioninBox:6 , bookName:"Literature"},   //5
    {BookPositioninBox:7 , bookName:"Geography"},    //6
];
//bookPosition[3] ->{BookPositioninBox:4 , bookName:"Chemistry"}

while(bookPosition < 5){
console.log(booksList[bookPosition].bookName);
let favBook = booksList[bookPosition].bookName;
if(favBook == "History"){
    console.log(`My favorite book is ${favBook}`);
}
bookPosition = bookPosition+1;
}

// do{
//     //console.log(booksList[bookPosition]);

//     let book = booksList[bookPosition];
//     if(book.bookName == "Mathematics"){
//         console.log("i read mathematicis");
//     }
// bookPosition = bookPosition+1;
// }while(bookPosition<7 )


// var index =2;
// var books = ["Maths", "English", "Physics"];

// var myFavBook = books[index];  //mathematics(check debugg)



//for(intialization; condition; increment/decrement){

//}

// var booksList =["Maths", "English", "Physics"];
// booksList.lenth =3;
// var bookPosition=0;
// var booksList = [
//     {BookPositioninBox:1 , bookName:"English"},      //0
//     {BookPositioninBox:2 , bookName:"Mathematics"},  //1
//     {BookPositioninBox:3 , bookName:"Physics"},      //2
//     {BookPositioninBox:4 , bookName:"Chemistry"},   //3
//     {BookPositioninBox:5 , bookName:"History"},      //4
//     {BookPositioninBox:6 , bookName:"Literature"},   //5
//     {BookPositioninBox:7 , bookName:"Geography"},    //6

// ];
// for(var bookPosition = 0; bookPosition < 7; bookPosition = bookPosition + 1){

//     console.log(booksList[bookPosition]);
//     let bookNames = (booksList[bookPosition].bookName);

//     if(bookNames == "English"){
//         console.log("English is in your array");
//     }
// }





