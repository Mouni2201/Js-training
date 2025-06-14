//callbackhell

function stepOne(stepTwocallbackfn){
     console.log("stepOne");
    stepTwocallbackfn();
   
    
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









