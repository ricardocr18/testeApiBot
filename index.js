const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Olá aqui API está ok')
})

app.listen(port, () => {
    console.log('Teste API no Heroku')
})