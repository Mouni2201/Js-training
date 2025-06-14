//export keyword is used to make functions, variables and classes available to other fileds.

export const bankName = "HDFC Bank";


var multiply =(a,b) => a * b;

var divide = (a,b) => a/b;

export {multiply, divide};


export function FoodItems(foodName){
    
    return `${foodName} is one of the best food compare to other biryani`;
   
}



export function bank(bankAccount){
    console.log(`my bank account number is ${bankAccount}` );
}
