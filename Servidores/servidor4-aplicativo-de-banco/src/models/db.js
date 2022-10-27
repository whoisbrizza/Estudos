function db(dado){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (dado == "appBanco"){
                return resolve( require("./appBanco.json"))
            }
            else{
                return reject("Dado não encontrado.")
            }
            
        }, 1500);
    })
}

module.exports ={
    db
}