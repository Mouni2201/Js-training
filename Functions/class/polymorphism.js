// /Polymorphism means "many forms". In object-oriented programming, 
// it refers to the ability of different objects to respond to the same method name in a way appropriate to their types.


//mthod overiding with different classes


class languages{

    constructor(language){
        this.language = language;
    }

    speak(){
        console.log(`${this.language} is mother tongue for Andhras`);
    }
}

class religion extends languages{

    speak(){
        console.log(` the almost hindhu religion speaks ${this.language}`);
    }
}
// let mylanguage = new languages("Telugu");
// mylanguage.speak();

// let mylanguage = new religion("hindi")
// mylanguage.speak();

class myths extends languages{

    speak(){
        console.log("the hindhu are very nice persons and rough bheaviour");
    }
}

let mylanguage = new myths("telugu")
mylanguage.speak();


//-----------------------------------------------------------------------------------