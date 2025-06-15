//Switch case


let day = 5;
let dayName;

switch (day){
    case 1:
        dayName = "sunday";
    break;
    case 2:
        dayName = "Monday";
    break;
    case 3:
        dayName = "Tuesday";
    break;
    case 4:
        dayName = "Wednesday";
    break;
    case 5:
        dayName = "Thursday";
    break;
    case 6:
        dayName = "Friday";
    break;
    case 7:
        dayName = "saturday";
    break;
    default:
        dayName = "Invalid days";

}
console.log(dayName);


//------------------------------------------

let number1 = 10;
let number2 = 4;
let operator = "*";
// let operator = "+";
let result;

switch(operator){
    case '+':
        result = number1+number2;
    break;
    case '-':
        result = number1-number2;
    break;
    case '*':
        result = number1*number2;
    break;
    case '/':
        result = number1/number2;
    break;
    default:
        result = "invalid operator";
        
}
console.log(result);

//-------------grouping case----------------------------


let grade = "F";

switch(grade){
    case 'A':
    case 'B':
        console.log("Performance is excellent");
    break;
    case 'C':
        console.log("performance is good");
    break;
    case 'D':
    case 'E':
        console.log("Needs to improvement");
    break;
    case 'F':
        console.log("fail");
    break;
    default:
        console.log("invalid result");
    

}
