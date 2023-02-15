const promise1 = new Promise((resolve,reject)=>reject("This is a error"));
const promise2 = new Promise((resolve,reject)=>reject("This is a error bad"));
const promise3 = new Promise((resolve,reject)=>resolve("Reponse good!!"));
const promise4 = new Promise((resolve,reject)=>resolve("resolve WIN!!"));

Promise.any([promise1,promise2,promise3,promise4])
.then((response) => console.log(response))

//this return the first resolve promise

