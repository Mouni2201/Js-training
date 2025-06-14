console.log("Mounica");

console.log("%c Mounica", "color:black");


console.log("%c Mounica", "background-color:yellowgreen;color:blue;font-size:50px");

console.log("%c      ", "background-color:red");


//function calling

function redcolor(){
    console.log("%c      ", "background-color:red");
}

redcolor();

//if red color is common but i want the red color in three sections without adding everytime

function redcolor(){
    console.log("%c     ","background-color:red");

}

function firstSection(){
    console.log("%c      ", "background-color:yellow");
    console.log("%c      ", "background-color:blue");
    redcolor();

}
firstSection();

function secondSection(){
    console.log("%c      ", "background-color:yellowgreen");
    console.log("%c      ", "background-color:lightgray");
    redcolor();

}
secondSection();

function thirdSection(){
    console.log("%c      ", "background-color:purple");
    console.log("%c      ", "background-color:darkgray");
    redcolor();

}
thirdSection();