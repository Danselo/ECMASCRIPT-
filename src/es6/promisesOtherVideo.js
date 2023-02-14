//this is the contextual file for promises
let datos= [{
    name: "pedro",
    age: 27
},{
    name: "jose",
    age: 35
}
]
//create a function to print de data and add seconds of wait with the promises 
const showDate = () =>{
    return new Promise((response,resolve)=>{
        setTimeout(()=>{
            response(datos)
        },3000)
    })
} 

//if is correct this print of data and the other hand if is else this show de "Oe Error"
showDate().then((datos)=> console.log(datos))
.catch(()=>{
    console.log("Oe error");
})


