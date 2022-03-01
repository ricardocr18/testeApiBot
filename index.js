const express = require('express');
//const bodyParser = require ('body-parser');

const app = express();
//app.use(bodyParser.json())

app.use(express.json()) //Aqui eu pego as informações no corpo da requisição
app.use(express.urlencoded({ extended: true })) // Aqui eu pego as informsações pela URL

const port = process.env.PORT || 3000

let db = ""
let novopedidopizza = "Não";
let totalDepedido = 0;
let totalDeConsume = 0;
let opcao = ""

if (novopedidopizza == 'Sim') {
    db = "Novo Pedido"
    totalDepedido = 2
    totalDeConsume = 40
    opcao = novopedidopizza
} else {
    db = "Bora API"   
    totalDepedido = 1
    totalDeConsume = 20
    

}

/* buscar dadoss
app.get('/', (req, res) => {
    return res.json(db)
}) */

/*
//buscar dadoss
app.get('/teste', (req, res) => {
    console.log(req.bodyParser)
  });


//inserir dados
app.post('/teste', (req, res) => {
    res.send(JSON.stringify(inbenta))    
    
    console.log(req.body) 
         
})
*/

//buscar dadoss
app.get('/', (req, res) => {
    return res.json(db)
})

//inserir dados
app.post('/teste', (req, res) => {
    res.send('POST para /tasks')
    console.log(req.body)
    //res.send(JSON.stringify( inbenta ))
    
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