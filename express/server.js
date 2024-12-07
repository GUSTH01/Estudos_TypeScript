const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('Hello world!')
})

app.get('/contato', (req, res) =>
{
    res.send('obrigado por entrar nessa pagina')
})

app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000')
    console.log('O servidor esta executando na porta 3000')
})