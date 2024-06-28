const express = require('express');
const { request } = require('http');
const app = express();
const PORT = 3000;
app.use('/prueba', (request,response) =>{
response.status(200).send('servidor activo');
});

app.listen(PORT, ()=> {
    console.log('servidor activo en el PORT: ' + PORT);
});