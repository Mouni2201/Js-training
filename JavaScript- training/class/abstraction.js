class myBank {
    constructor(accountnumber, balance, accountowner ){
        this.accountnumber = accountnumber;
        this.balance = balance;
        this.accountowner = accountowner
    }
    deposit(depositamount){
        this.balance = this.balance + depositamount;
        console.log(`Deposited ${depositamount} to ${this.accountnumber}`)
 
    }
 
    withdrawl(withdrwalamount){
        if(this.balance > withdrwalamount){
           return  this.balance= this.balance - withdrwalamount
        }
        else{
            console.log("%cSorry!!! Insufficient amount in your account", 'color:blue')
        }
    }
    checkmybalance(){
        return this.balance;
    }
}
 
let myaccountdetails = new myBank("123456", 3000, "Sravani")
console.log(myaccountdetails)
myaccountdetails.deposit(500)
let latestbalance = myaccountdetails.checkmybalance();
console.log("My balalace after depositing:", latestbalance)
setTimeout(() => {
 myaccountdetails.withdrawl(2500)
 let latestbalance = myaccountdetails.checkmybalance();
console.log("My final balance after withdrawl:", latestbalance)
 
 
}, 5000)


//---------------------------------------------------------------------------------------

// class bankdetails{
//     constructor(banknam,holdername,accountnum,ammount){
//     this.bankename=banknam;
//     this.accountholder=holdername;
//     this.accountnumber=accountnum;
//     this.initialammount=ammount;
//      }
//    depositammount(ammountdeposited){
//         this.initialammount = this.initialammount +  ammountdeposited;
//         //console.log(`Ammount deposited in ${this.accountholder} account is ${ammountdeposited}`)
//     }
//     checkbalance(){
//         return this.initialammount;
//     }
// }
// let bank=new bankdetails("SBI","Deepu","0123456",5000);
// bank.depositammount(200);

// let bankstatement=bank.checkbalance();
// console.log(`Balance after ammount deposited is ${bankstatement}`);