//if conditions
// syntax:
// if(condition){
//     --------
// }
// elseif(condition){
//     ---------------
// }
// else{
//     --------------
// }

let age =20;

if(age >=18){
    console.log("Adult");

}
else if(age<=18){
    console.log("Minor");
}

else{
    console.log("aged")
}


//----------------------------------------

let marks = 46;

if(marks <35){
    console.log("you failed the examination");

}
else if(marks <=40){
    console.log("you just passed the examination");
}
else{
    console.log("you passed the examination");
}


//------------------------------------------

let AmazonAccess = false;
let NetflixAccess = true;
let DisneyHotstarAccess = true;

if(AmazonAccess){
    console.log("Yes!! I have Access for Amazon prime");
}
else if(NetflixAccess){
    console.log("Yes!! I have Access for Netflix");
    
}
else if(DisneyHotstarAccess){
    console.log("Yes!! I have Access for Disney Hotstar");
}
else{
    console.log("No OTT Plaforms");
    
}



