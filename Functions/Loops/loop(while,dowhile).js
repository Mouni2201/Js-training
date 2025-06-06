//while(condition){

//}
//while ->target -> you are doing some work

// The loop runs while the condition is true.

// If the condition is false at the beginning, the loop never executes.

let count = 0;

while(count <=6){

    console.log(`Count is : ${count}`);

    count++;
}

//do{

//}while(condition)
let i = 0;
do{
console.log(i);
i++;
}while(i<7)

    //false statement
let n =10;
do{
    console.log("This will print once even though n is not < 5");
    i++;

}while(n<5)


let fruits = ["Apple", "Banana", "Avacado"];
let index = 0;
do{
    console.log(fruits[index])
    index++;

}while(index<2) ///apple, banana








var moviePosition = 0;
var movieDetail = {
    movieName:"Murari",
    hero: 'Mahesh Babu',
    heroine:"sonali Bindre",
    releaseDate: "17 February 2001",
    director: "Krishna Vamsi",
    musicDirector: "Mani Sharma",
    runningTime: "3 hours",
    producers: ["N. Devi Prasad", "Ramalingeswara Rao", "Gopi Nandigam"]

};

while(moviePosition<5){
    console.log(movieDetail[moviePosition])
    moviePosition = moviePosition+1
}
// var values = Object.values(movieDetail);
// while(moviePosition< values.length){
//     console.log(moviePosition[values]);
//     moviePosition++;

// }


// var bookPosition = 0;
// var booksList = [
//     {BookPositioninBox:1 , bookName:"English"},      //0
//     {BookPositioninBox:2 , bookName:"Mathematics"},  //1
//     {BookPositioninBox:3 , bookName:"Physics"},      //2
//     {BookPositioninBox:4 , bookName:"Chemistry"},   //3
//     {BookPositioninBox:5 , bookName:"History"},      //4
//     {BookPositioninBox:6 , bookName:"Literature"},   //5
//     {BookPositioninBox:7 , bookName:"Geography"},    //6
// ];
// //bookPosition[3] ->{BookPositioninBox:4 , bookName:"Chemistry"}

// // while(bookPosition < 5){
// // console.log(booksList[bookPosition].bookName);
// // let favBook = booksList[bookPosition].bookName;
// // if(favBook == "History"){
// //     console.log(`My favorite book is ${favBook}`);
// // }
// // bookPosition = bookPosition+1;
// //}

// do{
//     console.log(booksList[bookPosition]);
//     let book = booksList[bookPosition]
//     if(book.bookName == "Chemistry"){
//         console.log(`My favorite book is ${book.bookName}`);

//     }
//     bookPosition = bookPosition+1

// }while(bookPosition<5)







