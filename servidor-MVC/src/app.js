const express = require("express")

const usuariosRoutes = require("./routes/usuariosRoutes")

const app = express()

app.use(express.json())

//criando rota raiz de usuarios
app.use("/usuarios", usuariosRoutes)

//exportar app para ser usado no server.js
module.exports = app