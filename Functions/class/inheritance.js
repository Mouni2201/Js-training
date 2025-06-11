//inheritance
//that allows one object to acquire the properties and methods of another. 
// This promotes code reusability and establishes a hierarchical relationship between classes.


class maintraffic{
    constructor(colorName){
        this.colorName = colorName;
    }

    trafficPolice(){
        console.log(`When ${this.colorName} comes the traffic police stops the vehicles`);
    }
}
//The class and extends keywords make inheritance simpler and cleaner. 
// means that subtraffic inherits from maintraffic.

//Used to create a subclass from a parent class - extend
class subtraffic extends maintraffic{
    subtrafficPolice(){
        this.trafficPolice();
    }
}

let mysubtraffic = new subtraffic("blue");
mysubtraffic.subtrafficPolice();

let MyTrafficinfo = new maintraffic("red");
MyTrafficinfo.trafficPolice();


//-----------------------------------------------------------------

//super ; Calls the parent class constructor or methods

class animal{
     constructor(name){
        this.name = name;
     }

     speak(){
        console.log(`The ${this.name} braks the bow bow`);
        console.log("In nation wide so many types of breeds available");
     }
}

class pets extends animal{

    constructor(name, color){
        super(name);   //Call the parent class constructor
        this.color = color;
    }
    brak(){
        console.log(`${this.name} makes cute sound and the color is ${this.color}`);
        console.log(`${this.color} breeds are more loveable compared to others`);
    }
    
}

let mypets = new pets("puppy", "brown");
mypets.brak();  
mypets.speak();

//--------------------------------------------------------------------------