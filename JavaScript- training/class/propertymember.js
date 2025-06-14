//property

// class company{
//     companyName = "DXC";
//     companyLocation = "Hyderabad";

    
// }
// // new company();
// // console.log(new company().companyName);
// // console.log(new company().companyLocation);

// let myCompany = new company();
// console.log(myCompany.companyName);
// console.log(myCompany.companyLocation);
// myCompany.companyName = "Accenture";

// setTimeout(()=>{
//     console.log(`%c ${myCompany.companyName}`, "color:blue")
// }, 2000);

// //---------------------------------------------------------------------------------------------
// let person = {
//   _age: 25,

//   get age() {
//     return this._age;
//   },

//   set age(value) {
//     if (value < 0) {
//       console.log("Age cannot be negative.");
//     } else {
//       this._age = value;
//     }
//   }
// };

// person.age = -5;  // ❌ Age cannot be negative.
// console.log(person.age);  // 25
//------------------------------------------------------------------------------------

// let personName = {
//     firstName: "Mounica",
//     surName: "Chanda",
//     get fullName(){
//         return this.firstName + " " + this.surName;
//     },

//     set fullName(name){
//         [this.firstName, this.surName] = name.split(" ");
//     }
// }
// console.log(personName.fullName);
// personName.fullName = "Sravani Meduri";  //the variable goes to set value paramaeter
// console.log(personName.firstName);   //here this statement takes the value from set

//------------------------------------------------------------------------------------------


class product {
    constructor(name, price){
        this._name = name;
        this._price = price;
    }
    get price(){
       return this._price;
    }

    set price(value){
        if(value<0){
            console.log("Invalid Price");
        }
        else{
            this._price = value;

        }
    }
}
let p = new product("Iphone", 500);
console.log(p.price);
//p.price = -100;


//------------------------------------------------------------------------------------------------------

let person = {
    _age:25,

    get age() {
        return this._age;
    },

    set age(value){
        if(value == 25){
            console.log("this is middle age");
        }
        else{
            this._age = value;
        }
    }

}

console.log(person.age);
person.age = 25;



