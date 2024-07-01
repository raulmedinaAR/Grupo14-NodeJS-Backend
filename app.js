const express = require('express');
const app = express();

app.use('/', (request, response) => {
    response.status(200).send(`<br><br><br><center><h1><b>Servidor activo!!!</b></h1><h3>${request.method}:&nbsp;&nbsp;&nbsp;${request.url}</h3></center>`);
});

const PORT = process.env.SERVER_PORT || 3030;
app.listen(PORT, () => {
    console.log('servidor activo en el PORT: ' + PORT);
});
