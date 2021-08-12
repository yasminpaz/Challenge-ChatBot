const express = require("express")
const erros = require('./erros')
const MensagemService = require('./Services/MensagensService')

const app = express()
app.use(express.json())

app.get("/valores/:idValor", (request, response) => {
    const { idValor } = request.params

    if (!idValor)
        response.status(400).send(erros.sem_resposta)
    
    const mensagem = MensagemService.buscarMensagem(idValor)

    response.status(200).send(mensagem)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Servidor Iniciado')
})