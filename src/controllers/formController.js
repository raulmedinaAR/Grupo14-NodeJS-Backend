const { response } = require('express');
const dbConnection = require('../db/db');
const { sendEmailHtml } = require('../helpers/emailHelper');

function procesarFormulario(req, res) {
    const { nombre, email, telefono, fecha_nacimiento, tipo_consulta, formas_de_contacto, comentarios } = req.body;

    dbConnection.query('INSERT INTO contactos (nombre, email, telefono, fecha_nacimiento, tipo_consulta, formas_de_contacto, comentarios) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [nombre, email, telefono, fecha_nacimiento, tipo_consulta, formas_de_contacto, comentarios], (error, result) => {
            if (error) {
                res.status(500).json({
                    mensaje: 'Se produjo un error al insertar el contacto'
                });
                return;
            }

            const asunto = 'Gracias por contactarnos';
            const cuerpo = `
                <p>Hola ${nombre},</p>
                <p>Gracias por ponerte en contacto con nosotros. Hemos recibido tu consulta y nos pondremos en contacto contigo pronto.</p>
                <p>Detalles de tu consulta:</p>
                <h1 style="color:red; text-align: center;">CUERVO INDUMENTARIA</h1>
                <ul>
                    <li>Nombre: ${nombre}</li>
                    <li>Email: ${email}</li>
                    <li>Teléfono: ${telefono}</li>
                    <li>Fecha de nacimiento: ${fecha_nacimiento}</li>
                    <li>Tipo de consulta: ${tipo_consulta}</li>
                    <li>Forma de contacto preferida: ${formas_de_contacto}</li>
                    <li>Comentarios: ${comentarios}</li>
                </ul>
                <p>¡Gracias nuevamente!</p>
                <center> <img src="https://grupo14.netlify.app/img/LogoCuervoIndumentaria.png" alt="logo"></center>
            `;
            
            sendEmailHtml(email, '', asunto, cuerpo,
                (result) => {
                    console.log('Email enviado correctamente', result);
                },
                (error) => {
                    console.log('Error al enviar el email.', error);
                }
            );

            res.status(201).json({
                mensaje: 'Contacto enviado correctamente'
            });
        });
}

module.exports = {
    procesarFormulario
};
