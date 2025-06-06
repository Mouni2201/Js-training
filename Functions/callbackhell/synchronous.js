function sleep(milliseconds){
    var startDateTime = new Date().getTime();
    var endDateTime = startDateTime+milliseconds;

    while(new Date().getTime()<endDateTime){

    }
}

function stepOne(){
    
   
    console.log("stepOne");
     sleep(3000);
}
function stepTwo(){
    
    console.log("stepTwo");
    sleep(2000);
}
function stepThree(){
    
    console.log("StepThree");
    sleep(1000);
    
}
function stepFour(){
    
    console.log("stepfour");
    sleep(10000);

}
console.time("My Task Time");
stepOne();
stepTwo();
stepThree();
stepFour();
console.timeEnd("My Task Time");
console.log("All tasks are completed");

//--------------------------------------------------------------------
// function downloadVideo(instaReelscaallbackfn){
//     console.log("downloadVideo");
//     sleep(3000);
//     instaReelscaallbackfn();
// }
// function instaReels(chatWithFrdcallbackfn){
//     sleep(2000);
//     console.log("instaReels");
//     chatWithFrdcallbackfn();

// }
// function chatWithFrd(goingToMoviecallbackfn){
//     sleep(1000);
//     console.log("chatWithFrd");
//     goingToMoviecallbackfn();
    
// }
// function goingToMovie(){
//     sleep(1000);
//     console.log("goingToMovie");

// }

// downloadVideo(()=>{
//     instaReels(()=>{
//         chatWithFrd(()=>{
//             goingToMovie();
//         })
//     });
// });

//----------------------------------------------------------------------
function downloadVideo(){
    console.log("downloadVideo");
    sleep(1000);

}
function instaReels(){
    console.log("instaReels");
    sleep(2000);

}
function chatWithFrd(){
    console.log("chatWithFrd");
    sleep(3000);
}
console.time("my TaskTime");
downloadVideo();
instaReels();
chatWithFrd();
console.timeEnd("my TaskTime");
console.log("All works are done");


