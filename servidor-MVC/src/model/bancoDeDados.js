function bancoDeDados(usuarios){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (usuarios === "usuarios"){
                return resolve( require("./usuarios.json"))
            }
                return reject("Dado não encontrado.")
           
            
        }, 1500);
    })
}

module.exports ={
    bancoDeDados
}