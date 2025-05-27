{
    //Block1 - scope1
    let fruit1 = "Apple";
    {
        //Block2 - scope2
        let fruit2 = "Mango";
        {
            
            //Block3 - scope3
            let fruit3 = "Kiwi";
            console.log("Scope3", fruit2);
            console.log("Scope3", fruit1);
            console.log("Scope3", fruit3)
        }
        console.log("Scope2", fruit1);
        console.log("Scope2", fruit2);
        // console.log("Scope2", fruit3); //undefined
    }
    console.log("Scope1", fruit1);
    // console.log("Scope2", fruit2);  //undefined
    // console.log("Scope1", fruit3); //undefined
}