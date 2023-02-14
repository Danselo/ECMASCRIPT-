var animal1 = "Hashi";
animal1 = "Naruto";
console.log(animal1);

let animal2 = "Gato";
animal2 = "Perro";
console.log(animal2);

const animal3 = "Bird"; //this variable is constant, not change 
animal3 = "Leon";

const fruits = () =>{
    if(true){
        var fruit1 = "Apple"; //this variable is global (scope function)
        let fruit2 = "Orange"; // this variable is the block scope
        const fruit3 = "Kiwi"; // block scope too

    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);

}
fruits();