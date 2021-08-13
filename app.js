const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    // req es la request, la petición
    // res es la response, la respuesta
    res.status(200).send('Hello World');
});

app.post('/login', (req, res) =>{
    
});

app.post('/team/pokemons', ()=>{
    res.status(200).send('Hello World');
});

app.get('/team',(req, res)=>{
    res.status(200).send('Hello World');
});

app.delete('/team/pokemons/:pokeid', ()=>{
    res.status(200).send('Hello World');
});

app.put('/team',()=>{
    res.status(200).send('Hello World');
});

app.listen(port, () =>{
    console.log('Server started at port 3000');
})

exports.app = app;