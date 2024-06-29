const express = require('express');
const app = express();

const productsRoutes = require('./routes/productsRoutes');

app.use('/prueba', (request,response) =>{
    response.status(200).send('servidor activo');
});

app.use('/products', productsRoutes);

const PORT = process.env.SERVER_PORT || 3030;
app.listen(PORT, () => {
    console.log('servidor activo en el PORT: ' + PORT);
});
