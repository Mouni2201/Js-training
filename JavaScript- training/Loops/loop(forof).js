var movies = ["Godavari", "Happydays", "Aanad"];

for(var cinema of movies){
    console.log(cinema);

    if(cinema == "Happydays"){
        // console.log(movies);  it will print whole array
        console.log(`my favorite movie is ${cinema}`);
    }
}



var holidayTripDetails = [
    {day:1 , placeName:"Switzerland"},
    {day:2 , placeName:"Kodikenal"},
    {day:3 , placeName:"London"},
    {day:4 , placeName:"DisneyLand"},
    {day:5 , placeName:"SouthKorea"},
    {day:6 , placeName:"Seoul"},
    
];
for(var trips of holidayTripDetails){
    console.log(trips);
    console.log(trips.placeName);  //places names
    console.log(trips.day);   // day print

    if(trips.placeName == "London"){
        //console.log("My favorite place is London");
        console.log(`My favorite place is ${trips.placeName}`);
    }
}


const name = "Hi Hello";

for(const greet of name){
    console.log(greet);
    //console.log(`when i greet infornt of me, i want to say ${greet}`);
    // whenn i use in paranthesis it will go the sentence to every single letter
    console.log(`when i greet infornt of me, i want to say ${name}`);

}




var games=[
    {game1:"cricket"},
    {game2:"chess"},
    {game3:"football"},
];
for(var IPL of games){
    for(var key of IPL){
        console.log("IPL[key]");
   

    }
    //console.log(game);
   
    
     if(IPL.game1 == "cricket"){
        console.log(`i want all games`);
     }   
}

