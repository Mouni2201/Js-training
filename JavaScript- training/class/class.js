
//syntax
// class school{
//     //members ->constructor ->properties -> method
//     constructor(){

//     }
// }

//normal class using contructor and the constructor is a member
class school{
    constructor(){
        console.log("My name is Mounica");
    }
}new school();


//----------------------------------------------------------------------------
class college{
    constructor(){          //constructor
        console.log("My name is Mounica");
    }

    myCollegeId(){             //method
        console.log("My college id is 1770626");
    }
}
// new college().mycollegeId();
let myCollege = new college();
myCollege.myCollegeId();

//---------------------------------------------------------------------------------
//paameter and argument passing
class place{

    constructor(visitingPlace){
        console.log(`My favourite place is ${visitingPlace}`);   
    }
    tripDetails(){
        console.log("The visiting places are very cool and the package cost is 15000rs");
    }
}

new place("Ooty").tripDetails();

//-----------------------------------------------------------------------------------------
//variable define
class places{
    visitingPlace = "Ooty";
    constructor(visitingPlace){
        console.log(`My favourite place is ${this.visitingPlace}`);   
    }
    tripDetails(){
        console.log(`${this.visitingPlace} is very cool and the package cost is 15000rs`);
    }
}

new places().tripDetails();

//-----------------------------------------------------------------------------------
//variable undefined
class trip{
    visitingPlace;
    constructor(visitingPlace){
        this.visitingPlace = visitingPlace;
        console.log(`My favourite place is ${this.visitingPlace}`);   
    }
    tripDetails(){
        console.log(`${this.visitingPlace} is very cool and the package cost is 15000rs`);
    }
}

new trip("Kodikanal").tripDetails();

//---------------------------------------------------------------------------------------------

class playerDetails{
    playerName;
    team;

    constructor(playerName, team){
        this.playerName = playerName;
        this.team = team;
        //if You're accessing this.playerName and this.team before assigning them in the constructor.So the console will print undefined, so define before statement
        console.log(`${this.playerName} plays only for ${this.team}`);
        
    }

    winIPLDetails(){
        console.log(`They previously won the award in 2008, 2010, 2011, 2013, 2014, 2015, and most recently in 2023. ${this.playerName} is the captain of the ${this.team}team`);
    }
}
//give const, var and let keyword when give name for new contructor
const IPLTeam = new playerDetails("Dhoni", "CSK");
IPLTeam.winIPLDetails()
//--------------------------------------------------------------------------------------------------------
//two methods passing and calling
class student{
    constructor(name, id){
        console.log(`Student name is ${name}`);
        this.studentName =  name
        this.studentID = id;

    }
    erollStudent(){
        console.log(`Student name is ${this.studentName} and student id is ${this.studentID} `);
    }

    studentSubjects(){
        return ["English", "Hindi", "Maths"];

    }
}

const myStudent = new student("John", "12345");
myStudent.erollStudent();
let schoolBooks = myStudent.studentSubjects;
console.log(schoolBooks);
//--------------------------------------------------------------------------------

