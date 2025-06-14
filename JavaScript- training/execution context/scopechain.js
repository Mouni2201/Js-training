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
            console.log("Scope3", fruit3);
        }
        console.log("Scope2", fruit1);
        console.log("Scope2", fruit2);
        // console.log("Scope2", fruit3); //undefined
    }
    console.log("Scope1", fruit1);
    // console.log("Scope2", fruit2);  //undefined
    // console.log("Scope1", fruit3); //undefined
}



//-----------------------------------------------------------------------

let globalvar = "Iam a gobal variable";

function outerfunction() {
    let outerfunction = "Iam a outer variable";


    function innerfunction() {
        let innerfunction = "Iam a inner variable";

        console.log(outerfunction);
        console.log(innerfunction);
        console.log(globalvar);
    }
    innerfunction();

}
outerfunction();



//----------------------------------------------------------------------------------
let global = "iam a global";

function outer() {
    let outervar = "outervariable";

    function inner() {
        let innervar = "Inner variable";
        console.log(innervar);
        console.log(outervar);
        console.log(global);

    }inner();

    console.log(outervar);
    console.log(global);
}
outer();

console.log(global);


