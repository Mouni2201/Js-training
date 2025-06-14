// class school{
//     #schoolname;
//     #schoollocation;   // these two are private key words only accessible within the class
//     constructor(name, location){
//         this.schoolname = name;
//         this.schoollocation = location;
 
//     }
 
//     enrollstudent(){
//         let student = {
//             name : "Sarada",
//             ID   : "23467"
//         }
//         console.log(`Student name is ${student.name} and joined ${this.schoolname} which is located in ${this.schoollocation}`)
//     }
 
// }
// let studentdetails = new school("St.Ann's", "Vizag")
// console.log(studentdetails);
// studentdetails.enrollstudent();
 
 
//-----------------------------------------------------------------------------------------------
 
 
// class school{
//     #schoolname;
//     #schoollocation;  // these two are private key words only accessible within the class
//     #students = []      //declared an empty array
//     constructor(name, location){
//         this.schoolname = name;
//         this.schoollocation = location;
 
//     }
 
//     enrollstudent(){
//         let student = {
//             name : "Virat",
//             ID   : "23467"
//         }
//         //let's push this object into empty array that we declared as private field in above class
//         this.#students.push(student)
//         console.log(`Student name is ${this.#students[0].name} and joined ${this.schoolname} which is located in ${this.schoollocation}`)
//     }
 
// }
// let studentdetails = new school("St.Ann's", "Vizag")
// console.log(studentdetails);
// studentdetails.enrollstudent();
 
//-----------------------------------------------------------------------------------------------
 
//using static keyword
// class School {
//     static schoolname = "Lotus High School";
// }
 
// //     constructor(){
// //         console.log(School.schoolname)
 
// //     }
// // }
// // new School();
 
// console.log(School.schoolname)
//using a static property, which means it belongs to the class itself, not instances of the class.
 
//-----------------------------------------------------------------------------------------------
 
//another exmaple of encapsulation using 2 classes
class Player {
    #pname;
    #pposition;
    //#players = [];
 
    constructor(name, Position){
        this.pname = name;
        this.pposition = Position;
}
enrollnewPlayer(player){
    //console.log(player)
    console.log(`${player.tname} is No. ${player.tposition} batsman in the world.
         He is one of the inspiration to ${this.pname}`)
 
    //here in above line it returns direclty Sachin and 1 if we put player.tname because it returns object in the output
 
    // let newplayer = {
    //     Name: "MS Dhoni",
    //     Position : "Vice-captain"
    // }
    // this.#players.push(newplayer)
    // console.log(`We had ${this.#players[0].Name} as ${this.pposition} upto the year 2021`)
}
}
class TeamPlayer{
    #tname;
    #tposition;
    constructor(plname, plposition){
        this.tname = plname;
        this.tposition = plposition
    }
}
let Player1Details = new TeamPlayer("Sachin Tendulkar", "1")
 
let playerDetails = new Player("Rishabh Pant", "Captain");
playerDetails.enrollnewPlayer(Player1Details);
let Player2Details = new TeamPlayer("Chris Gayle", "3")
playerDetails.enrollnewPlayer(Player2Details);
 
 