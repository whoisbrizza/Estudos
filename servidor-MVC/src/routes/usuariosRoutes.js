//invoquei a controller
const controller = require("../controllers/usuariosController")

//invocar o express
const express = require("express")

//função de rotas do express
const router = express.Router()

//router.METODO(rota, função)

router.get("/", controller.getAll)

router.get("/pesquisar/:id", controller.getById)

module.exports = router