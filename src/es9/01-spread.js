let person = {username : "Pedro", age: 18, country: "CO"}

let{username, ...values} = person;  

console.log(username); //Pedro
console.log(values); // {age:18,contry: "CO"}
