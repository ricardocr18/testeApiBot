//const bodyParser = require ('body-parser');
//app.use(bodyParser.json())

const express = require('express');
const app = express();

app.use(express.json()) //Aqui eu pego as informações no corpo da requisição
app.use(express.urlencoded({ extended: true })) // Aqui eu pego as informsações pela URL

const port = process.env.PORT || 3000

// let db = ""
// let novopedidopizza = "";
// let totalDepedido = 0;
// let totalDeConsume = 0;
// let opcao = ""


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

// //buscar dadoss
// app.get('/', (req, res) => {
//     return res.json(db)
// })

//inserir dados
app.post('/teste', (req, res) => {
    //console.log(req.body)
    //console.log("Aqui é uma variavel: " + (req.body.opcao_pizza))  
  
    //db = "Ok, vamos continuar 😊"

    if (req.body.novopedidopizza == 'Sim') {
            db = "Ok, novo Pedido 😊"
            totalDepedido = 2
            tipoPizzaB = req.body.opcao_pizza
            tipoPizza = req.body.opcao_pizza
            totalDeConsume = 40
            opcao = req.body.novopedidopizza
        } else {
            db = "Ok, vamos continuar 😊"  
            totalDepedido = 3
            tipoPizza = req.body.opcao_pizza
            totalDeConsume = 30   
            opcao = req.body.novopedidopizza 
        }
    
    let inbenta = { 
        "status": "success",
        "chatbot_response": db,
        "raw_output": [
            {
                "output_variable": "totalDepedido",
                "output_result": totalDepedido
            },
            {
                "output_variable": "tipoPizza",
                "output_result": tipoPizza
            },
            {
                "output_variable": "opcao",
                "output_result": opcao
            },
            {
                "output_variable": "tipoPizzaB",
                "output_result": tipoPizzaB
            }            
        ]
    }  
    
    res.send(JSON.stringify(inbenta))
})



app.listen(port, () => {
    console.log('Teste API no Heroku')
})