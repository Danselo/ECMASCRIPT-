try{
    hello()
}catch(err){
    console.log(err);
}
//is not necesary the error parameter
try{
    hello()
}catch{
    console.log("Hay un error");
}