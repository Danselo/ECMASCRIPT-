//this is a normal funcion with params
function Employee(name,age){
    var name = name || "Pedrito";
    var age = age || 30;
    console.log(name, age);
}
Employee();
Employee("Jose naranja", 80);
//this is a default params with ES6

function Admin (name = "Macho" , age=30){
    console.log(name, age);
}
Admin();
Admin("Danilo", 20);
