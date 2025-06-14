//named function


function getStateDetails(){
    let stateDetails = "";
    stateDetails = "state:" + "Hyderabad";
    return stateDetails;
}

console.log(getStateDetails());

//Anonymous function

// Syntax:
// function(){
//     statement 1
//     ----
//     statement N
// }


var nameOfStudent = function(){
    var studentDetails = "Harry";
    var ageOfStudent = 10;
    var completeDetails = studentDetails+","+ageOfStudent
    console.log(completeDetails);
}
nameOfStudent();

// Anonymous function with passing parameters

let laptopDetails = function(laptopName, behaviour, cost){
    console.log("LaptopName:", laptopName);
    console.log(behaviour);
    console.log(cost);

}
laptopDetails("Lenova", "good", 90000);

let laptopDetail = function(laptopName, behaviour, cost){
    console.log("LaptopName:" + laptopName);
    console.log("Behaviour:" + behaviour);
    console.log("Cost:" + cost);

}
laptopDetail("Lenova", "good", 90000);







