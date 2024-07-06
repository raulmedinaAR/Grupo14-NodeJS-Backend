// controllers/formController.js
const { response } = require('express');
const dbConnection = require('../db/db');
const { sendEmailHtml } = require('../helpers/emailHelper');

function procesarFormulario(req, res) {
    const { nombre, email, telefono, fecha_nacimiento, tipo_consulta, formas_de_contacto, comentarios } = req.body;

    console.log(nombre, email, telefono, fecha_nacimiento, tipo_consulta, formas_de_contacto, comentarios);
    // 'contactos'
    dbConnection.query('INSERT INTO contactos (nombre, email, telefono, fecha_nacimiento, tipo_consulta, formas_de_contacto,comentarios) VALUES (?, ?, ?, ?, ?, ?,?)',
        [nombre, email, telefono, fecha_nacimiento, tipo_consulta, formas_de_contacto, comentarios], (error, result) => {
            if (error) {
                res.status(500).json({
                    mensaje: 'Se produjo un error al insertar el contacto'
                });
                return;
            }
            sendEmailContactAdded(email);

            res.status(201).json({
                mensaje: 'contacto enviado correctamente'
            });


        });


}
function sendEmailContactAdded(email) {
    sendEmailHtml
        (
            email,
            '',
            'Contacto Cuervo Indumentaria',

            `Gracias por contactarnos`,
            (result) => {
                console.log('Email enviado correctamente', result);
            },
            (error) => {
                console.log('Error al enviar el email.', error);
            }
        );
}

module.exports = {
    procesarFormulario
};
