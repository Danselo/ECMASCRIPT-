let person = {username : "Pedro", age: 18, country: "CO"}

let{username, ...values} = person;  

console.log(username); //Pedro
console.log(values); // {age:18,contry: "CO"}


//-------------------
function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  // expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // expected output: 10