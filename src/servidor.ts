import Fastify from 'fastify'

const servidor = Fastify({
    logger: true
})

servidor.get('/', function controlador (requisicao, resposta){
    const saudacao = 'Bem vindo ao primeiro servidor Node.js com Typescript'
    return resposta.send(saudacao)
})

servidor.listen({
    port: 3000
})
