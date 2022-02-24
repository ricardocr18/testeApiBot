const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

let db = "Tudo OK no Teste"

//buscar dados
app.get('/', (req, res) => {
    return res.json(db)
})

//inserir dados
app.post('/teste', (req, res) => {
    return res.json(db)
    // const body = req.body

    // if (!body)
    //     return res.status(400).end()

    // db.push(body)
    // return res.json(body)
})


app.listen(port, () => {
    console.log('Teste API no Heroku')
})