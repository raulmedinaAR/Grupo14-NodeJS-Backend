const mysql = require('mysql2');

const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

dbConnection.connect( (err) =>{
    if(err) {
        console.error("Error en la conexion a la base de datos: " + process.env.DB_NAME, err);
        return;
    }
    console.log("Conectado a la base de datos: " + process.env.DB_NAME);
});

module.exports = dbConnection;
