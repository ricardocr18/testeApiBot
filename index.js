const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Teste de API no Heroku GET !!!')

    
})

app.post('/apipost', (req, res) => {
    res.send('Teste de API no Heroku POST!!!')

    
})


app.listen(port, () => {
    console.log('Teste API no Heroku')
})