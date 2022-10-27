const express = require("express")

const bancoRoutes = require("./routes/bancoRoutes")

const app = express()

app.use(express.json())

//criando rota raiz de banco
app.use("/banco", bancoRoutes)

//exportar app para ser usado no server.js
module.exports = app