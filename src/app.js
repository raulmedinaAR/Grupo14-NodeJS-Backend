const packageJson = require('../package.json');
const express = require('express');
const cors = require('cors');


const productsRoutes = require('./routes/productsRoutes');
const promotionsRoutes = require('./routes/promotionsRoutes');
const subscriptionsRoutes = require('./routes/subscriptionsRoutes');
const tokenRoutes = require('./routes/tokenRoutes');
const formRoutes = require('./routes/formRoutes');

const app = express();
app.use(cors());
app.use(express.json()); // Middleware para parsear las solicitudes entrantes JSON

app.use('/products', productsRoutes);
app.use('/promotions', promotionsRoutes);
app.use('/subscription', subscriptionsRoutes);
app.use('/token', tokenRoutes);
app.use('/form', formRoutes);

app.use('/version', (request, response) => {
    response.status(200).json({ version: packageJson.version });
});

app.use('/', (request, response) => {
    response.status(200).send(`<br><br><br><center><h1><b>Servidor activo!!!</b></h1><h3>${request.method}:&nbsp;&nbsp;&nbsp;${request.url}</h3></center>`);
});

const PORT = process.env.SERVER_PORT || 8100;
app.listen(PORT, () => {
    console.log('servidor activo en el PORT: ' + PORT);
});
