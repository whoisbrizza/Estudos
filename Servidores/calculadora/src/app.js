const express = require("express")

const calculadoraRoutes = require("./routes/calculadoraRoutes")

const app = express()

app.use(express.json())

//criando rota raiz da calculadora
app.use("/calculadora", calculadoraRoutes)

//exportar app para ser usado no server.js
module.exports = app