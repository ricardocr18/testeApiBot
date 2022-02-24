const express = require('express');
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 3000

let db = "Tudo OK no Teste 40%"

let inbenta = {
    "status": "success",
    "chatbot_response": db
    
}

//buscar dadoss
app.get('/', (req, res) => {
    return res.json(db)
})

//inserir dados
app.post('/teste', (req, res) => {

    res.send(JSON.stringify({ inbenta }))
    return
}),


app.listen(3000, () => {
    console.log('Teste API no Heroku')
})