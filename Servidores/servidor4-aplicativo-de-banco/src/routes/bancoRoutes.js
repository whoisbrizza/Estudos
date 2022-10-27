//invoquei a controller
const controller = require("../controllers/bancoController")

//invocar o express
const express = require("express")

//função de rotas do express
const router = express.Router()

//router.METODO(rota, função)
router.get("/usuarios", controller.getAll)

router.get("/login", controller.getLogin)

router.post("/cadastrar", controller.postNovoUsuario)

router.delete("/deletar/:id", controller.deletarUsuario)

router.put("/update/senha/:id", controller.updateSenha)

router.get("/pesquisar/:id", controller.getById)


//exportar para ser usado no app.js
module.exports = router