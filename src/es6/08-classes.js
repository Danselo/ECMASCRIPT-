class user1 {
    
    gretting(){
        console.log("Hello");

    }
}

const newUser1 = new user1();

// constructor

class user2 {
    constructor(){
        console.log("nuevo usuario");
    }
    gretting(){
        console.log("Hello");
    }
}

const Armanda = new user2();

//this 

class user3{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //methods

    speak(){
        return "Hello!!";
    }
    gretting(){
        return `${this.speak()} my name is ${this.name} `;
    }

//setters Getters 
    get uAge(){
        return this.age;
    }
    set uAge(n){
        return this.age = n;
    }
}
const Ana = new user3("Esmeregildo" , 17);
console.log(Ana.gretting());
console.log(Ana.uAge);
console.log(Ana.age =25 );

