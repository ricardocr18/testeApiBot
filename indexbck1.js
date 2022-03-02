//Arquivo backp do dia 25/02/2022 as 16:22
const express = require('express');
const app = express()

const port = process.env.PORT || 3000

let db = ""
let novopedidopizza = "Não";
let totalDepedido = 0;
let totalDeConsume = 0;
let opcao = ""


if(novopedidopizza == 'Sim'){
    db = "Novo Pedido"
    totalDepedido = 2
    totalDeConsume = 40
    opcao = novopedidopizza
}else {
    db = "Escolha Bebida"
    totalDepedido = 1
    totalDeConsume = 20
    opcao = novopedidopizza
}

//buscar dadoss
app.get('/', (req, res) => {
    return res.json(db)
})

//inserir dados
app.post('/teste', (req, res) => {

    res.send(JSON.stringify( inbenta))
    return
})


let inbenta = {
    "status": "success",
    "chatbot_response": db,
    "raw_output": [
        {
            "output_variable": "totalDepedido",
            "output_result": totalDepedido
        },
        {
            "output_variable": "totalDeConsume",
            "output_result":  totalDeConsume
        },
        {
            "output_variable": "opcao",
            "output_result": opcao
        }
    ]
    
}

app.listen(port, () => {
    console.log('Teste API no Heroku')
})