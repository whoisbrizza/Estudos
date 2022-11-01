require('dotenv').config() //invoca o dotenv
const app = require("./src/app") //invoca app
const PORT = process.env.PORT // traz o valor de port de dentro do arquivo .env
app.listen(PORT) //define a porta do servidor

app.get('/', function (req, res) {
    res.send({
        message: 'Primeiro get - OK'
    })
})