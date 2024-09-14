import express from 'express'

const app = express()

app.get('/user', (request, response) => {
    response.send("Hello world, route accessed successfully")
})

app.post('/user', (req, res) => {
    res.send("Hello my friend")
})

app.listen(3000)

// req - request ou requisição
// res - response ou resposta
// http://localhost:3000