//invoquei a controller
const controller = require("../controllers/calculadoraController")

//invocar o express
const express = require("express")

//função de rotas do express
const router = express.Router()

//router.METODO(rota, função)

router.get("/somar", controller.getSomar)

router.get("/subtrair", controller.getSubtrair)

router.get("/dividir", controller.getDividir)

router.get("/multiplicar", controller.getMultiplicar)

module.exports = router