//IIFE (Immediately Invoked Function Expression) Anonymousfunction is know as IIFE

(function(){
    let Drinks = "ThumpsUp";
    console.log(Drinks);
})(); //no need to call separetely.



//With parameters passing

(function(drinkName, taste, manufactureDate){

    console.log(drinkName);
    console.log(taste);
    console.log(manufactureDate);


})("Mirinda", "Sour", "May 26, 2025");


(function(drinkName, taste, manufactureDate){

    console.log("DrinkName:" + drinkName);
    console.log("TasteOfDrink:" + taste);
    console.log("ManufactureDate:" + manufactureDate);


})("Mirinda", "Sour", "May 26, 2025");