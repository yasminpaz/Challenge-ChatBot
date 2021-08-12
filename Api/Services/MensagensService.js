const mensagens = require("../mensagens")
const erros = require("../erros")

class MensagensService {
    buscarMensagem(resposta) {
        // 💙 Saber mais
        if (resposta == 1)
            return mensagens['take.be']
        
        // 🏳 Saber mais
        if (resposta == 2)
            return mensagens['take.team']

        // ⭐ Saber mais
        if (resposta == 3)
            return mensagens['take.excellence']

        // ⚡ Saber mais
        if (resposta == 4)
            return mensagens['take.charge']

        // 🎯 Saber mais
        if (resposta == 5)
            return mensagens['take.simple']

        // 🚀 Saber mais
        if (resposta == 6)
            return mensagens['take.higher']
        
        // Fazer desafio
        if (resposta == 7)
            return mensagens['desafio']

        if (resposta > 7 || resposta < 1)
            return erros.fail
    }
}
module.exports = new MensagensService()