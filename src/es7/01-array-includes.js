let numbers = [1,2,3,4,5];
console.log(numbers.includes(5)); //false

let names = ["Alfredo", "Pepe", "Juaquin"];
console.log(names.includes("Pepe")); //true
console.log(names.includes("pepe")); //this is sensible to  UPPERCASE

//objects  
const letras = {a: 1, b:2, c:3}
//exist diferences  because  the properties for type object
console.log("a" in letras);

//evaluate type  
console.log(letras.hasOwnProperty("toString"));

Object.hasOwn(letras, "toString") // false
