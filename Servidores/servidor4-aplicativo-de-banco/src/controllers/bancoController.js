const bancoDeDados = require("../models/db")

async function db() {
    return await bancoDeDados.db("appBanco")
}

//GET que retorna todos os usuários logados no aplicativo do banco
const getAll = async(request, response)=>{
    try {
        let appBancoJson = await db()

       response.status(200).send(appBancoJson)

    } catch (error){
       response.status(500).json({message: error.message})
    }
}

//GET que retorna usuário por 
const getById = async (request, response)=>{
    try {
        let appBancoJson = await db()
        let idRequest = request.params.id

        let encontraUsuarioPeloId = appBancoJson.find(usuario => usuario.id == idRequest)

        if(encontraUsuarioPeloId == undefined) throw new Error("Usuário não encontrado.")

        response.status(200).send(encontraUsuarioPeloId)

    } catch (error){
        response.status(404).json({message: error.message})
    }
}

//GET que mostra o usuário fazendo o login no aplicativo do banco
const getLogin = async (request, response) => {
    try {
        let appBancoJson = await db()
        
        let nomeRequest = request.query.nome
        let senhaRequest = request.query.senha

        let encontraUsuarioPeloNome = appBancoJson.find(usuario => usuario.nome === nomeRequest)

        if (!nomeRequest) throw new Error("O nome de usuário é obrigatório.")
        if (encontraUsuarioPeloNome == undefined) throw new Error(
            "Usuário não encontrado no banco de dados, ou está incorreto.")

        if (!senhaRequest) throw new Error("A senha é obrigatória.")
        if (encontraUsuarioPeloNome.senha !== senhaRequest) throw new Error("A senha está incorreta.")

        if (encontraUsuarioPeloNome.nome === nomeRequest && encontraUsuarioPeloNome.senha === senhaRequest) 
        return response.status(200).send({ message: "Login efetuado com sucesso!" })

    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

//POST para criar um novo usuário
const postNovoUsuario = async (request, response)=>{
    
    let bodyRequest = request.body
    let appBancoJson = await db()
    let usuarios = appBancoJson

    console.log(usuarios.length)

    const {
        nome, senha
    } = request.body

    if (!nome || nome.trim() === "") {
        return response.status(400).send({ message: `O nome é obrigatorio.` })
    }

    if (!senha || senha.trim() === "") {
        return response.status(400).send({ message: `A senha é obrigaria.` })
    }

    const nomeExiste = usuarios.some(usuario => usuario.nome === nome)

    if (nomeExiste === true) {
        return response.status(409).send({ message: `O usuário ${nome} já existe!` })
    }

    let novoUsuario = {
        id: (usuarios.length),
        nome: bodyRequest.nome,
        senha: bodyRequest.senha
    }

    usuarios.push(novoUsuario)

    response.status(201).send({
        mensagem: "Usuário cadastrado com sucesso!",
        novoUsuario
    })

}

//PUT para alterar a senha de um usuário
const updateSenha = async (request, response)=>{
    try {
    const appBancoJson = await db()

    let idRequest = request.params.id
    let novaSenha = request.body.senha

    const usuarioEncontrado = appBancoJson.find(usuario => usuario.id == idRequest)

    usuarioEncontrado.senha = novaSenha

    response.status(200).json({
        "mensagem": "Senha atualizada com sucesso!",
        "usuario-senha-atualizada": usuarioEncontrado
    })
} catch (error){
    response.status(500).json({message: error.message})
}
}

//DELETE para deletar um usuário
const deletarUsuario = async (request, response) => {
    try {
        const usuarios = await db()

        let idRequest = request.params.id

        const usuarioEncontrado = usuarios.find(usuario => usuario.id == idRequest)

        if(usuarioEncontrado == undefined) throw new Error("Usuário não encontrado.")

    //pegar o indice do usuário que será deletado

    const indice = usuarios.indexOf(usuarioEncontrado)

    //ARRAY.splice(INDICE, NUMERO DE ITENS Q QUEREMOS DELETAR)
    usuarios.splice(indice, 1)

    response.status(200).json({
        "mensagem": "Usuário deletado com sucesso.",
        "usuario-deletado": usuarioEncontrado
    })

} catch (error){
    response.status(500).json({message: error.message})
}}

//exportar as funções do controller
module.exports ={
    getAll,
    getById,
    getLogin,
    postNovoUsuario,
    updateSenha,
    deletarUsuario
}