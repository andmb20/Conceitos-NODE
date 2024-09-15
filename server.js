import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.get('/user', (request, response) => {
    response.status(200).json(users)
})

app.post('/user', (req, res) => {
    users.push(req.body)
    res.status(201).json({message: "Usuário criado com sucesso"})
})

app.listen(3000)

// req - request ou requisição
// res - response ou resposta
// http://localhost:3000