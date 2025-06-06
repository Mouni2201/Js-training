function stepOne(){
    setTimeout(()=>{
        console.log("stepOne");

    },2000)
    

}
function stepTwo(){
    setTimeout(()=>{
        console.log("stepTwo");

    },5000)

   
}
function stepThree(){
  
   setTimeout(()=>{
        console.log("stepThree");

    },6000)
    
}
function stepFour(){

    setTimeout(()=>{
        console.log("stepFour");

    },8000)

}

stepOne();
stepTwo();
stepThree();
stepFour();
