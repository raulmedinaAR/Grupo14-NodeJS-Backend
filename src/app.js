const express = require('express');
const app = express();
const productsRoutes = require('./routes/productsRoutes');
const PORT = 3000;
app.use('/prueba', (request,response) =>{
response.status(200).send('servidor activo');
});

app.use('/products', productsRoutes);

app.listen(PORT, ()=> {
    console.log('servidor activo en el PORT: ' + PORT);
});