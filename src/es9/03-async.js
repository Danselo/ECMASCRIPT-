async function* Genetator(){
    yield await Promise.resolve(1)
    yield await Promise.resolve(5)
    yield await Promise.resolve(8)
    yield await Promise.resolve(50)
}

const other = Genetator();
other.next().then((response)=> console.log(response.value));
other.next().then((response)=> console.log(response.value));
other.next().then((response)=> console.log(response.value));
other.next().then((response)=> console.log(response.value));
console.log("Hello");


//------------------------------
async function arrayOfNames(array){
    for await (let values of array){
        console.log(values);
    }
}

arrayOfNames(["Pedro","Juaquin","Danilo","Sebas","Andres"]);
console.log("Moises");