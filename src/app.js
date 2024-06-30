const packageJson = require('../package.json');
const express = require('express');
const app     = express();

const productsRoutes = require('./routes/productsRoutes');
const tokenRoutes    = require('./routes/tokenRoutes');

app.use('/products', productsRoutes);
app.use('/token', tokenRoutes);

app.use('/version', (request, response) => {
    response.status(200).json({ version: packageJson.version });
});

app.use('/', (request, response) => {
    response.status(200).send('<br><br><br><h1><center><b>Servidor activo!!!</b></center></h1>');
});

const PORT = process.env.SERVER_PORT || 3030;
app.listen(PORT, () => {
    console.log('servidor activo en el PORT: ' + PORT);
});
