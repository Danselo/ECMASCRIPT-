const number = 2;
const values = number ?? 5;
console.log(values); // 2

const number2 = null;
const values2 = number2 ?? 5; //this remplace if number is null
console.log(values2); // 5