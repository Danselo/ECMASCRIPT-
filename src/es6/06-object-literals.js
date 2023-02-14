//enahced object literals

function newUser(user,age,country,uId){
    return {
        user,
        age,
        country,
        id: uId
        //or 
        // uId
    }

}
console.log(newUser("Pedro",17,"Colombia",1));
