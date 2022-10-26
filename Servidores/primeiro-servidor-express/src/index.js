const express = require("express")

const app = express()

app.get("/home", (req, res) => {
    res.send("Olá, esse é o meu primeiro servidor com o express!")
})

app.get("/usuarios", (req, res) => {
    res.send([
        {id: 11, nome: "Joao", idade: 23}, 
        {id: 2, nome: "Maria", idade: 18}, 
        {id: 4, nome: "Ana", idade: 30}, 
        {id: 1, nome: "Rodrigo", idade: 17}, 
        {id: 123, nome: "Rodrigo", idade: 17}
    ])
})


app.listen(3000, () => console.log("Servidor ON!"))