const packageJson = require('../package.json');
const express = require('express');
const app = express();

app.use(express.json()); // Middleware para parsear las solicitudes entrantes JSON

const productsRoutes = require('./routes/productsRoutes');
const tokenRoutes    = require('./routes/tokenRoutes');

app.use('/products', productsRoutes);
app.use('/token', tokenRoutes);

app.use('/version', (request, response) => {
    response.status(200).json({ version: packageJson.version });
});

app.use('/', (request, response) => {
    response.status(200).send(`<br><br><br><center><h1><b>Servidor activo!!!</b></h1><h3>${request.method}:&nbsp;&nbsp;&nbsp;${request.url}</h3></center>`);
});

const PORT = process.env.SERVER_PORT || 3030;
app.listen(PORT, () => {
    console.log('servidor activo en el PORT: ' + PORT);
});
