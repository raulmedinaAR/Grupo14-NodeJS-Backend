const dbConnection = require('../db/db');
const { sendEmailHtml } = require('../helpers/emailHelper');

const subscriptionAdd = (request, response) => {
    const sql = `INSERT INTO ${process.env.DB_NAME}.subscriptions (email, promotions, news) VALUES (?, 1, 1);`;
  
    if (request.body.email === undefined) {
        response.status(400).json({ message: 'No llego el email a suscribir.' });
    }
    else {
        const email = request.body.email;
        dbConnection.query(sql, email, (error, result) => {
            if (error) {
                response.status(500).json({ message: 'Se produjo un error al realizar la suscripción.' });
                return;
            }
            // Envio el email de confirmando de la suscripcion, con el link para modificar/eliminar la suscripcion
            sendEmailSubscriptionAdded(email);

            response.status(201).json({ message: 'La subscriptión se ha dado de alta, verificá tu email y comenza a disfrutar de nuestros descuentos y beneficios.', insertId: result.insertId });
        });
    }
};

const subscriptionUpdate = (request, response) => {
    let sql = ''; 
    
    switch(request.body.updateCode) {
        case 1: 
            sql = `UPDATE ${process.env.DB_NAME}.subscriptions SET promotions = 1, news = 0 WHERE email = ?;`;
            break;
        case 2: 
            sql = `UPDATE ${process.env.DB_NAME}.subscriptions SET promotions = 0, news = 1 WHERE email = ?;`;
            break;
        case 4: 
            sql = `UPDATE ${process.env.DB_NAME}.subscriptions SET promotions = 1, news = 1 WHERE email = ?;`;
            break;

        default:
            response.status(400).json({ message: 'No llego el codigo de actualizacion.' });
            return;
    }
  
    if (request.body.email === undefined) {
        response.status(400).json({ message: 'No llego el email a actualizar la suscripción.' });
    }
    else {
        dbConnection.query(sql, [request.body.email], (error, result) => {
            if (error) {
                response.status(500).json({ message: 'Se produjo un error al actualizar la suscripción.' });
                return;
            }
            response.status(200).json({ message: 'Subscriptión actualizada correctamente.' });
        });
    }
};

const subscriptionDelete = (request, response) => {
    const sql = `DELETE FROM ${process.env.DB_NAME}.subscriptions WHERE email = ?;`;
  
    if (request.body.email === undefined) {
        response.status(400).json({ message: 'No llego el email a cancelar la suscripción.' });
    }
    else {
        const email = request.body.email;
        dbConnection.query(sql, email, (error, result) => {
            if (error) {
                response.status(500).json({ message: 'Se produjo un error al intentar cancelar la suscripción.' });
                return;
            }
            response.status(200).json({ message: 
                `Estimado cliente,<br><br>

Confirmamos que a partir de este momento su dirección de correo electrónico ha sido removida de nuestra lista. Ud. dejará de recibir nuestras promociones y novedades!
<br><br>
Agradecemos el tiempo que nos ha permitido estar en contacto y cualquier comentario que nos pueda hacer llegar para optimizar nuestras comunicaciones.
<br><br>
Muchas Gracias,
Cuervo Indumentaria<br>`
             });
        });
    }
};

function sendEmailSubscriptionAdded(email) {
    sendEmailHtml
    (
        email, 
        '', 
        'Suscripción a Cuervo Indumentaria', 
        `
        <div style="background-color: white; width: 100%;">
            <br><br>
            <center>
            <img src="https://grupo14.netlify.app/img/LogoCuervoIndumentaria.png" alt="logo">
            <h1 style="color:black; text-align: center;">CUERVO INDUMENTARIA</h1>
            <p style="font-size: 1.5rem;">
                Te da las gracias por suscribirte a nuestro canal de comunicación.<br>
                Preparate para recibir todas nuestras novedades y beneficios exclusivos.
                <br><br><br>
                Te regalamos un 40%OFF para tu primer compra</p>
                <p style="font-size: 1.5rem; background-color: black; color: white; padding: 20px; width: 40%;">
                    CUPÓN: BIENVENIDA40
                </p>
                <p>*cupón de uso único. No acumulable con promociones vigentes y/o bancarias. Pagos habilitados: 3 cuotas sin interés.</p>
                <p style="font-size: 1.4rem;">¡Esperamos que lo disfrutes!</p>

                <br><br>
                <p>Si no deseas recibir más nuestras promociones y/o novedades <a href="https://grupo14.netlify.app/actualizarSuscripcion.html?email=${email}">modifica tu suscripción</a></p>
            </center>
        </div>`, 
        (result) => {
            console.log('Email enviado correctamente', result);
        }, 
        (error) => {
            console.log('Error al enviar el email.', error);
        }
    );
}

module.exports = { subscriptionAdd, subscriptionUpdate, subscriptionDelete };
