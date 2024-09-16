import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.get('/user', async (request, response) => {

    const users = await prisma.user.findMany()

    response.status(200).json(users)
})

app.post('/user', async (req, res) => {

    const usuario = await prisma.user.create({
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })

    res.status(201).json(usuario)
})

app.put('/user/:id', async (req, res) => {

    const usuario = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })

    res.status(200).json(usuario)
})

app.delete('/user/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }

    })
    res.status(200).json({ message: "Usuário deletado com sucesso" })
})

app.listen(3000)

// req - request ou requisição
// res - response ou resposta
// http://localhost:3000