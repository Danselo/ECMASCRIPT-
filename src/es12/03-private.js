class user3{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //methods

    #speak(){
        return "Hello!!";
    }
    gretting(){
        return `${this.speak()} my name is ${this.name} `;
    }

//setters Getters 
    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        return this.age = n;
    }
}
const Ana = new user3("Esmeregildo" , 17);
console.log(Ana.gretting());
console.log(Ana.uAge);
console.log(Ana.age =25 );


//this sombol represent the private methods => #