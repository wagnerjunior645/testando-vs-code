
const express = require("express");

const app = express();

app.get('/',(req,res)=>{
    res.json( {msg:'Olá Mundo'} );
});

app.listen(80,()=>{
    console.log('Servidor Rodando');
});