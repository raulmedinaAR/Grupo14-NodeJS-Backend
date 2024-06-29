const express = require('express');
const app = express();

const productsRoutes = require('./routes/productsRoutes');

app.use('/', (request, response) => {
    response.status(200).send('<br><br><br><h1><center><b>Servidor activo!!!</b></center></h1>');
});

app.use('/version', (request, response) => {
    response.status(200).json({ version: packageJson.version });
});

app.use('/products', productsRoutes);

const PORT = process.env.SERVER_PORT || 3030;
app.listen(PORT, () => {
    console.log('servidor activo en el PORT: ' + PORT);
});
