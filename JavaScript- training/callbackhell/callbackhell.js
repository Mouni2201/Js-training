//callbackhell

function stepOne(callbackfn){
     console.log("stepOne");
    callbackfn();
   
    
}
function stepTwo(stepThreecallbackfn){
    console.log("stepTwo");
    stepThreecallbackfn();


}
function stepThree(stepFourcallbackfn){
    console.log("StepThree");
    stepFourcallbackfn();
}
function stepFour(){
    console.log("stepfour");
}



stepOne(()=>{
    stepTwo(()=>{
        stepThree(()=>{
            stepFour();
        });
    });
});









