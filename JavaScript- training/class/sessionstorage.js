//sessionstorage data temporarily cleared when the tab or browser is closed

sessionStorage.setItem("Season", "Winter");

sessionStorage.setItem("userName" , "Madan");

//sessionStorage.removeItem("userName");

//sessionStorage.clear();


let userName = sessionStorage.getItem("userName")
document.writeln(`${userName} is our Trainee`);
