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