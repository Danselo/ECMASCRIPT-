function* generatorFunction(array){
    for(let value of array){
       yield value;
    }
}
const person = generatorFunction(["Pedro", "Papa Noel", "El bicho", "Luis vuitton"]);

console.log(person.next().value);
console.log(person.next().value);
console.log(person.next().value);