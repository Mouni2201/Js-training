//function method members
//call, apply, bind using this keyword


let bankDetails = {
    bankName : "HDFCBank",
    Founder : "Hasmukhbhai Parek",
    getBankDetails : function(){
        console.log(this);  //return/gives the inside of scope details
        console.log(this.bankName);
        console.log(this.Founder);
    }
} 

// console.log(this);

bankDetails.getBankDetails();

//----------------call, bind, apply----------------------
/*call: call method immediately invoked the function 
with this set to the provided value and any additional argumnets passed individually.Founder

apply: the apply method works like call but takes an array of argumnets instead of passing them individually

bind: doesnot the immediately call the function. instead, 
it returns a new function with this set to the specified value and argument prest if provided*/


// let bankDetail = {
//     bankName : "HDFCBank",
//     Founder : "Hasmukhbhai Parek",
//     getBankDetails : function(){
//         console.log(this);  //return/gives the inside of scope details
//         console.log(this.bankName);
//         console.log(this.Founder);

//     }
// } 

// let AxisBankDetails = {
//     bankName : "AxisBank",
//     Founder : "Amitabh Chowdhary",
//     logMessae : function(){

//     }
// }

// bankDetail.getBankDetails.call(AxisBankDetails);  //here the first function this details - reperesnts the axisbankdetails scope and it print the axis details

//-------------------
//parameters and argumnets passing

let bankDetail = {
    bankName : "HDFCBank",
    Founder : "Hasmukhbhai Parek",
    getBankDetails : function(argument1, argument2){
        console.log(this);  //return/gives the inside of scope details
        console.log(this.bankName);
        console.log(this.Founder);

        console.log(argument1);
        console.log(argument2);
        console.log(`Bank Name: ${this.bankName}, Bank Founder: ${this.Founder}, 
            Bank EstablishYear: ${argument1}, Bank EmployeeCount: ${argument2}`);

    }
} 

let AxisBankDetails = {
    bankName : "AxisBank",
    Founder : "Amitabh Chowdhary",
    logMessae : function(){
        
    }
}

// bankDetail.getBankDetails.call(AxisBankDetails , "1993", "5300");   //method
// bankDetail.getBankDetails.apply(AxisBankDetails, [1993, 5300]);    //method
// console.log(bankDetail.getBankDetails.bind(AxisBankDetails, "1993", "5300")); //it will return the function details


let newAxisBankDetails = bankDetail.getBankDetails.bind(AxisBankDetails, "1993", "5300");

newAxisBankDetails();  // it will return all details.






