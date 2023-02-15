const asyncFunction = () =>{
    return new Promise((resolve,reject)=>{
        (true)
        ?
        setTimeout(()=>resolve("Hey Welcome you're entry"),2000)
        :
        reject(new Error("Bro Error"));
    })
}

const anotherFunction = async ()=>{
    const something = await asyncFunction();
    console.log(something);
    console.log("Hellooo");
}

console.log("Before");
anotherFunction(); //this ejecute after the  2 seconds because is async 
console.log("After");

