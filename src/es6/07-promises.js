function anotherFunction(){
    return new Promise((res,rej)=>{
        if(false){
            res("Hey bro you code is amazing")
        }else{
            rej("Oh NOOO !!! is error")
        }
    })
}

anotherFunction()
.then(res => console.log(res))
.catch(err => console.log(err));