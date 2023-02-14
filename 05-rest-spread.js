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