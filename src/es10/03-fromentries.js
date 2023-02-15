const datas = new Map ([["name", "Pedro"], ["age",20],["country","COP"]])
console.log(datas);   //Map(3) { 'name' => 'Pedro', 'age' => 20, 'country' => 'COP' 

console.log(Object.fromEntries(datas)); // { name: 'Pedro', age: 20, country: 'COP' }

