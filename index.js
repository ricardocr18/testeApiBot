//const bodyParser = require ('body-parser');
//app.use(bodyParser.json())

const express = require('express');
const app = express();

app.use(express.json()) //Aqui eu pego as informações no corpo da requisição
app.use(express.urlencoded({ extended: true })) // Aqui eu pego as informsações pela URL

const port = process.env.PORT || 3000

let db = ""
let novopedidopizza = "";
let totalDepedido = 0;
let totalDeConsume = 0;
let opcao = ""


// if (novopedidopizza == 'Sim') {
//     db = "Novo Pedido"
//     totalDepedido = 2
//     totalDeConsume = 40
//     opcao = novopedidopizza
// } else {
//     db = "Bora API"   
//     totalDepedido = 1
//     totalDeConsume = 20    
// }

//buscar dadoss
app.get('/', (req, res) => {
    return res.json(db)
})

//inserir dados
app.post('/teste', (req, res) => {
    console.log("Aqui é uma variavel: " + (req.body.opcao_pizza))
    res.send(JSON.stringify(inbenta)) 
    
    function correa () {
        if (req.body.opcao_pizza = "Camarão") {
            totalDepedido = 1
            totalDeConsume = 1
            opcao = req.body.opcao_pizza
        } else {
            totalDepedido = 1
            totalDeConsume = 1
            opcao = req.body.opcao_pizza
        }
        return correa(totalDepedido)
    } 

    console.log(correa("Total de Pedidos: " + totalDepedido))
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
            "output_result": totalDeConsume
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