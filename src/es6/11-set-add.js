const list = new Set();

list.add("Mi libro luna de pluton");
list.add("Doraimon").add("Cada de vaca");
console.log(list);


//delete repeat elements in array

const array = [1,1,1,1,2,3,4,4,5,6];
const noRepeat = [...new Set(array)]
console.log(noRepeat);