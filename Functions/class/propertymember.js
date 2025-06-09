//property

class company{
    companyName = "DXC";
    companyLocation = "Hyderabad";

    
}
// new company();
// console.log(new company().companyName);
// console.log(new company().companyLocation);

let myCompany = new company();
console.log(myCompany.companyName);
console.log(myCompany.companyLocation);
myCompany.companyName = "Accenture";

setTimeout(()=>{
    console.log(`%c ${myCompany.companyName}`, "color:blue")
}, 2000);

//---------------------------------------------------------------------------------------------
let person = {
  _age: 25,

  get age() {
    return this._age;
  },

  set age(value) {
    if (value < 0) {
      console.log("Age cannot be negative.");
    } else {
      this._age = value;
    }
  }
};

person.age = -5;  // ❌ Age cannot be negative.
console.log(person.age);  // 25


