function car(carname, brandname){

}
console.log(car.name) //property
console.log(car.length) //property


//-----------------------property--------------------------

//sahre the methods to car

// function car(){
//     console.log("car");

//     this.brand = "BMW";
//     this.model = "BMW X5";

//     this.color = "Blue"
//     this.carnumber = "AP04 2222";
//     console.log(this);

// }
// //prototype

// car.prototype.getCarInfo = function(){
//     console.log("Car brand is BMW and the model is BMW X5");
//     console.log(`car brand is ${this.brand} and the model is ${this.model}`)
//     console.log(this)
// }

// car.prototype.getDriveInfo = function(){
//     // console.log("Car brand is BMW and the model is BMW X5");
//     console.log(`car color is ${this.color} brand is ${this.brand} and the model is ${this.model}, the number of car ${this.carnumber}`)
//     console.log(this)
// }
// let newcar = new car();
// newcar.getCarInfo();
// newcar.getDriveInfo();

// //-------------------------
//parameters passing

function car(brandName, modelName, color, carnumber){
    console.log("car");

    this.brand = "brandName";
    this.model = "modelName";

    this.color = "color"
    this.carnumber = "carnumber";
    console.log(this);

}
//prototype

car.prototype.getCarInfo = function(){
    console.log("Car brand is BMW and the model is BMW X5");
    console.log(`car brand is ${this.brand} and the model is ${this.model}`)
    console.log(this)
}

car.prototype.getDriveInfo = function(){
    // console.log("Car brand is BMW and the model is BMW X5");
    console.log(`car color is ${this.color} brand is ${this.brand} and the model is ${this.model}), the number of car ${this.carnumber}`)
    console.log(this);
}
let newcars = new car("BMW", "BMW X5", "blue", "AP04 2222");
newcars.getCarInfo();
newcars.getDriveInfo();


