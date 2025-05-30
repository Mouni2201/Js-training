var MumbaiIndians = "Mumbai"; //global variable

//local block1
{

let RCB = "Banglore";
console.log("local-Block1", RCB); //Banglore
console.log("local-Block1", MumbaiIndians); //Mumbai
// console.log("local-Block1", CSK); //not defined
 }

//local block2
{
    
    let CSK = "Chennai";
    console.log("local-Block2", CSK); //Chennai
    console.log("local-Block2", MumbaiIndians); //Mumbai
    // console.log("local-Block2", RCB); // not defined
}


console.log("GlobalBlock", MumbaiIndians); //Mumbai
// console.log("GlobalBlock", CSK); //not defined
// console.log("GlobalBlock", RCB); //not defined


//another example with using function
var signalName = "Wi-fi";

function Room1Status(){
    let Room1 = "Speed";
    console.log(Room1);
    
    console.log(signalName);
    console.log(Room2);

}Room1Status();
function Room2Status(){
    let Room2 = "Slow"
    console.log(Room2);
    console.log(Room1);
    console.log(signalName);
}

Room2Status();


console.log(Room1);
console.log(Room2);
