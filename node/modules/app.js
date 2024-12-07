const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./escrever')



const pessoas = [
    {nome : 'João'},
    {nome : 'Gustavo'},
    {nome : 'Ana'},
    {nome : 'Maria'}
]

const json = JSON.stringify(pessoas, '', 2)

escreve(caminhoArquivo, json)