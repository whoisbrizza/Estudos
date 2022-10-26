const bancoDeDados = require("../model/bancoDeDados")

async function dbConnect() {
    return await bancoDeDados.bancoDeDados("usuarios")
}

//GET que retorna todos os usuarios

const getAll = async(request, response)=>{
    try {
        let usuariosJson = await dbConnect()

       response.status(200).send(usuariosJson)

    } catch (error){
       response.status(500).json({message: error.message})
    }
}

//GET que retorna o usuarios com id selecionado

const getById = async (request, response)=>{
    try {
        let usuariosJson = await dbConnect()
        let idRequest = request.params.id

        let encontraUsuarioPeloId = usuariosJson.find(usuario => usuario.id == idRequest)

        if(encontraUsuarioPeloId == undefined) throw new Error("Usuário não encontrado.")

        response.status(200).send(encontraUsuarioPeloId)

    } catch (error){
        response.status(404).json({message: error.message})
    }
}

//GET que retorna o usuario com nome selecionado

const getByNome = async (request, response)=>{
    try {
        let usuariosJson = await dbConnect()
        let nomeRequest = request.query.nome.toLowerCase()

        let encontraUsuarioPeloNome = usuariosJson.filter(usuario => usuario.nome.toLowerCase().includes(nomeRequest))

        console.log(encontraUsuarioPeloNome)

        if(encontraUsuarioPeloNome == undefined) throw new Error("Usuário não encontrado.")

        response.status(200).send(encontraUsuarioPeloNome)

    } catch (error){
        response.status(404).json({message: error.message})
    }
}

module.exports ={
    getAll,
    getById,
    getByNome
}