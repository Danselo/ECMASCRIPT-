//ARRAY destructuring
let animals = ["Dog", "Cat"];
let [a,b] = animals;

console.log(a, animals[1]);

//OBJECTS DESTRUCTURING

let person = {
    username: "Danilo",
    age : 18
}
let{username, age} = person
console.log(age,person.name);

//spread operator

let pet = {
    name: "Michi",
    race : "Cat"
}
let country = "CO"

let data = {...pet, country}
console.log(data);

function add(num, ...values){
    console.log(values);
    return num + values[0];
}

console.log(add(1,2,3,4,5,6));