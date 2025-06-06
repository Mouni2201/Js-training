// function stepOne(){
//     setTimeout(()=>{
//         console.log("stepOne");

//     },2000)
    

// }
// function stepTwo(){
//     setTimeout(()=>{
//         console.log("stepTwo");

//     },5000)

   
// }
// function stepThree(){
  
//    setTimeout(()=>{
//         console.log("stepThree");

//     },6000)
    
// }
// function stepFour(){

//     setTimeout(()=>{
//         console.log("stepFour");

//     },8000)

// }

// stepOne();
// stepTwo();
// stepThree();
// stepFour();


//--------------------------------------------------------------------------
//this one example leads to synchronous because we use callback hell
function stepOne(){
     setTimeout(()=>{
        console.log("stepOne");

    },2000)
}

function stepTwo(){
     setTimeout(()=>{
        console.log("stepTwo");

    },2000)
}

function stepThree(){
     setTimeout(()=>{
        console.log("stepOne");

    },2000)
}

stepOne(()=>{
    stepTwo(()=>{
        stepThree();
    });
});