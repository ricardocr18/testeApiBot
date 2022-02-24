const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

let db = "Tudo OK no Teste 100%"

//buscar dados
app.get('/', (req, res) => {
    return res.json(db)
})

//inserir dados
app.post('/teste', (req, res) => {

    return json.dumps(
        {
            "status": "success",
            "chatbot_response": db,
            "raw_output": [
                {
                    "output_variable": "tipopizza",
                    "output_result": "Fluzão Campeão"
                }
            ]
        }
        , indent = 3)


})

app.listen(port, () => {
    console.log('Teste API no Heroku')
})